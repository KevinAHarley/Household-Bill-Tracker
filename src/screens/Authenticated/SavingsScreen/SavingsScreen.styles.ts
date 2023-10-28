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
  editButton: {
    width: 88,
    height: 88,
    marginLeft: 10,
  },
  barContainer: {
    flex: 1,
  },
  mapBarContainer: {
    paddingBottom: 32,
  },
  separateBar: {
    paddingVertical: 64,
  },
  barStyle: {
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
