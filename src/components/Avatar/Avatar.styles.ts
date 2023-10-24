import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    borderColor: config.colors.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  initialsContainer: {
    borderColor: config.colors.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: config.colors.primary,
  },
});

export default styles;
