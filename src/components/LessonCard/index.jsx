import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../../shared/colors";
import styles from "./styles";

const LessonCard = ({ lesson }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Lesson", { id: lesson.id })}
      style={styles.container}
    >
      <Text style={styles.lessonNumber}>
        {lesson.id < 10 ? `0${lesson.id}` : lesson.id}
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.subTitle}>
          {lesson.completed}/10 Tarefas finalizadas
        </Text>
      </View>
      <AntDesign
        style={{ alignSelf: "center" }}
        name="arrowright"
        size={20}
        color={colors.blue}
      />
    </TouchableOpacity>
  );
};

export default LessonCard;
