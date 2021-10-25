import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const colors = {
  purple: "#3D345E",
  blue: "#4BA0FE",
  lightBlue: "#E7F6FE",
  dimBlue: "#89A1BC",
  gray: "#808080",
  red: "#C0392B",
  green: "#00B16A",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.purple,
    marginTop: 60,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "300",
    color: colors.purple,
  },

  searchBoxContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBox: {
    flex: 1,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    color: colors.purple,
    paddingLeft: 40,
    paddingRight: 12,
    fontSize: 14,
    fontWeight: "400",
  },

  searchIcon: {
    left: 12,
    position: "absolute",
  },

  list: {
    marginHorizontal: -32,
    paddingHorizontal: 32,
  },
});

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
          size={24}
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

const courseStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    marginTop: 18,
    paddingHorizontal: 16,
    height: 130,
    paddingVertical: 14,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.purple,
  },

  description: {
    fontSize: 14,
    fontWeight: "300",
    color: colors.gray,
  },
});

const CourseCard = ({ course }) => (
  <View style={courseStyles.container}>
    <Text style={courseStyles.title}>
      {`${course.id}. `}
      {course.title}
    </Text>
    <Text>{course.description}</Text>
  </View>
);

export default Home;
