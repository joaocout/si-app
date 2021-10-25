import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
});

const Course = () => (
  <View style={styles.container}>
    <Text>Curso</Text>
  </View>
);

export default Course;
