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
  scrollView: {
    paddingVertical: 32,
  },
  card: {
    marginBottom: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
  },
  cardTopTextContainer: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  cardBottomTextContainer: {
    flexDirection: "row",
  },
  cardTopText: {
    flex: 1,
    fontSize: 18,
    color: config.colors.secondary,
  },
  cardBottomText: {
    fontSize: 18,
    color: config.colors.secondary,
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
});

export default styles;
