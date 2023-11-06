import { FC, useState } from "react";
import { ScrollView } from "react-native";

import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import { TextInput } from "components/TextInput/TextInput";

import styles from "./BorrowingInputScreen.styles";
import { defaultValues, rules } from "./form";

const BorrowingInputScreen: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const typeOptions = ["Incoming", "Outgoing"];

  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const disableButton = !isDirty || !isValid;

  return (
    <Background style={styles.background}>
      <ScrollView style={styles.container}>
        <Controller
          control={control}
          defaultValue={defaultValues.name}
          rules={rules.name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeHolder="..."
              label="Name"
              containerStyle={styles.input}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.amount}
          rules={rules.amount}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              placeHolder="..."
              label="Amount"
              containerStyle={styles.input}
            />
          )}
          name="amount"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.category}
          rules={rules.category}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              value={value}
              onChange={onChange}
              label="Category"
              options={typeOptions}
              containerStyle={styles.input}
              isOpen={isOpen}
              toggleList={() => setIsOpen(!isOpen)}
            />
          )}
          name="category"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.reason}
          rules={rules.reason}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeHolder="..."
              label="Reason"
              containerStyle={styles.input}
            />
          )}
          name="reason"
        />
      </ScrollView>
      <Button
        title="Add"
        type="primary"
        onPress={() => null}
        disabled={disableButton}
      />
    </Background>
  );
};

export default BorrowingInputScreen;
