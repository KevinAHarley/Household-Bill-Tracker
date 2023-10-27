import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import Button from "components/Button";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import mockedDebt from "mocks/mockedDebt";

import styles from "./DebtScreen.styles";

const DebtScreen = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <Background style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerInnerContainer}>
          <Text style={styles.headerText}>Debt</Text>
        </View>
        <Avatar initials="KH" size="S" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {mockedDebt.map(({ amount, repayment, provider, id }) => (
          <View id={id} style={styles.cardContainer}>
            <Card
              style={styles.card}
              onPress={() =>
                selected === id ? setSelected("") : setSelected(id)
              }
            >
              <Text style={styles.providerText}>{provider}</Text>
              <ProgressBar goal={amount} progress={repayment} />
            </Card>
            {selected === id && (
              <Button
                title="Edit"
                type="secondary"
                onPress={() => null}
                style={styles.editButton}
              />
            )}
          </View>
        ))}
      </ScrollView>
      <Button title="Add" type="primary" onPress={() => null} />
    </Background>
  );
};

export default DebtScreen;
