import { FC } from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Button from "components/Button";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import { DebtScreenProp } from "navigation/AuthenticatedStack.types";

import styles from "./DebtFlatListRender.styles";

type DebtFlatListRenderProps = {
  item: {
    id: string;
    provider: string;
    amount: number;
    repayment: number;
    createAt: string;
  };
  index: number;
  selected: string;
  setSelected: (value: string) => void;
};

const DebtFlatListRender: FC<DebtFlatListRenderProps> = ({
  item,
  index,
  selected,
  setSelected,
}) => {
  const navigation = useNavigation<DebtScreenProp>();
  return (
    <View key={index} style={styles.cardContainer}>
      <Card
        style={styles.card}
        onPress={() =>
          selected === item.id ? setSelected("") : setSelected(item.id)
        }
      >
        <Text style={styles.providerText}>{item.provider}</Text>
        <ProgressBar goal={item.amount} progress={item.repayment} />
      </Card>
      {selected === item.id && (
        <Button
          title="Edit"
          type="secondary"
          onPress={() =>
            navigation.navigate("DebtInputScreen", { id: item.id })
          }
          style={styles.editButton}
        />
      )}
    </View>
  );
};

export default DebtFlatListRender;
