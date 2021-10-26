import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../shared/colors";

import LessonCard from "../../components/LessonCard";

const data = [
  {
    id: 1, // corresponde ao curso com id 1
    lessons: [
      { id: 1, title: "Representação de Algoritmos", completed: 0 }, // aula 1 do curso 1
      { id: 2, title: "Algoritmos Computacionais", completed: 0 }, // aula 2 do curso 1 ...
      { id: 3, title: "Introdução à linguagem Python", completed: 0 },
      { id: 4, title: "Estruturas Condicionais", completed: 0 },
    ],
  },
];

const Course = ({
  route: {
    params: { course },
  },
  navigation: { goBack },
}) => {
  const renderLesson = ({ item }) => <LessonCard lesson={item} />;

  const header = () => (
    <Text style={styles.headerText}>Tópicos disponíveis</Text>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
        <AntDesign name="arrowleft" color={colors.purple} size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.subtitile}>{course.description}</Text>
      <FlatList
        ListHeaderComponent={header}
        style={styles.list}
        data={data[course.id - 1]?.lessons}
        keyExtractor={(item) => item.id}
        renderItem={renderLesson}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Course;
