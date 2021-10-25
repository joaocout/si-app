import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import Button from "../../components/Button";

/**
 * Tipos:
 *      0 = verdadeiro/falso 
 *      1 = multipla escolha
 *      2 = texto a preencher
 */

const ExerciseContent = ({ question }) => {
    const [ answer, setAnswer ] = useState(-1);

    if(question.type == 0) {
        return (
            <View>
                <Text style={styles.text_title}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {question.content}
                </Text>
            </View>
        );
    } else if(question.type == 1) {
        return (
            <View>
                <Text style={styles.text_title}>
                    Tarefa {question.id} - {question.title}
                </Text>
                <Text style={styles.text_content}>
                    {question.content}
                </Text>
                {question.options.map((item, key) => {
                    return (
                        <Button 
                            key={key} 
                            style={{marginTop: (key == 0 ? 0 : 7)}} 
                            text={item.text} 
                            pressed={answer == key ? ( item.correct ? 1 : 2 ) : 0}
                            onPress={() => setAnswer(key)} 
                        />
                    );
                })}
            </View>
        );
    } else {
        return (
            <View>
                <Text style={styles.text_title}>
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