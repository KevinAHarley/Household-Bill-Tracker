import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: config.colors.secondary,
    fontSize: 22,
  },
});

export default styles;
