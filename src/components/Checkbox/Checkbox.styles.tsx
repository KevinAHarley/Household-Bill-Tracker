import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    borderColor: config.colors.primary,
    borderWidth: 2,
    borderRadius: 4,
  },
  text: {
    paddingLeft: 8,
    color: config.colors.primary,
  },
});

export default styles;
