import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  headerText: {
    color: config.colors.secondary,
    fontSize: 20,
    marginLeft: 16,
  },
  icon: {
    marginRight: 32,
  },
});

export default styles;
