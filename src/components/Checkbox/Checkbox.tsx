import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome5";

import config from "config";

import styles from "./Checkbox.styles";

type CheckboxProps = {
  label?: string;
  size?: number;
  testID?: string;
  onPress?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ label, size = 25, testID, onPress }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        testID={testID}
        style={[
          {
            height: size,
            width: size,
          },
          styles.checkbox,
        ]}
        onPress={() => {
          setChecked(!checked), onPress && onPress();
        }}
      >
        {checked ? (
          <Icon name="check" size={size - 5} color={config.colors.primary} />
        ) : null}
      </Pressable>
      {label ? <Text style={styles.text}>{label}</Text> : null}
    </View>
  );
};

export default Checkbox;
