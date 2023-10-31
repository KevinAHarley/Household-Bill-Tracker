import { FC, useState } from "react";
import { ScrollView } from "react-native";

import Background from "components/Background";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import { TextInput } from "components/TextInput/TextInput";

import styles from "./BorrowingInputScreen.styles";

const BorrowingInputScreen: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const typeOptions = ["Incoming", "Outgoing"];

  return (
    <Background style={styles.background}>
      <ScrollView style={styles.container}>
        <TextInput
          onChange={() => null}
          value={undefined}
          placeHolder="..."
          label="Name"
          containerStyle={styles.input}
        />
        <TextInput
          onChange={() => null}
          value={0}
          keyboardType="numeric"
          placeHolder="..."
          label="Amount"
          containerStyle={styles.input}
        />
        <Dropdown
          label="Category"
          options={typeOptions}
          containerStyle={styles.input}
          isOpen={isOpen}
          toggleList={() => setIsOpen(!isOpen)}
        />
        <TextInput
          onChange={() => null}
          value={undefined}
          placeHolder="..."
          label="Reason"
          containerStyle={styles.input}
        />
      </ScrollView>
      <Button title="Add" type="primary" onPress={() => null} />
    </Background>
  );
};

export default BorrowingInputScreen;
