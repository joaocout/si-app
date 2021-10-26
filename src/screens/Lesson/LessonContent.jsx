import React from "react";
import { View, Text, Linking } from "react-native";
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
          if (word.includes("_link")) {
            return (
              <Text key={key}>
                {word.substring(0, word.indexOf("_link"))}
                <Text
                  style={{ color: colors.blue }}
                  onPress={() =>
                    Linking.openURL(
                      word.substring(word.indexOf("_link") + 5, word.length)
                    )
                  }
                >
                  {word.substring(word.indexOf("_link") + 5, word.length)}
                </Text>
              </Text>
            );
          }
          return `${word} `;
        })}
      </Text>
    </View>
  );
};

export default LessonContent;
