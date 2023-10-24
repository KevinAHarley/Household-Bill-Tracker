import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./Card.styles";

type CardProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

const Card = ({ style, children }: CardProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
