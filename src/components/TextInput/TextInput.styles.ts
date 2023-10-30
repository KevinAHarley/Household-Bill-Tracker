import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: config.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
  },
  input: {
    color: config.colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  multiline: {
    minHeight: 150,
    paddingTop: 16,
    color: config.colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  icon: {
    marginRight: 16,
  },
  selectedBorder: {
    borderColor: config.colors.primary,
  },
  disabled: {
    color: config.colors.red,
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    color: config.colors.secondary,
    fontSize: 16,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 16,
  },
});

export default styles;
