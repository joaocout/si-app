import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";

import { AppContext } from "../../shared/state";

const icons = {
  1: "laptop-code",
  2: "link",
  3: "square-root-alt",
  4: "window-restore",
};

const calc_progress = (course) => {
  const { completed, total } = course;

  let progress_sum = 0;
  let total_sum = 0;
  for (let i = 1; i <= Object.keys(completed).length; i++) {
    progress_sum += completed[i];
    total_sum += total[i];
  }

  let progress_percent = (progress_sum * 100) / total_sum;

  return {
    progress_percent,
    progress_sum,
    total_sum,
  };
};

const CourseCard = ({ course }) => {
  const navigation = useNavigation();

  const [state, dispatch] = useContext(AppContext);
  const [progress, setProgress] = useState({
    enabled: true,
    text: "Disponível",
    color: "bottomBox_blue",
    width: "100%",
  });

  const isFocused = useIsFocused();

  useEffect(() => {
    const { progress_percent, progress_sum, total_sum } = calc_progress(
      state[course.id]
    );

    let text = "";
    let shouldUpdateBottomBox = false;

    if (course.prerequisites.length > 0) {
      course.prerequisites.forEach((p, index) => {
        if (calc_progress(state[p]).progress_percent < 100) {
          if (!shouldUpdateBottomBox) {
            text = `Requer ${p}`;
          } else {
            text += ` e ${p}`;
          }
          shouldUpdateBottomBox = true;
        }
      });
      // setar o estado de volta ao inicial, caso prerequisitos sejam completos
      !shouldUpdateBottomBox &&
        setProgress({
          enabled: true,
          text: "Disponível",
          color: "bottomBox_blue",
          width: "100%",
        });

      // setando o estado do card, caso hajam prerequisitos
      shouldUpdateBottomBox &&
        setProgress({
          enabled: false,
          text,
          color: "bottomBox_gray",
          width: "0%",
        });
    }
    // course.prerequisites.every((p) => {
    //   if (calc_progress(state[p]).progress_percent < 100) {
    //     setProgress({
    //       enabled: false,
    //       text: "Requer " + p,
    //       color: "bottomBox_gray",
    //       width: "0%",
    //     });
    //     brek = true;
    //     return false;
    //   }
    // });
    // if (brek) return;
    // }

    if (progress_percent > 0 && progress_percent < 100) {
      setProgress({
        enabled: true,
        text: "Em progresso - " + progress_sum + "/" + total_sum + " tarefas.",
        color: "bottomBox_green",
        width: progress_percent + "%",
      });
    } else if (progress_percent == 100) {
      setProgress({
        enabled: false,
        text: "Finalizado",
        color: "bottomBox_green",
        width: "100%",
      });
    }
  }, [state, isFocused]);

  return (
    <TouchableOpacity
      onPress={() =>
        progress.enabled ? navigation.navigate("Course", { course }) : true
      }
      style={styles.container}
    >
      <View style={{ flexDirection: "row" }}>
        <FontAwesome5 name={icons[course.id]} size={28} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {`${course.id}. `}
            {course.title}
          </Text>
          <Text style={styles.description}>{course.description}</Text>
        </View>
      </View>
      <View style={[styles.bottomBox]}>
        <View
          style={[
            styles.bottomBox_bg,
            styles[progress.color],
            { width: progress.width },
          ]}
        />
        <Text numberOfLines={1} style={styles.bottomBoxTextContainer}>
          {progress.text}
        </Text>
        <AntDesign name="arrowright" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
};
export default CourseCard;
