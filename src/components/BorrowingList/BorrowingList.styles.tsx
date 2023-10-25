import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerWithCheckbox: {
    alignItems: "center",
    paddingRight: 16,
  },
  textContainer: {
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 16,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: config.colors.secondary,
  },
  textWithStrike: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: config.colors.secondary,
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: "red",
  },
  divider: {
    width: "68%",
  },
});

export default styles;
