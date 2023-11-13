import { FC } from "react";
import { ScrollView, View } from "react-native";

import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import DateTimePicker from "components/DateTimePicker";
import { TextInput } from "components/TextInput/TextInput";

import { defaultValues, rules } from "./form";
import styles from "./SignUpScreen.styles";

const SignUpScreen: FC = () => {
  const {
    control,
    setValue,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const disableButton = !isDirty || !isValid;

  const changeHirePeriodStartAt = (value: Date) => {
    setValue("dateOfBirth", value.toISOString(), {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <Background style={styles.container} bottomTab={false}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputContainer}>
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
                returnKeyType="next"
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            defaultValue={defaultValues.dateOfBirth}
            rules={rules.dateOfBirth}
            render={({ field: { value } }) => (
              <DateTimePicker
                value={value}
                mode="date"
                label="Date of Birth"
                callback={(date) => changeHirePeriodStartAt(date)}
                minimumDate={new Date("1900-01-01")}
                maximumDate={new Date()}
              />
            )}
            name="dateOfBirth"
          />
          <Controller
            control={control}
            defaultValue={defaultValues.email}
            rules={rules.email}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeHolder="..."
                label="Email"
                containerStyle={styles.input}
                returnKeyType="next"
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            defaultValue={defaultValues.password}
            rules={rules.password}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeHolder="..."
                label="Password"
                containerStyle={styles.input}
                returnKeyType="done"
              />
            )}
            name="password"
          />
        </View>
        <Button
          title={"Create Account"}
          type="primary"
          onPress={() => null}
          disabled={disableButton}
          style={styles.button}
        />
        <Button
          title={"Login"}
          type="secondary"
          onPress={() => null}
          disabled={disableButton}
          style={styles.button}
        />
      </ScrollView>
    </Background>
  );
};

export default SignUpScreen;
