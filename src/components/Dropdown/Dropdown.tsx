import { useEffect, useState } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome5";

import config from "config";

import styles from "./Dropdown.styles";

type DropdownProps = {
  label?: string;
  options: string[];
  containerStyle?: ViewStyle;
  selectedOption?: (option: string) => void;
};

const Dropdown = ({
  label,
  options,
  containerStyle,
  selectedOption,
}: DropdownProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selected) {
      selectedOption(selected);
    }
  }, [selected]);

  return (
    <View style={containerStyle}>
      {label ? (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      ) : undefined}
      <Pressable
        style={
          open ? [styles.container, styles.openContainer] : styles.container
        }
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.inputText}>
          {selected ? selected : "Select..."}
        </Text>
        <Icon
          size={20}
          name={open ? "chevron-up" : "chevron-down"}
          style={styles.icon}
          color={config.colors.secondary}
        />
      </Pressable>
      {open ? (
        <View style={styles.dropdownContainer}>
          {options.map((option) => (
            <Pressable
              onPress={() => {
                setSelected(option);
                setOpen(false);
              }}
              id={option}
            >
              <Text style={styles.dropdownText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
