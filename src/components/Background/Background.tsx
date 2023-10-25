import { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <LinearGradient
      colors={["#177373", "#143a5e", "#351280"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.7, 1]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
