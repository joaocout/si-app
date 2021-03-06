import { StyleSheet } from "react-native";
import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 28,
    fontFamily: 'Raleway_700Bold',
    color: colors.purple,
    marginTop: 60,
  },

  subtitle: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'Montserrat_300Light',
    color: colors.purple,
  },

  searchBoxContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBox: {
    flex: 1,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    color: colors.purple,
    paddingLeft: 40,
    paddingRight: 12,
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular'
  },

  searchIcon: {
    left: 12,
    position: "absolute",
  },

  list: {
    marginHorizontal: -32,
  },
});

export default styles;
