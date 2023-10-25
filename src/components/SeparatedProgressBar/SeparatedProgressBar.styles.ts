import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  barContainer: {
    alignItems: "center",
  },
  goalContainer: {
    height: "90%",
    width: 50,
    backgroundColor: "rgba(255, 255, 255, 0.27)",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: config.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  goalTextContainer: {
    flexDirection: "row-reverse",
    overflow: "hidden",
  },
  progressContainer: {
    width: 50,
    backgroundColor: "green",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: config.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10%",
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
