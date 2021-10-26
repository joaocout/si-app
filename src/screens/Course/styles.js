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
    fontFamily: 'Raleway_700Bold',
    color: colors.purple,
    marginTop: 60,
  },

  subtitile: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'Montserrat_300Light',
    color: colors.purple,
    marginBottom: 46,
  },

  list: {
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: -32,
  },

  listContent: {
    paddingBottom: 60,
    paddingHorizontal: 32,
  },

  headerText: {
    color: colors.purple,
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 18,
    marginTop: 32,
  },
});

export default styles;
