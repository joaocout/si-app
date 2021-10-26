import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const LessonContent = ({ lesson }) => {
    let content = lesson.content.split(" ");

    return (
        <View>
            <Text style={[styles.text_title, lesson.id == 1 ? {marginTop: 0} : undefined]}>
                {lesson.title}
            </Text>
            <Text style={styles.text_content}>
                {/* {lesson.content} */}
                {content.map((word,key) => {
                    return word.startsWith("*") ? <Text key={key} style={{fontFamily: 'Montserrat_600SemiBold'}}>{word.substring(1)} </Text> : word + " ";
                })}
            </Text>
        </View>
    );
}

export default LessonContent;