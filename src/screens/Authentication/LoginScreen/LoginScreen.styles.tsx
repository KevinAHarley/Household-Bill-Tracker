import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  logo: {
    alignSelf: "center",
    marginTop: 32,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 64,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: config.colors.secondary,
    alignSelf: "flex-end",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default styles;
