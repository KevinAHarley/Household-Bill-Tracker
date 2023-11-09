import { FC } from "react";
import { Pressable, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import Card from "components/Card";
import { DashboardScreenRouteProp } from "navigation/AuthenticatedStack.types";

import styles from "./DashboardBillsFlatListRender.styles";

type DashboardBillsFlatListRenderProps = {
  index: number;
  item: {
    id: string;
    provider: string;
    amount: number;
    dueDate: string;
    category: string;
    occurrence: string;
  };
};

const DashboardBillsFlatListRender: FC<DashboardBillsFlatListRenderProps> = ({
  item,
  index,
}) => {
  const navigation = useNavigation<DashboardScreenRouteProp>();

  return (
    <Pressable
      style={styles.container}
      key={index}
      onPress={() => navigation.navigate("BillsScreen")}
    >
      <Text style={styles.cardDateText}>
        {moment(item.dueDate).format("Do MMM")}
      </Text>
      <Card style={styles.card}>
        <Text style={styles.cardText} numberOfLines={1}>
          {item.provider}
        </Text>
        <Text style={styles.cardText} numberOfLines={1}>
          £{item.amount}
        </Text>
        <Text style={styles.cardText} numberOfLines={1}>
          {item.category}
        </Text>
      </Card>
    </Pressable>
  );
};

export default DashboardBillsFlatListRender;
