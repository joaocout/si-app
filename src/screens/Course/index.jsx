import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { useIsFocused } from "@react-navigation/native";

import styles from "./styles";

import LessonCard from "../../components/LessonCard";
import { AppContext } from "../../shared/state";

const data_default = [
  {
    id: 1, // corresponde ao curso com id 1
    lessons: [
      { id: 1, title: "Representação de Algoritmos", completed: 0, total: 3 }, // aula 1 do curso 1
      { id: 2, title: "Algoritmos Computacionais", completed: 0, total: 5 }, // aula 2 do curso 1 ...
      { id: 3, title: "Introdução à linguagem Python", completed: 0, total: 5 },
      { id: 4, title: "Estruturas Condicionais", completed: 0, total: 5 },
    ],
  },
];

const Course = ({
  route: {
    params: { course },
  },
}) => {
  const [state, dispatch] = useContext(AppContext);

  const isFocused = useIsFocused();

  const [data, setData] = useState(data_default);

  useEffect(() => {
    const { completed, total } = state[course.id];
    let data_tmp = [...data];
    if (data[course.id - 1]) {
      for (let i = 1; i <= Object.keys(completed).length; i++) {
        data_tmp[course.id - 1].lessons[i - 1].completed = completed[i];
        data_tmp[course.id - 1].lessons[i - 1].total = total[i];
      }
    }
    setData(data_tmp);
  }, [state, isFocused]);

  const renderLesson = ({ item }) => <LessonCard lesson={item} />;

  const header = () => (
    <Text style={styles.headerText}>Tópicos disponíveis</Text>
  );

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Montserrat_300Light,
    Montserrat_400Regular,
    Raleway_900Black,
  });

  if (!fontsLoaded)
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
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
