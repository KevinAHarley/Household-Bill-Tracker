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
  },
  editButton: {
    height: 50,
    marginLeft: 10,
  },
});

export default styles;
