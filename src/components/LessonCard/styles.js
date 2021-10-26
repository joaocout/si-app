import { StyleSheet } from "react-native";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    minHeight: 93,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 24,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  textContainer: {
    marginHorizontal: 18,
    flex: 1,
    justifyContent: "space-evenly",
  },

  lessonNumber: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "900",
    color: colors.gray,
  },

  title: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.purple,
  },

  subTitle: {
    fontWeight: "300",
    fontSize: 14,
    color: colors.gray,
  },
});

export default styles;
