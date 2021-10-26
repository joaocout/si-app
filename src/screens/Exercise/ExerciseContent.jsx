import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

import Button from "../../components/Button";
import colors from "../../shared/colors";

// question: {
//     id: 2,
//     type: "multiple_choice", // multipla escolha
//     title: "Algoritmos",
//     content: "Qual das seguintes opções não representa um exemplo de algoritmo?",
//     options: [
//         {
//             text: "Receita culinária",
//             correct: false,
//         },
//         {
//             text: "Instruções de montagem",
//             correct: false,
//         },
//         {
//             text: "Lista de compras",
//             correct: true,
//         },
//     ]
// },
const ExerciseContent = ({ question }) => {
    const [ answer, setAnswer ] = useState(-1);

    if(question.type == "true_false") {
        return (
            <View>
                { question.id != 1 ? <View style={styles.hr}></View> : undefined }
                <Text style={[styles.text_title, {marginTop: 0}]}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {question.content}
                </Text>
                <Button
                    text="Verdadeiro" 
                    color={answer == 0 ? ( question.answer ? "green" : "false" ) : "default"}
                    onPress={() => setAnswer(0)} 
                />
                <Button
                    style={{marginTop: 7}}
                    text="Falso" 
                    color={answer == 1 ? ( !question.answer ? "green" : "false" ) : "default"}
                    onPress={() => setAnswer(1)} 
                />
            </View>
        );
    } else if(question.type == "multiple_choice") {
        return (
            <View>
                { question.id != 1 ? <View style={styles.hr}></View> : undefined }
                <Text style={[styles.text_title, {marginTop: 0}]}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {question.content}
                </Text>
                {question.options.map((item, key) => {
                    return (
                        <Button 
                            key={key} 
                            style={{marginTop: (key == 0 ? 0 : 7)}} // margem se nao for o primeiro elemento
                            text={item.text} 
                            color={answer == key ? ( item.correct ? "green" : "red" ) : "default"}
                            onPress={() => setAnswer(key)} 
                        />
                    );
                })}
            </View>
        );
    } else {
        let content = question.content.split(" ");
        let input_counter = -1;

        let empty = [];
        for(let i=0;i<question.answers.length;i++) {
            empty.push("");
        }
        const [ texts, setTexts ] = useState(empty);
        const [ inputColors, setInputColors ] = useState(empty);

        const evaluate_answers = () => {
            let tmp = [...inputColors];
            let count_correct = 0;
            for(let i=0;i<question.answers.length;i++) {
                if(question.answers[i] == texts[i]) {
                    tmp[i] = "green";
                    count_correct++;
                } else {
                    tmp[i] = "red";
                }
            }
            setInputColors(tmp);
            if (count_correct == question.answer.length) {
                setAnswer(1); // correto
            } else {
                setAnswer(0); // incorreto
            }
        };

        return (
            <View>
                { question.id != 1 ? <View style={styles.hr}></View> : undefined }
                <Text style={[styles.text_title, {marginTop: 0}]}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {content.map((word, key) => {
                        if (word == "_") {
                            input_counter++;
                            return <TextInput 
                                        key={key} 
                                        style={[styles.input, {
                                            width: question.answers[input_counter].length * 9,
                                            borderColor: inputColors[input_counter] == "" ? colors.gray : colors[inputColors[input_counter]]
                                        }]}
                                        onChangeText={text => {
                                            let tmp = [...texts];
                                            tmp[input_counter] = text;
                                            setTexts(tmp);
                                        }}
                                    />
                        }
                        return word + " ";
                    })}
                </Text>
                <Button
                    text="Enviar" 
                    color={"default"}
                    onPress={evaluate_answers} 
                />
            </View>
        );
    }
}

export default ExerciseContent;