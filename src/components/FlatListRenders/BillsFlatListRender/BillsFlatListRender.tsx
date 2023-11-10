import { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
  const [selectedWidth] = useState<SharedValue<number>>(useSharedValue(0));
  const [selectedOpacity] = useState<SharedValue<number>>(useSharedValue(0));
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: selectedWidth.value,
      opacity: selectedOpacity.value,
    };
  });

  const selectedId = item.id === selected;

  useEffect(() => {
    if (selectedId) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [selected]);

  const fadeIn = () => {
    if (selectedId) {
      selectedWidth.value = withTiming(88, {
        duration: 500,
      });
      selectedOpacity.value = withTiming(1, {
        duration: 500,
      });
    }
  };

  const fadeOut = () => {
    if (!selectedId) {
      selectedWidth.value = withTiming(0, {
        duration: 500,
      });
      selectedOpacity.value = withTiming(0, {
        duration: 500,
      });
    }
  };

  return (
    <View style={styles.cardContainer} key={index}>
      <Card
        style={styles.card}
        onPress={() => {
          selectedId ? setSelected("") : setSelected(item.id);
        }}
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
      <Animated.View style={animatedStyle}>
        <Button
          title="Edit"
          type="secondary"
          onPress={() =>
            navigation.navigate("BillsInputScreen", { id: item.id })
          }
          style={styles.editButton}
        />
      </Animated.View>
    </View>
  );
};

export default BillsFlatListRender;
