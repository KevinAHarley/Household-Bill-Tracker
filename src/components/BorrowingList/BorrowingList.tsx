import { Pressable, Text, View } from "react-native";

import Checkbox from "components/Checkbox";
import Divider from "components/Divider";

import styles from "./BorrowingList.styles";

type BorrowingListProps = {
  amount: number;
  name: string;
  //Change to enum after gathering more information
  reason: string;
  checkbox?: boolean;
  checked?: boolean;
  onPress?: () => void;
};

const BorrowingList = ({
  amount,
  name,
  reason,
  checkbox,
  checked,
  onPress,
}: BorrowingListProps) => {
  return (
    <Pressable
      style={checkbox ? styles.containerWithCheckbox : styles.container}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={checked ? styles.textWithStrike : styles.text}>
          £{amount}
        </Text>
        <Text style={checked ? styles.textWithStrike : styles.text}>
          {name}
        </Text>
        <Text style={checked ? styles.textWithStrike : styles.text}>
          {reason}
        </Text>
        {checkbox && <Checkbox />}
      </View>
      <Divider style={styles.divider} />
    </Pressable>
  );
};

export default BorrowingList;
