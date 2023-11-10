import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  editButton: {
    height: 104,
    marginLeft: 10,
  },
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    marginBottom: 16,
    flex: 1,
  },
  providerText: {
    fontSize: 18,
    color: config.colors.secondary,
    marginBottom: 32,
  },
});

export default styles;
