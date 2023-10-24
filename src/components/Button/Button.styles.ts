import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  primaryContainer: {
    borderColor: config.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryText: {
    color: config.colors.primary,
    fontSize: 20,
  },
  secondaryContainer: {
    borderColor: config.colors.red,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    color: config.colors.red,
    fontSize: 20,
  },
});

export default styles;
