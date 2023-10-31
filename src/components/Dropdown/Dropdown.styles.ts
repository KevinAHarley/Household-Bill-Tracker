import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: config.colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    padding: 8,
  },
  openContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 16,
  },
  labelText: {
    color: config.colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  inputText: {
    flex: 1,
    color: config.colors.secondary,
    fontSize: 16,
  },
  icon: {
    paddingRight: 16,
  },
  dropdownContainer: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 3,
    borderColor: config.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  extendedDropdownContainer: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 3,
    borderColor: config.colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 150,
  },
  dropdownText: {
    color: config.colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default styles;
