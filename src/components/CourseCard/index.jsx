import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const icons = {
  1: "laptop-code",
  2: "link",
  3: "square-root-alt",
  4: "window-restore"
}

const CourseCard = ({ course }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Course", { course })}
      style={styles.container}
    >
      <View style={{flexDirection: 'row'}}>
        <FontAwesome5 name={icons[course.id]} size={28} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {`${course.id}. `}
            {course.title}
          </Text>
          <Text style={styles.description}>{course.description}</Text>
        </View>
      </View>
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
