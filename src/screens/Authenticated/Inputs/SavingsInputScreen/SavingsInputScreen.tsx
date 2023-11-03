import { FC } from "react";
import { ScrollView } from "react-native";

import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import { TextInput } from "components/TextInput/TextInput";

import { rules } from "./form";
import styles from "./SavingsInputScreen.styles";

const SavingsInputScreen: FC = () => {
  const defaultValues = {
    name: "",
    goal: 0,
    progress: 0,
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
          defaultValue={defaultValues.name}
          rules={rules.name}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeHolder="..."
              label="Goal Name"
              containerStyle={styles.input}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.goal}
          rules={rules.goal}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              placeHolder="..."
              label="Goal"
              containerStyle={styles.input}
            />
          )}
          name="goal"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.progress}
          rules={rules.progress}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="numeric"
              placeHolder="..."
              label="Progress"
              containerStyle={styles.input}
            />
          )}
          name="progress"
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

export default SavingsInputScreen;
