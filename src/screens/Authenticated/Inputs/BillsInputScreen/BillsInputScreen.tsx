import { FC, useState } from "react";
import { ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";

import Background from "components/Background";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import { TextInput } from "components/TextInput/TextInput";
import mockedBills from "mocks/mockedBills";
import { BillsInputScreenRouteProp } from "navigation/Authenticated/AuthenticatedStack.types";
import toggleDropDownList from "utils/toggleDropDownList";

import styles from "./BillsInputScreen.styles";
import { rules } from "./form";

const BillsInputScreen: FC = () => {
  const { params } = useRoute<BillsInputScreenRouteProp>();
  const [openList, setOpenList] = useState<string | null>(null);

  const findBillByID = mockedBills.find((bill) => bill.id === params?.id);

  const defaultValues = {
    provider: findBillByID?.provider || "",
    price: findBillByID?.amount || "",
    date: moment(findBillByID?.dueDate).format("Do") || "",
    occurrence: findBillByID?.occurrence || "",
    category: findBillByID?.category || "",
  };

  const {
    control,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  const categoryOptions = [
    "Food",
    "Transportation",
    "Other",
    "House",
    "Loan",
    "Insurance",
    "Utilities",
    "Entertainment",
  ];
  const occurrenceOptions = ["Weekly", "Monthly", "Yearly"];
  const dateOptions = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
  ];

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
          defaultValue={defaultValues.price}
          rules={rules.price}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChange={onChange}
              onBlur={onBlur}
              value={value.toString()}
              keyboardType="numeric"
              placeHolder="..."
              label="Price"
              containerStyle={styles.input}
            />
          )}
          name="price"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.date}
          rules={rules.date}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              label="Date"
              value={value}
              onChange={onChange}
              options={dateOptions}
              containerStyle={styles.input}
              isOpen={openList === "date"}
              toggleList={() =>
                toggleDropDownList("date", openList, setOpenList)
              }
            />
          )}
          name="date"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.occurrence}
          rules={rules.occurrence}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              label="Occurrence"
              value={value}
              onChange={onChange}
              options={occurrenceOptions}
              containerStyle={styles.input}
              isOpen={openList === "occurrence"}
              toggleList={() =>
                toggleDropDownList("occurrence", openList, setOpenList)
              }
            />
          )}
          name="occurrence"
        />
        <Controller
          control={control}
          defaultValue={defaultValues.category}
          rules={rules.category}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              label="Category"
              value={value}
              onChange={onChange}
              options={categoryOptions}
              containerStyle={styles.input}
              isOpen={openList === "category"}
              toggleList={() =>
                toggleDropDownList("category", openList, setOpenList)
              }
            />
          )}
          name="category"
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

export default BillsInputScreen;
