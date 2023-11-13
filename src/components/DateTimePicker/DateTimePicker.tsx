import { FC, useState } from "react";
import { Text, View } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome5";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Card from "components/Card";
import config from "config";

import styles from "./DateTimePicker.styles";

type DateTimePickerTypes = {
  callback: (date: Date) => void;
  inputFormat?: string;
  value?: string;
  label?: string;
  mode?: "date" | "time" | "datetime";
  minimumDate?: Date;
  maximumDate?: Date;
};

const DateTimePicker: FC<DateTimePickerTypes> = ({
  label,
  callback,
  value,
  inputFormat = "Do MMMM YYYY",
  mode = "date",
  minimumDate,
  maximumDate,
}) => {
  const [dateTimePickerVisible, setDateTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const confirm = (date: Date) => {
    hideDatePicker();
    callback(date);
  };

  const newValue = value ? moment(value).format(inputFormat) : "";

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <Card onPress={showDatePicker} style={styles.card}>
        <Text style={styles.valueText}>{newValue}</Text>
        <Icon name="chevron-right" size={20} color={config.colors.secondary} />
      </Card>
      <DateTimePickerModal
        isVisible={dateTimePickerVisible}
        mode={mode}
        onConfirm={confirm}
        onCancel={hideDatePicker}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    </View>
  );
};

export default DateTimePicker;
