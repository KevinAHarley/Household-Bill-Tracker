import { FC } from "react";
import { Text, View } from "react-native";

import ProgressBar from "components/ProgressBar";

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
};

const SavingsFlatListRender: FC<SavingsFlatListRenderProps> = ({
  item,
  index,
}) => {
  return (
    <View key={index} style={styles.mapBarContainer}>
      <Text style={styles.barText}>{item.name}</Text>
      <ProgressBar
        goal={item.goal}
        progress={item.progress}
        barStyle={styles.barStyle}
      />
    </View>
  );
};

export default SavingsFlatListRender;
