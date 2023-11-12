import { FC } from "react";
import { ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import { TextInput } from "components/TextInput/TextInput";
import mockedDebt from "mocks/mockedDebt";
import { DebtInputScreenRouteProp } from "navigation/Authenticated/AuthenticatedStack.types";

import styles from "./DebtInputScreen.styles";
import { rules } from "./form";

const DebtInputScreen: FC = () => {
  const { params } = useRoute<DebtInputScreenRouteProp>();

  const findDebtByID = mockedDebt.find((bill) => bill.id === params?.id);

  const defaultValues = {
    provider: findDebtByID?.provider || "",
    owed: findDebtByID?.amount || 0,
    paid: findDebtByID?.repayment || 0,
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
              value={value.toString()}
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
              value={value.toString()}
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
        title={params?.id ? "Update" : "Add"}
        type="primary"
        onPress={() => null}
        disabled={disableButton}
      />
    </Background>
  );
};

export default DebtInputScreen;
