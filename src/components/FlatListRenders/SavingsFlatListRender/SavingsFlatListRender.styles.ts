import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  mapBarContainer: {
    paddingBottom: 32,
  },
  barText: {
    color: config.colors.secondary,
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 16,
  },
  barStyle: {
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
