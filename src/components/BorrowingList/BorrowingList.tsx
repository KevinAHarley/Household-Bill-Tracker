import { FC } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

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
  style?: ViewStyle;
  id?: string;
  onPress?: () => void;
  onCheckPress?: () => void;
  testID?: string;
};

const BorrowingList: FC<BorrowingListProps> = ({
  amount,
  name,
  reason,
  checkbox,
  checked,
  style,
  id,
  onPress,
  onCheckPress,
  testID,
}) => {
  return (
    <Pressable
      style={
        checkbox
          ? [styles.containerWithCheckbox, style]
          : [styles.container, style]
      }
      onPress={onPress}
      key={id}
      testID={testID}
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
        {checkbox && <Checkbox onPress={onCheckPress} />}
      </View>
      <Divider style={styles.divider} />
    </Pressable>
  );
};

export default BorrowingList;
