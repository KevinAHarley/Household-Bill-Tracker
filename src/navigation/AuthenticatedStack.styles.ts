import { StyleSheet } from "react-native";

import config from "config";

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 14,
    paddingBottom: 10,
    marginTop: -5,
    color: config.colors.secondary,
  },
  logoTabBarStyle: {
    marginTop: 8,
  },
  tabBarStyle: {
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    height: 80,
    position: "absolute",
    shadowColor: "transparent",
  },
  raisedIcon: {
    marginBottom: 24,
  },
  headerText: {
    color: config.colors.secondary,
    fontSize: 20,
    marginLeft: 16,
  },
});

export default styles;
