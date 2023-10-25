import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  divider: {
    backgroundColor: config.colors.primary,
    height: 2,
    width: "100%",
    borderRadius: 8,
  },
});

export default styles;
