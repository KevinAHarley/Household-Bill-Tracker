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
  editButton: {
    width: 88,
    height: 104,
    marginLeft: 10,
  },
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    marginBottom: 16,
    flex: 1,
  },
  scrollView: {
    paddingVertical: 32,
  },
  providerText: {
    fontSize: 18,
    color: config.colors.secondary,
    marginBottom: 32,
  },
});

export default styles;
