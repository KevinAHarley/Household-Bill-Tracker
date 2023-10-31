import { FC, ReactNode } from "react";
import { Platform, ViewStyle } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

type BackgroundProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const Background: FC<BackgroundProps> = ({ children, style }) => {
  const tabBarHeight = Platform.OS === "ios" ? 120 : 90;

  return (
    <LinearGradient
      colors={["#177373", "#143a5e", "#351280"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.7, 1]}
      style={[{ flex: 1, paddingBottom: tabBarHeight }, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
