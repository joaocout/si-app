import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    //flex: 1,
    flexDirection: "row",
    // justifyContent: 'start',
    backgroundColor: "transparent",
  },
  back_button: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    //border: '2px solid #ff0000',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 22,
    height: 20,
  },
});

const BackButton = ({ onPress, visible }) => {
  if (visible) {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.back_button} onPress={onPress}>
          <Image
            style={styles.image}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return <></>;
};

export default BackButton;
