import { FC, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import moment from "moment";

import Avatar from "components/Avatar";
import Background from "components/Background";
import Button from "components/Button";
import Card from "components/Card";
import mockedBills from "mocks/mockedBills";
import { AuthenticatedStackParamList } from "navigation/AuthenticatedStack.types";

import styles from "./BillsScreen.styles";

const BillsScreen: FC = () => {
  const [selected, setSelected] = useState<string>("");
  const navigation = useNavigation<AuthenticatedStackParamList>();

  return (
    <Background style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerInnerContainer}>
          <Text style={styles.headerText}>Upcoming Payments</Text>
        </View>
        <Avatar initials="KH" size="S" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {mockedBills.map(
          ({ amount, category, dueDate, provider, occurrence, id }) => (
            <View style={styles.cardContainer} id={id}>
              <Card
                style={styles.card}
                onPress={() =>
                  selected === id ? setSelected("") : setSelected(id)
                }
              >
                <View style={styles.cardTopTextContainer}>
                  <Text style={styles.cardTopText} numberOfLines={1}>
                    {provider} - {occurrence}
                  </Text>
                  <Text style={styles.cardBottomText}>
                    {moment(dueDate).format("DD/MM/YYYY")}
                  </Text>
                </View>
                <View style={styles.cardBottomTextContainer}>
                  <Text style={styles.cardTopText}>£{amount}</Text>
                  <Text style={styles.cardBottomText} numberOfLines={1}>
                    {category}
                  </Text>
                </View>
              </Card>
              {selected === id && (
                <Button
                  title="Edit"
                  type="secondary"
                  onPress={() => null}
                  style={styles.editButton}
                />
              )}
            </View>
          )
        )}
      </ScrollView>
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
