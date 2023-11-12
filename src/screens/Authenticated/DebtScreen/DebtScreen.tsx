import { FC, useState } from "react";
import { FlatList, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import Button from "components/Button";
import FlatListEmptyComponent from "components/FlatListEmptyComponent";
import DebtFlatListRender from "components/FlatListRenders/DebtFlatListRender/DebtFlatListRender";
import mockedDebt from "mocks/mockedDebt";
import { DebtScreenProp } from "navigation/Authenticated/AuthenticatedStack.types";

import styles from "./DebtScreen.styles";

const DebtScreen: FC = () => {
  const [selected, setSelected] = useState<string>("");
  const navigation = useNavigation<DebtScreenProp>();

  return (
    <Background style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar initials="KH" size="S" />
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={mockedDebt}
        renderItem={({ item, index }) => (
          <DebtFlatListRender
            selected={selected}
            setSelected={setSelected}
            item={item}
            index={index}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<FlatListEmptyComponent text="a new debt" />}
      />
      <Button
        style={styles.addButton}
        title="Add"
        type="primary"
        onPress={() => navigation.navigate("DebtInputScreen")}
      />
    </Background>
  );
};

export default DebtScreen;
