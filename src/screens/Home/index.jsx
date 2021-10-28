import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Montserrat_300Light,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

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
    title: "Tópicos de Programação 1",
    description:
      "Modularização, Programação Orientada a Objetos, Design Patterns",
    prerequisites: [1, 2],
  },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [availableCourses, setAvailableCourses] = useState(courses);

  useEffect(() => {
    let query = search.toLowerCase();
    let filtered_courses = courses.filter((course) => {
      return course.title.toLowerCase().match(query);
    });
    setAvailableCourses(filtered_courses);
  }, [search]);

  const renderCourse = ({ item }) => <CourseCard course={item} />;

  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    Montserrat_300Light,
    Montserrat_400Regular,
  });

  if (!fontsLoaded)
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );

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
          onChangeText={setSearch}
          placeholderTextColor={colors.blue}
          placeholder="Pesquisar"
          style={styles.searchBox}
          value={search}
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
        data={availableCourses}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderCourse}
      />
    </View>
  );
};

export default Home;
