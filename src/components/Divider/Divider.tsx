import { FC } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./Divider.styles";

type DividerProps = {
  style?: ViewStyle;
  testID?: string;
};

const Divider: FC<DividerProps> = ({ style, testID }) => {
  return <View style={[styles.divider, style]} testID={testID} />;
};

export default Divider;
