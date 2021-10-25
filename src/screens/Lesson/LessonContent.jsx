import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const LessonContent = ({ lesson }) => (
    <View>
        <Text style={styles.text_title}>
            {lesson.title}
        </Text>
        <Text style={styles.text_content}>
            {lesson.content}
        </Text>
    </View>
);

export default LessonContent;