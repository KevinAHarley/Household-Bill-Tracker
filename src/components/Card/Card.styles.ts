import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    borderColor: config.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
  },
});

export default styles;
