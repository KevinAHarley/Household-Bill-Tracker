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
  switchButton: {
    alignSelf: "center",
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  sectionList: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  sectionListHeaderTop: {
    paddingVertical: 16,
  },
  sectionListHeader: {
    paddingVertical: 32,
  },
});

export default styles;
