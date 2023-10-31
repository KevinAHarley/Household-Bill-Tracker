import { FC } from "react";
import { Pressable, Text, ViewStyle } from "react-native";

import styles from "./Button.styles";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
  style?: ViewStyle;
  testID?: string;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ title, style, type, testID, onPress }) => {
  const primaryType = type === "primary";

  return (
    <Pressable
      onPress={onPress}
      style={[
        primaryType ? styles.primaryContainer : styles.secondaryContainer,
        style,
      ]}
      testID={testID}
    >
      <Text style={primaryType ? styles.primaryText : styles.secondaryText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
