import { FC } from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import Button from "components/Button";
import Card from "components/Card";
import { DebtScreenProp } from "navigation/AuthenticatedStack.types";

import styles from "./BillsFlatListRender.styles";

type BillsFlatListRenderProps = {
  index: number;
  item: {
    id: string;
    provider: string;
    amount: number;
    dueDate: string;
    category: string;
    occurrence: string;
  };
  selected: string;
  setSelected: (value: string) => void;
};

const BillsFlatListRender: FC<BillsFlatListRenderProps> = ({
  item,
  index,
  selected,
  setSelected,
}) => {
  const navigation = useNavigation<DebtScreenProp>();

  return (
    <View style={styles.cardContainer} key={index}>
      <Card
        style={styles.card}
        onPress={() =>
          selected === item.id ? setSelected("") : setSelected(item.id)
        }
      >
        <View style={styles.cardTopTextContainer}>
          <Text style={styles.cardTopText} numberOfLines={1}>
            {item.provider} - {item.occurrence}
          </Text>
          <Text style={styles.cardBottomText}>
            {moment(item.dueDate).format("DD/MM/YYYY")}
          </Text>
        </View>
        <View style={styles.cardBottomTextContainer}>
          <Text style={styles.cardTopText}>£{item.amount}</Text>
          <Text style={styles.cardBottomText} numberOfLines={1}>
            {item.category}
          </Text>
        </View>
      </Card>
      {selected === item.id && (
        <Button
          title="Edit"
          type="secondary"
          onPress={() =>
            navigation.navigate("BillsInputScreen", { id: item.id })
          }
          style={styles.editButton}
        />
      )}
    </View>
  );
};

export default BillsFlatListRender;
