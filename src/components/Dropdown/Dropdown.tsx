import { FC, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View, ViewStyle } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome5";

import config from "config";

import styles from "./Dropdown.styles";

type DropdownProps = {
  value: string;
  options: string[];
  label?: string;
  containerStyle?: ViewStyle;
  isOpen?: boolean;
  testID?: string;
  onChange?: (value: string) => void;
  toggleList?: () => void;
};

const Dropdown: FC<DropdownProps> = ({
  label,
  options,
  containerStyle,
  isOpen,
  testID,
  onChange,
  toggleList,
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (selected) {
      onChange(selected);
    }
  }, [selected]);

  const optionLengthCheck = options.length > 5;

  return (
    <View style={containerStyle} testID={testID}>
      {label ? (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      ) : undefined}
      <Pressable
        style={
          isOpen ? [styles.container, styles.openContainer] : styles.container
        }
        onPress={toggleList}
      >
        <Text style={styles.inputText}>
          {selected ? selected : "Select..."}
        </Text>
        <Icon
          size={20}
          name={isOpen ? "chevron-up" : "chevron-down"}
          style={styles.icon}
          color={config.colors.secondary}
        />
      </Pressable>
      {isOpen ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={
            optionLengthCheck
              ? styles.extendedDropdownContainer
              : styles.dropdownContainer
          }
        >
          {options.map((option) => (
            <Pressable
              onPress={() => {
                setSelected(option);
                toggleList();
              }}
              key={option}
            >
              <Text style={styles.dropdownText}>{option}</Text>
            </Pressable>
          ))}
        </ScrollView>
      ) : null}
    </View>
  );
};

export default Dropdown;
