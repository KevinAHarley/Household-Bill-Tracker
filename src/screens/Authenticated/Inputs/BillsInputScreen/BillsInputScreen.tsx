import { FC, useState } from "react";
import { ScrollView } from "react-native";

import Background from "components/Background";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import { TextInput } from "components/TextInput/TextInput";

import styles from "./BillsInputScreen.styles";

const BillsInputScreen: FC = () => {
  const [openList, setOpenList] = useState<string | null>(null);
  const categoryOptions = ["Food", "Transportation", "Entertainment", "Other"];
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

  const toggleList = (listTitle: string) => {
    if (openList === listTitle) {
      setOpenList(null);
    } else {
      setOpenList(listTitle);
    }
  };

  return (
    <Background style={styles.background}>
      <ScrollView style={styles.container}>
        <TextInput
          onChange={() => null}
          value={undefined}
          placeHolder="..."
          label="Provider"
          containerStyle={styles.input}
        />
        <TextInput
          onChange={() => null}
          value={0}
          keyboardType="numeric"
          placeHolder="..."
          label="Price"
          containerStyle={styles.input}
        />
        <Dropdown
          label="Date"
          options={dateOptions}
          containerStyle={styles.input}
          isOpen={openList === "date"}
          toggleList={() => toggleList("date")}
        />
        <Dropdown
          label="Occurrence"
          options={occurrenceOptions}
          containerStyle={styles.input}
          isOpen={openList === "occurrence"}
          toggleList={() => toggleList("occurrence")}
        />
        <Dropdown
          label="Category"
          options={categoryOptions}
          containerStyle={styles.input}
          isOpen={openList === "category"}
          toggleList={() => toggleList("category")}
        />
      </ScrollView>
      <Button title="Add" type="primary" onPress={() => null} />
    </Background>
  );
};

export default BillsInputScreen;
