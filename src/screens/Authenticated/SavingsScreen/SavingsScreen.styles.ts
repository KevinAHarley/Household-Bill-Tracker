import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  headerInnerContainer: {
    flex: 1,
  },
  headerText: {
    color: config.colors.secondary,
    fontSize: 24,
  },
  barText: {
    color: config.colors.secondary,
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  deleteButton: {
    flex: 1,
  },
  addButton: {
    flex: 3,
    marginLeft: 16,
  },
  barContainer: {
    flex: 1,
  },
  separateBar: {
    paddingVertical: 64,
  },
  flatList: {
    flexGrow: 1,
  },
});

export default styles;
