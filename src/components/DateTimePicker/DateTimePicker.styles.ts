import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  labelText: {
    color: config.colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 16,
    paddingBottom: 4,
  },
  card: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  valueText: {
    paddingLeft: 8,
    flex: 1,
    color: config.colors.secondary,
    fontSize: 16,
  },
});

export default styles;
