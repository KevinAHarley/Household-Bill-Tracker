import { FC, useEffect, useState } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

import styles from "./SwitchButton.styles";

type SwitchButtonProps = {
  leftButtonText: string;
  rightButtonText: string;
  containerStyle?: ViewStyle;
  testID?: string;
  onChange?: (option: number) => void;
};

const SwitchButton: FC<SwitchButtonProps> = ({
  leftButtonText,
  rightButtonText,
  containerStyle,
  testID,
  onChange,
}) => {
  const [selected, setSelected] = useState(0);

  const leftSelected = selected === 0;
  const rightSelected = selected === 1;

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected]);

  return (
    <View style={[styles.contentContainer, containerStyle]} testID={testID}>
      <Pressable
        style={[leftSelected ? [styles.selectedContainer] : styles.container]}
        onPress={() => setSelected(0)}
      >
        <Text style={leftSelected ? styles.selectedText : styles.text}>
          {leftButtonText}
        </Text>
      </Pressable>
      <Pressable
        style={[rightSelected ? [styles.selectedContainer] : styles.container]}
        onPress={() => setSelected(1)}
      >
        <Text style={rightSelected ? styles.selectedText : styles.text}>
          {rightButtonText}
        </Text>
      </Pressable>
    </View>
  );
};

export default SwitchButton;
