import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
  },
  card: {
    height: 140,
    width: 140,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: config.colors.secondary,
  },
  cardDateText: {
    alignSelf: "center",
    fontSize: 20,
    color: config.colors.secondary,
    paddingBottom: 8,
  },
});

export default styles;
