import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const CourseCard = ({ course }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Course")}
      style={styles.container}
    >
      <Text style={styles.title}>
        {`${course.id}. `}
        {course.title}
      </Text>
      <Text style={styles.description}>{course.description}</Text>
      <View style={styles.bottomBox}>
        <Text numberOfLines={1} style={styles.bottomBoxTextContainer}>
          Disponível
        </Text>
        <AntDesign name="arrowright" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
};
export default CourseCard;
