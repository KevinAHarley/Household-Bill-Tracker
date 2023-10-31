import { FC, ReactNode } from "react";
import { Pressable, ViewStyle } from "react-native";

import styles from "./Card.styles";

type CardProps = {
  children?: ReactNode;
  style?: ViewStyle;
  id?: string;
  testID?: string;
  onPress?: () => void;
};

const Card: FC<CardProps> = ({ style, children, id, testID, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      id={id}
      style={[styles.container, style]}
      testID={testID}
    >
      {children}
    </Pressable>
  );
};

export default Card;
