import { useState } from "react";
import { Text, View } from "react-native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import BorrowingList from "components/BorrowingList";
import SwitchButton from "components/SwitchButton";
import mockedBorrowing from "mocks/mockedBorrowing";

import styles from "./BorrowingScreen.styles";

const BorrowingScreen = () => {
  const [switchButton, setSwitchButton] = useState(0);
  const [checked, setChecked] = useState<string[]>([]);

  const filteredBorrowingIncoming = mockedBorrowing
    .filter((borrowing) => borrowing.type === "Incoming")
    .filter((borrowing) =>
      switchButton ? borrowing.repaid === true : borrowing.repaid === false
    );

  const filteredBorrowingOutgoing = mockedBorrowing
    .filter((borrowing) => borrowing.type === "Outgoing")
    .filter((borrowing) =>
      switchButton ? borrowing.repaid === true : borrowing.repaid === false
    );

  const borrowListSelected = (id: string) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  return (
    <Background style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerInnerContainer}>
          <Text style={styles.headerText}>Borrowing</Text>
        </View>
        <Avatar initials="KH" size="S" />
      </View>
      <SwitchButton
        leftButtonText="Current"
        rightButtonText="Past"
        containerStyle={{ alignSelf: "center", marginTop: 20 }}
        onChange={(option) => setSwitchButton(option)}
      />
      <Text style={styles.headerText}>Incoming</Text>
      <View style={{ flex: 1 }}>
        {filteredBorrowingIncoming.map(
          ({ amount, name, reason, id, repaid }) => (
            <BorrowingList
              amount={amount}
              name={name}
              reason={reason}
              checkbox
              checked={repaid || checked.includes(id)}
              id={id}
              onCheckPress={() => borrowListSelected(id)}
            />
          )
        )}
      </View>
      <Text style={styles.headerText}>Outgoing</Text>
      <View style={{ flex: 1 }}>
        {filteredBorrowingOutgoing.map(
          ({ amount, name, reason, id, repaid }) => (
            <BorrowingList
              amount={amount}
              name={name}
              reason={reason}
              checkbox
              checked={repaid || checked.includes(id)}
              id={id}
              onCheckPress={() => borrowListSelected(id)}
            />
          )
        )}
      </View>
    </Background>
  );
};

export default BorrowingScreen;
