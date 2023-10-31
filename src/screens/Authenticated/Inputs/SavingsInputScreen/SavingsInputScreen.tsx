import { FC } from "react";
import { ScrollView } from "react-native";

import Background from "components/Background";
import Button from "components/Button";
import { TextInput } from "components/TextInput/TextInput";

import styles from "./SavingsInputScreen.styles";

const SavingsInputScreen: FC = () => {
  return (
    <Background style={styles.background}>
      <ScrollView style={styles.container}>
        <TextInput
          onChange={() => null}
          value={undefined}
          placeHolder="..."
          label="Goal Name"
          containerStyle={styles.input}
        />
        <TextInput
          onChange={() => null}
          value={0}
          keyboardType="numeric"
          placeHolder="..."
          label="Goal"
          containerStyle={styles.input}
        />
        <TextInput
          onChange={() => null}
          value={0}
          keyboardType="numeric"
          placeHolder="..."
          label="Progress"
          containerStyle={styles.input}
        />
      </ScrollView>
      <Button title="Add" type="primary" onPress={() => null} />
    </Background>
  );
};

export default SavingsInputScreen;
