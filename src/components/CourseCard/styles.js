import { StyleSheet } from "react-native";
import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    marginTop: 18,
    paddingHorizontal: 16,
    minHeight: 130,
    paddingVertical: 14,
    elevation: 5,
    marginHorizontal: 32,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.purple,
  },

  description: {
    fontSize: 14,
    fontWeight: "300",
    color: colors.gray,
  },
});

export default styles;
