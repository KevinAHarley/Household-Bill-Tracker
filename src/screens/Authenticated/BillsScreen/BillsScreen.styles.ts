import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  avatarContainer: {
    alignItems: "flex-end",
    paddingBottom: 16,
  },
  headerInnerContainer: {
    flex: 1,
  },
  headerText: {
    color: config.colors.secondary,
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deleteButton: {
    flex: 1,
    marginTop: 16,
  },
  addButton: {
    flex: 3,
    marginLeft: 16,
    marginTop: 16,
  },
  flatList: {
    flexGrow: 1,
  },
});

export default styles;
