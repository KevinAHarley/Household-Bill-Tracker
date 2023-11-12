import { FC } from "react";
import { ScrollView, Text, View } from "react-native";

import { Controller, useForm } from "react-hook-form";

import InvertedLogo from "assets/SVG/InvertedLogo";
import Background from "components/Background";
import Button from "components/Button";
import { TextInput } from "components/TextInput/TextInput";

import { defaultValues, rules } from "./form";
import styles from "./LoginScreen.styles";

const LoginScreen: FC = () => {
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const disableButton = !isDirty || !isValid;

  return (
    <Background style={styles.container} bottomTab={false}>
      <InvertedLogo width={250} height={250} style={styles.logo} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputContainer}>
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
          <Text onPress={() => null} style={styles.forgotPasswordText}>
            Forgot Password?
          </Text>
        </View>
        <Button
          title={"Login"}
          type="primary"
          onPress={() => null}
          disabled={disableButton}
          style={styles.button}
        />
        <Button
          title={"Sign Up"}
          type="secondary"
          onPress={() => null}
          disabled={disableButton}
          style={styles.button}
        />
      </ScrollView>
    </Background>
  );
};

export default LoginScreen;
