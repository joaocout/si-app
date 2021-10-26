import { StyleSheet } from "react-native";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 32,
  },

  backButton: {
    position: "absolute",
    top: 32,
    left: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.purple,
    marginTop: 60,
  },

  subtitile: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "300",
    color: colors.purple,
    marginBottom: 46,
  },

  list: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    marginHorizontal: -32,
    borderTopLeftRadius: 30,
  },

  listContent: {
    paddingBottom: 60,
    paddingHorizontal: 32,
  },

  headerText: {
    color: colors.purple,
    fontWeight: "600",
    fontSize: 18,
    marginTop: 32,
  },
});

export default styles;
