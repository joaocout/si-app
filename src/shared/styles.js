import { StyleSheet } from "react-native";

import colors from "./colors";

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.purple,
    marginTop: 60,
  },

  screenSubtitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "300",
    color: colors.purple,
  },
});

export default styles;
