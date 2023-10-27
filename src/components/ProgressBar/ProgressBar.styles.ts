import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.27)",
    width: "100%",
    height: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: config.colors.secondary,
  },
  goalTextContainer: {
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  progressTextContainer: {
    minWidth: "10%",
    height: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: config.colors.secondary,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  progressText: {
    color: config.colors.text.darkGrey,
  },
  goalText: {
    color: config.colors.secondary,
  },
});

export default styles;
