import { FC, ReactNode } from "react";
import { Pressable, ViewStyle } from "react-native";

import styles from "./Card.styles";

type CardProps = {
  children?: ReactNode;
  style?: ViewStyle;
  id?: string;
  onPress?: () => void;
};

const Card: FC<CardProps> = ({ style, children, id, onPress }) => {
  return (
    <Pressable onPress={onPress} id={id} style={[styles.container, style]}>
      {children}
    </Pressable>
  );
};

export default Card;
