import { FC, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import Button from "components/Button";
import FlatListEmptyComponent from "components/FlatListEmptyComponent";
import SavingsFlatListRender from "components/FlatListRenders/SavingsFlatListRender";
import SeparatedProgressBar from "components/SeparatedProgressBar";
import mockedGoals from "mocks/mockedGoals";
import { SavingsScreenProp } from "navigation/Authenticated/AuthenticatedStack.types";

import styles from "./SavingsScreen.styles";

const SavingsScreen: FC = () => {
  const [selected, setSelected] = useState<string>("");
  const navigation = useNavigation<SavingsScreenProp>();
  const goalLengthCheck = mockedGoals.length > 1;

  return (
    <Background style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar initials="KH" size="S" />
      </View>
      {goalLengthCheck ? (
        <FlatList
          data={mockedGoals}
          contentContainerStyle={styles.flatList}
          ListEmptyComponent={<FlatListEmptyComponent text="a goal" />}
          renderItem={({ item, index }) => (
            <SavingsFlatListRender
              item={item}
              index={index}
              selected={selected}
              setSelected={setSelected}
            />
          )}
        />
      ) : (
        <View style={styles.barContainer}>
          <Text style={styles.barText}>{mockedGoals[0].name}</Text>
          <SeparatedProgressBar
            goal={mockedGoals[0].goal}
            progress={mockedGoals[0].progress}
            style={styles.separateBar}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Button
          title="Delete"
          style={styles.deleteButton}
          type="secondary"
          onPress={() => null}
        />
        <Button
          title="Add"
          style={styles.addButton}
          type="primary"
          onPress={() => navigation.navigate("SavingsInputScreen")}
        />
      </View>
    </Background>
  );
};

export default SavingsScreen;
