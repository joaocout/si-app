import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import Button from "../../components/Button";

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
        return (
            <View>
                { question.id != 1 ? <View style={styles.hr}></View> : undefined }
                <Text style={[styles.text_title, {marginTop: 0}]}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {question.content}
                </Text>
            </View>
        );
    }
}

export default ExerciseContent;