import { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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
    <View key={index} style={styles.cardContainer}>
      <Card
        style={styles.card}
        onPress={() => (selectedId ? setSelected("") : setSelected(item.id))}
      >
        <Text style={styles.providerText}>{item.provider}</Text>
        <ProgressBar goal={item.amount} progress={item.repayment} />
      </Card>
      <Animated.View style={animatedStyle}>
        <Button
          title="Edit"
          type="secondary"
          onPress={() =>
            navigation.navigate("DebtInputScreen", { id: item.id })
          }
          style={styles.editButton}
        />
      </Animated.View>
    </View>
  );
};

export default DebtFlatListRender;
