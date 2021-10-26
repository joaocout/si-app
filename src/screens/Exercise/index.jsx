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
import ExerciseContent from "./ExerciseContent";
import { TouchableOpacity } from "react-native-gesture-handler";

const exercises = {
  1: {
    title: "Representação de Algoritmos",
    contents: [
      {
        id: 1,
        type: "complete", // completar lacunas
        title: "Algoritmos",
        content:
          'Complete com a palavra que falta: \n\n\
"Um algoritmo é uma _ finita de passos."',
        answers: ["sequência"],
      },
      {
        id: 2,
        type: "multiple_choice", // multipla escolha
        title: "Algoritmos",
        content:
          "Qual das seguintes opções não representa um exemplo de algoritmo?",
        options: [
          {
            text: "Receita culinária",
            correct: false,
          },
          {
            text: "Instruções de montagem",
            correct: false,
          },
          {
            text: "Lista de compras",
            correct: true,
          },
        ],
      },
      {
        id: 3,
        type: "true_false", // verdadeiro ou falso
        title: "Algoritmos",
        content: "Algoritmos são importantes na programação.",
        answer: true,
      },
    ],
    nextLesson: undefined,
    courseId: 1,
    lessonId: 1,
  },
  3: {
    title: "Introdução à linguagem Python",
    contents: [
      {
        id: 1,
        type: "true_false",
        title: "Variáveis",
        content:
          "Uma variável tem um nome específico, e é diferenciado por maiúsculas e minúsculas.",
        answer: true,
      },
      {
        id: 2,
        type: "true_false",
        title: "Tipos",
        content:
          "Variáveis no Python podem representar qualquer tipo entre números inteiro, números racionais, letras, frases, e booleanos",
        answer: true,
      },
      {
        id: 3,
        type: "multiple_choice", // verdadeiro ou falso
        title: "Tipos",
        content:
          "A seguinte operação resulta em... \n\n_codea='1'\n\nb='23'\n\nprint(a+b)",
        options: [
          {
            text: "123",
            correct: true,
          },
          {
            text: "24",
            correct: false,
          },
          {
            text: "33",
            correct: false,
          },
        ],
      },
    ],
    nextLesson: undefined,
    courseId: 1,
    lessonId: 3,
  },
};

const Exercise = ({ route, navigation }) => {
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
          {id}. {exercises[id].title}
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{ paddingHorizontal: 32, paddingBottom: 20 }}
          data={exercises[id].contents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ExerciseContent
              question={item}
              courseId={exercises[id].courseId}
              lessonId={exercises[id].lessonId}
            />
          )}
        />
      </View>
      {exercises[id].nextLesson == undefined ? ( // sem proxima licao
        <FlatButton
          text="Finalizar"
          onPress={() =>
            navigation.navigate("LessonFinish", {
              lesson_id: id,
              lesson_title: exercises[id].title,
              courseId: exercises[id].courseId,
            })
          }
        />
      ) : (
        <FlatButton
          text="Próximo"
          onPress={() =>
            navigation.navigate("Lesson", {
              id: exercises[id].nextLesson,
            })
          }
        />
      )}
    </View>
  );
};

export default Exercise;
