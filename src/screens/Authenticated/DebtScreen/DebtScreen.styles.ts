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
  flatListContainer: {
    flexGrow: 1,
  },
  addButton: {
    marginTop: 16,
  },
});

export default styles;
