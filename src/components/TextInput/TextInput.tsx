import { FC, LegacyRef, useRef, useState } from "react";
import {
  KeyboardType,
  Pressable,
  ReturnKeyType,
  TextInput as RNTextInput,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

import Icon from "@expo/vector-icons/FontAwesome5";

import config from "config";

import styles from "./TextInput.styles";

export interface ITextInputProps {
  value: any;
  ref?: LegacyRef<RNTextInput>;
  placeHolder?: string;
  multiline?: boolean;
  iconRight?: string;
  iconLeft?: string;
  editable?: boolean;
  keyboardType?: KeyboardType;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  label?: string;
  returnKeyType?: ReturnKeyType;
  autoFocus?: boolean;
  iconPress?: () => void;
  onChange: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const TextInput: FC<ITextInputProps> = ({
  onChange,
  value,
  placeHolder,
  label,
  multiline,
  keyboardType,
  returnKeyType,
  iconRight,
  iconLeft,
  iconPress,
  containerStyle,
  editable,
  testID,
  autoFocus,
  onFocus,
  onBlur,
}) => {
  const [focus, setFocus] = useState(false);

  let conditionalStyles = {};

  switch (true) {
    case multiline === true && editable === false:
      conditionalStyles = [styles.multiline, styles.disabled];
      break;
    case editable === false:
      conditionalStyles = styles.disabled;
      break;
    case multiline:
      conditionalStyles = [styles.multiline];
      break;
    default:
      conditionalStyles = styles.input;
  }

  const textInputRef = useRef<RNTextInput>(null);

  const onFocusHandler = () => {
    onFocus && onFocus();
    textInputRef.current?.focus();
    setFocus(true);
  };

  const onBlurHandler = () => {
    onBlur && onBlur();
    setFocus(false);
    textInputRef.current?.blur();
  };

  return (
    <>
      {label ? (
        <>
          <View style={styles.labelContainer}>
            <Text
              style={{
                color: config.colors.secondary,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {label}
            </Text>
          </View>
        </>
      ) : undefined}
      <Pressable
        onPress={() => onFocusHandler()}
        style={[
          !focus
            ? [styles.container, containerStyle, conditionalStyles]
            : [
                styles.container,
                styles.selectedBorder,
                containerStyle,
                conditionalStyles,
              ],
        ]}
        testID={testID}
      >
        {iconLeft ? (
          <Icon
            name={iconLeft}
            size={25}
            color={config.colors.secondary}
            style={styles.icon}
          />
        ) : undefined}
        <RNTextInput
          onChangeText={(text) => onChange(text)}
          onBlur={() => onBlurHandler()}
          value={value}
          placeholder={placeHolder}
          multiline={multiline}
          editable={editable}
          keyboardType={keyboardType}
          ref={textInputRef}
          autoFocus={autoFocus}
          style={styles.text}
          autoCapitalize="none"
          placeholderTextColor={config.colors.secondary}
          returnKeyType={returnKeyType}
        />
        {iconRight ? (
          <Pressable onPress={() => iconPress}>
            <Icon
              name={iconRight}
              size={25}
              color={config.colors.secondary}
              style={styles.icon}
            />
          </Pressable>
        ) : undefined}
      </Pressable>
    </>
  );
};
