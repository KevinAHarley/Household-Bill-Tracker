import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  selectedContainer: {
    borderColor: config.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  container: {
    padding: 8,
    paddingHorizontal: 19,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
  },
  selectedText: {
    color: config.colors.primary,
    fontSize: 20,
  },
});

export default styles;
