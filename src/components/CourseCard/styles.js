import { StyleSheet } from "react-native";
import colors from "../../shared/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    marginTop: 18,
    paddingHorizontal: 16,
    //minHeight: 130,
    paddingVertical: 14,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 32,
    overflow: "hidden",
  },

  title: {
    fontSize: 18,
    fontFamily: 'Raleway_600SemiBold',
    fontWeight: "600",
    color: colors.purple,
  },

  description: {
    fontSize: 14,
    fontFamily: 'Montserrat_300Light',
    fontWeight: "300",
    color: colors.gray,
    marginBottom: 25,
    marginTop: 5
  },

  textContainer: {
    flex:1, 
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-between'
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
    fontFamily: 'Raleway_600SemiBold',
    fontWeight: "600",
    fontSize: 12
  },
});

export default styles;
