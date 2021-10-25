import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../shared/colors";
import styles from "./styles";

import CourseCard from "../../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Algoritmos e Programação de Computadores",
    description: "Disciplina introdutória para cursos de programação.",
    prerequisites: [],
  },
  {
    id: 2,
    title: "Estruturas de Dados",
    description:
      "Estruturas (vetores, listas, pilhas, árvores) e algoritmos de busca e ordenação.",
    prerequisites: [1],
  },
  {
    id: 3,
    title: "Cálculo 1",
    description: "Introdução ao cálculo diferencial e integral, limites.",
    prerequisites: [],
  },
  {
    id: 4,
    title: "asldasldkj",
    description: "askjdhaskjdhaskjdh",
    prerequisites: [2, 3],
  },
];

const Home = () => {
  const [text, setText] = useState("");

  const renderCourse = ({ item }) => <CourseCard course={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursos disponíveis</Text>
      <Text style={styles.subtitle}>
        Escolha um curso para começar.
        {"\n\n"}Você pode parar e retomar o progresso em qualquer curso a
        qualquer momento
      </Text>
      <View style={styles.searchBoxContainer}>
        <TextInput
          onChangeText={setText}
          placeholderTextColor={colors.blue}
          placeholder="Pesquisar"
          style={styles.searchBox}
          value={text}
        />
        <FontAwesome
          style={styles.searchIcon}
          name="search"
          size={18}
          color={colors.blue}
        />
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 60 }}
        style={styles.list}
        data={courses}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderCourse}
      />
    </View>
  );
};

export default Home;
