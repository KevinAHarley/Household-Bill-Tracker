import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerInnerContainer: {
    flex: 1,
  },
  welcomeText: {
    color: config.colors.text.darkGrey,
    fontSize: 24,
  },
  nameText: {
    color: config.colors.text.darkGrey,
    fontSize: 30,
  },
  goalText: {
    alignSelf: "center",
    color: config.colors.text.darkGrey,
    fontSize: 24,
    paddingTop: 16,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 32,
  },
  progressBarContainer: {
    width: "40%",
  },
  progressBarText: {
    alignSelf: "center",
    fontSize: 20,
    color: config.colors.text.darkGrey,
  },
  contentContainer: {
    flex: 3,
    paddingHorizontal: 16,
  },
  upcomingPaymentContainer: {
    justifyContent: "center",
    paddingTop: 16,
  },
  contentHeaderText: {
    fontSize: 24,
    color: config.colors.secondary,
  },
  card: {
    height: 140,
    width: 140,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: "space-evenly",
  },
  cardText: {
    fontSize: 18,
    color: config.colors.secondary,
  },
  cardDateText: {
    alignSelf: "center",
    fontSize: 20,
    color: config.colors.secondary,
    paddingBottom: 8,
  },
  borrowingContainer: {
    flex: 1,
  },
  switchButton: {
    justifyContent: "center",
    paddingVertical: 16,
  },
});

export default styles;
