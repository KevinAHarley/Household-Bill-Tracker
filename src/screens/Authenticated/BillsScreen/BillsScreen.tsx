import { FC } from "react";
import { FlatList, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Avatar from "components/Avatar";
import Background from "components/Background";
import Button from "components/Button";
import FlatListEmptyComponent from "components/FlatListEmptyComponent";
import BillsFlatListRender from "components/FlatListRenders/BillsFlatListRender";
import mockedBills from "mocks/mockedBills";
import { AuthenticatedStackParamList } from "navigation/AuthenticatedStack.types";

import styles from "./BillsScreen.styles";

const BillsScreen: FC = () => {
  const navigation = useNavigation<AuthenticatedStackParamList>();

  return (
    <Background style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar initials="KH" size="S" />
      </View>
      <FlatList
        data={mockedBills}
        contentContainerStyle={styles.flatList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<FlatListEmptyComponent text="a new bill" />}
        renderItem={({ item, index }) => (
          <BillsFlatListRender item={item} index={index} />
        )}
      />
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
          onPress={() => navigation.navigate("BillsInputScreen")}
        />
      </View>
    </Background>
  );
};

export default BillsScreen;
