import { FC, useState } from "react";
import { SectionList, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import BorrowingList from "components/BorrowingList";
import Button from "components/Button";
import FlatListEmptyComponent from "components/FlatListEmptyComponent";
import SwitchButton from "components/SwitchButton";
import mockedBorrowing from "mocks/mockedBorrowing";
import { AuthenticatedStackParamList } from "navigation/AuthenticatedStack.types";

import styles from "./BorrowingScreen.styles";

const BorrowingScreen: FC = () => {
  const [switchButton, setSwitchButton] = useState(0);
  const [checked, setChecked] = useState<string[]>([]);
  const navigation = useNavigation<AuthenticatedStackParamList>();

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

  const isListEmpty =
    filteredBorrowingIncoming.length === 0 &&
    filteredBorrowingOutgoing.length === 0;

  const sections = [
    {
      title: "Incoming",
      data: filteredBorrowingIncoming,
    },
    {
      title: "Outgoing",
      data: filteredBorrowingOutgoing,
    },
  ];

  return (
    <Background style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar initials="KH" size="S" />
      </View>
      <SwitchButton
        leftButtonText="Current"
        rightButtonText="Past"
        containerStyle={styles.switchButton}
        onChange={(option) => setSwitchButton(option)}
      />
      <SectionList
        sections={isListEmpty ? [] : sections}
        contentContainerStyle={styles.sectionList}
        renderItem={({ item, index }) => (
          <BorrowingList
            amount={item.amount}
            name={item.name}
            reason={item.reason}
            checkbox
            checked={item.repaid || checked.includes(item.id)}
            key={index}
            onCheckPress={() => borrowListSelected(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={
              title === "Incoming"
                ? styles.sectionListHeaderTop
                : styles.sectionListHeader
            }
          >
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        ListEmptyComponent={<FlatListEmptyComponent text="a new bill" />}
      />
      <Button
        style={styles.addButton}
        title="Add Bill"
        type="primary"
        onPress={() => navigation.navigate("BorrowingInputScreen")}
      />
    </Background>
  );
};

export default BorrowingScreen;
