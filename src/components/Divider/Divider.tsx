import { View, ViewStyle } from "react-native";

import styles from "./Divider.styles";

type DividerProps = {
  style?: ViewStyle;
};

const Divider = ({ style }: DividerProps) => {
  return <View style={[styles.divider, style]} />;
};

export default Divider;
