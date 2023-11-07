import { FC } from "react";
import { Text, View } from "react-native";

import styles from "./FlatListEmptyComponent.styles";

type FlatListEmptyComponentProps = {
  text: string;
};

const FlatListEmptyComponent: FC<FlatListEmptyComponentProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add {text} to get started!</Text>
    </View>
  );
};

export default FlatListEmptyComponent;
