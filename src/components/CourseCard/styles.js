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
    overflow: "hidden",
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
    marginBottom: 25,
  },

  bottomBox: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.blue,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },

  bottomBoxTextContainer: {
    color: "white",
    maxWidth: "75%",
  },
});

export default styles;
