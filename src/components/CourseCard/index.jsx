import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CourseCard = ({ course }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {`${course.id}. `}
      {course.title}
    </Text>
    <Text>{course.description}</Text>
  </View>
);

export default CourseCard;
