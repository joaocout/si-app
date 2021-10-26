import { StyleSheet } from "react-native";

import colors from "../../shared/colors";
import sharedStyles from "../../shared/styles";

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

  title: sharedStyles.screenTitle,

  subtitile: { ...sharedStyles.screenSubtitle, marginBottom: 46 },

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
