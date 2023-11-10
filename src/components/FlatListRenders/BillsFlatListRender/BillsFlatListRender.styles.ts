import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    marginBottom: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  cardTopTextContainer: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  cardBottomTextContainer: {
    flexDirection: "row",
  },
  cardTopText: {
    flex: 1,
    fontSize: 18,
    color: config.colors.secondary,
  },
  cardBottomText: {
    fontSize: 18,
    color: config.colors.secondary,
  },
  editButton: {
    height: 88,
    marginLeft: 10,
  },
});

export default styles;
