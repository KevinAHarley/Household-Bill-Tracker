import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.27)",
    width: "100%",
    height: 25,
    borderWidth: 2,
    borderColor: config.colors.secondary,
    justifyContent: "center",
    borderRadius: 25,
  },
  goalTextContainer: {
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  progressTextContainer: {
    minWidth: 50,
    height: 25,
    borderWidth: 2,
    borderColor: config.colors.secondary,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    borderRadius: 25,
  },
  progressText: {
    color: config.colors.text.darkGrey,
  },
  goalText: {
    color: config.colors.secondary,
  },
});

export default styles;
