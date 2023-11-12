import { FC, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import Button from "components/Button";
import ProgressBar from "components/ProgressBar";
import { SavingsScreenProp } from "navigation/Authenticated/AuthenticatedStack.types";

import styles from "./SavingsFlatListRender.styles";

type SavingsFlatListRenderProps = {
  index: number;
  item: {
    id: string;
    name: string;
    goal: number;
    progress: number;
    createdAt: string;
  };
  selected: string;
  setSelected: (value: string) => void;
};

const SavingsFlatListRender: FC<SavingsFlatListRenderProps> = ({
  item,
  index,
  selected,
  setSelected,
}) => {
  const navigation = useNavigation<SavingsScreenProp>();
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
    <View key={index} style={styles.mapBarContainer}>
      <Text style={styles.barText}>{item.name}</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            selectedId ? setSelected("") : setSelected(item.id);
          }}
          style={{ flex: 1 }}
        >
          <ProgressBar
            goal={item.goal}
            progress={item.progress}
            barStyle={styles.barStyle}
          />
        </Pressable>
        <Animated.View style={animatedStyle}>
          <Button
            title="Edit"
            type="secondary"
            onPress={() =>
              navigation.navigate("SavingsInputScreen", { id: item.id })
            }
            style={styles.editButton}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default SavingsFlatListRender;
