import { FC } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./Divider.styles";

type DividerProps = {
  style?: ViewStyle;
};

const Divider: FC<DividerProps> = ({ style }) => {
  return <View style={[styles.divider, style]} />;
};

export default Divider;
