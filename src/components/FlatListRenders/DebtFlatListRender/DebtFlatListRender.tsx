import { FC } from "react";
import { Text, View } from "react-native";

import Button from "components/Button";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";

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
  state: string;
  setState: (value: string) => void;
};

const DebtFlatListRender: FC<DebtFlatListRenderProps> = ({
  item,
  index,
  state,
  setState,
}) => {
  return (
    <View key={index} style={styles.cardContainer}>
      <Card
        style={styles.card}
        onPress={() => (state === item.id ? setState("") : setState(item.id))}
      >
        <Text style={styles.providerText}>{item.provider}</Text>
        <ProgressBar goal={item.amount} progress={item.repayment} />
      </Card>
      {state === item.id && (
        <Button
          title="Edit"
          type="secondary"
          onPress={() => null}
          style={styles.editButton}
        />
      )}
    </View>
  );
};

export default DebtFlatListRender;
