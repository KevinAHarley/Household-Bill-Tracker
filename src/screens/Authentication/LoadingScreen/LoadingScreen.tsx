import { View, ActivityIndicator } from "react-native";

import styles from "./LoadingScreen.styles";
import Logo from "assets/SVG/Logo";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 2 }}>
      <Logo width={250} height={250} style={styles.logo} />
      <ActivityIndicator style={styles.indicator} size="large" />
    </View>
  );
};

export default LoadingScreen;
