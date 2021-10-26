import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Montserrat_300Light,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import styles from "./styles";

import FlatButton from "../../components/FlatButton";
import LessonContent from "./LessonContent";

const lessons = {
  1: {
    title: "Representação de Algoritmos",
    contents: [
      {
        id: 1,
        title: "Lógica",
        content:
          "A lógica relaciona-se com a *razão, investiga a correção do pensamento/raciocínio. \n\n\
No nosso caso, usaremos a lógica, tanto a matemática como a de programação, para os ajudar a *compreender, *modelar *e *propor *soluções viáveis para problemas computacionais",
      },
      {
        id: 2,
        title: "Algoritmo",
        content:
          "Um algoritmo é uma *sequência *finita de passos para realizar uma tarefa ou solucionar um problema. \n\n\
Esses passos serão definidos a partir das *sequências *lógicas desenvolvidas para atingir algum objetivo, e são ordenados convenientemente. \n\n\
A *ordem dos passos é *muito *importante. \n\n\
Mudando a ordem dos passos alteramos um algoritmo. \n\n\
Bons exemplos de algoritmos no dia a dia são: \n\
- Receitas culinárias; \n\
- Manuais de instruções de montagem; \n\
- Instruções para uso de medicamentos.",
      },
    ],
    exercise: 1,
    courseId: 1,
  },
  3: {
    title: "Introdução à Linguagem Python",
    contents: [
      {
        id: 1,
        title: "Variáveis e Tipos",
        content:
          "Introdução aos tipos de variáveis no Python, como são declaradas e utilizadas.\n\nDuração do vídeo: 3:19\n\n_linkhttps://www.youtube.com/watch?v=OH86oLzVzzw",
      },
    ],
    exercise: 3,
    courseId: 1,
  },
};

const Lesson = ({ route, navigation }) => {
  let { id } = route.params;

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Montserrat_300Light,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded)
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.header_title}>
          {id}. {lessons[id].title}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{ paddingHorizontal: 32, paddingBottom: 20 }}
          data={lessons[id].contents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LessonContent lesson={item} />}
        />
      </View>
      {lessons[id].exercise == undefined ? (
        <FlatButton
          text="Finalizar"
          onPress={() =>
            navigation.navigate("LessonFinish", {
              lesson_id: id,
              lesson_title: lessons[id].title,
              courseId: lessons[id].courseId,
            })
          }
        />
      ) : (
        <FlatButton
          text="Próximo"
          onPress={() =>
            navigation.navigate("Exercise", {
              id: lessons[id].exercise,
            })
          }
        />
      )}
    </View>
  );
};

export default Lesson;
