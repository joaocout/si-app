import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, Linking, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../shared/colors";

import styles from "./styles";

const LessonContent = ({ lesson }) => {
  let content = lesson.content.split(" ");

  return (
    <View>
      <Text
        style={[
          styles.text_title,
          lesson.id == 1 ? { marginTop: 0 } : undefined,
        ]}
      >
        {lesson.title}
      </Text>
      <Text style={styles.text_content}>
        {/* {lesson.content} */}
        {content.map((word, key) => {
          if (word.startsWith("*")) {
            return (
              <Text key={key} style={{ fontFamily: "Montserrat_600SemiBold" }}>
                {word.substring(1)}{" "}
              </Text>
            );
          }
          return `${word} `;
        })}
      </Text>
      {lesson.videoLink ? (
        <TouchableOpacity onPress={() => Linking.openURL(lesson.videoLink)}>
          <Image
            style={{ width: 347, height: 191 }}
            source={require("../../../assets/video.png")}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default LessonContent;
