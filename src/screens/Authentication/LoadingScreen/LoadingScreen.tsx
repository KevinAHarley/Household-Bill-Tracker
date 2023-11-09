import { ActivityIndicator, View } from "react-native";

import Logo from "assets/SVG/Logo";

import styles from "./LoadingScreen.styles";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Logo width={250} height={250} style={styles.logo} />
      <ActivityIndicator style={styles.indicator} size="large" />
    </View>
  );
};

export default LoadingScreen;
