import { StyleSheet } from "react-native";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    minHeight: 93,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    justifyContent: "space-between",
  },

  lessonNumber: {
    alignSelf: "center",
    fontSize: 30,
    fontFamily: 'Raleway_900Black',
    color: colors.gray,
  },

  title: {
    fontWeight: "600",
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 18,
    color: colors.purple,
  },

  subTitle: {
    fontWeight: "300",
    fontFamily: 'Montserrat_300Light',
    fontSize: 14,
    color: colors.gray,
  },
});

export default styles;
