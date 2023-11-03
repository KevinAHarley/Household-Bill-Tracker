import { FC } from "react";
import { ScrollView } from "react-native";

import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import { TextInput } from "components/TextInput/TextInput";

import styles from "./DebtInputScreen.styles";
import { rules } from "./form";

const DebtInputScreen: FC = () => {
  const defaultValues = {
    provider: "",
    owed: 0,
    paid: 0,
  };

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
          defaultValue={defaultValues.provider}
          rules={rules.provider}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeHolder="..."
              label="Provider"
              containerStyle={styles.input}
            />
          )}
          name="provider"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.owed}
          rules={rules.owed}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              placeHolder="..."
              label="Total Owed"
              containerStyle={styles.input}
            />
          )}
          name="owed"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.paid}
          rules={rules.paid}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              placeHolder="..."
              label="Current Progress"
              containerStyle={styles.input}
            />
          )}
          name="paid"
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

export default DebtInputScreen;
