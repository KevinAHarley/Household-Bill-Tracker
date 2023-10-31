import { FC, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

import Avatar from "components/Avatar";
import Background from "components/Background";
import BorrowingList from "components/BorrowingList";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import SwitchButton from "components/SwitchButton";
import mockedBills from "mocks/mockedBills";
import mockedBorrowing from "mocks/mockedBorrowing";
import mockedDebt from "mocks/mockedDebt";
import mockedGoals from "mocks/mockedGoals";
import mockedUser from "mocks/mockedUser";
import { DashboardScreenRouteProp } from "navigation/AuthenticatedStack.types";
import dateSort from "utils/dateSort";

import styles from "./DashboardScreen.styles";

const DashboardScreen: FC = () => {
  const [switchButton, setSwitchButton] = useState(0);
  const navigation = useNavigation<DashboardScreenRouteProp>();

  // Consider moving to util soon
  const goalSum = mockedGoals.reduce((acc, goal) => acc + goal.goal, 0);
  const goalProgress = mockedGoals.reduce(
    (acc, goal) => acc + goal.progress,
    0
  );

  const debtSum = mockedDebt.reduce((acc, debt) => acc + debt.amount, 0);
  const debtProgress = mockedDebt.reduce(
    (acc, debt) => acc + debt.repayment,
    0
  );

  const filteredBorrowing = mockedBorrowing.filter((borrowing) =>
    switchButton === 0
      ? borrowing.type === "Incoming"
      : borrowing.type === "Outgoing"
  );

  return (
    <Background>
      <LinearGradient
        colors={["#218A90", "#629295"]}
        start={{ x: 1, y: 0 }}
        locations={[0.6, 1]}
        style={styles.container}
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}>{mockedUser.forename}</Text>
          </View>
          <Avatar initials="KH" size="S" />
        </View>
        <Text style={styles.goalText}>Your Goals</Text>
        <View style={styles.progressContainer}>
          <Pressable
            style={styles.progressBarContainer}
            onPress={() => navigation.navigate("SavingsScreen")}
          >
            <ProgressBar goal={goalSum} progress={goalProgress} />
            <Text style={styles.progressBarText}>Savings Goal</Text>
          </Pressable>
          <Pressable
            style={styles.progressBarContainer}
            onPress={() => navigation.navigate("DebtScreen")}
          >
            <ProgressBar goal={debtSum} progress={debtProgress} />
            <Text style={styles.progressBarText}>Debt Goal</Text>
          </Pressable>
        </View>
      </LinearGradient>
      <View style={styles.contentContainer}>
        <View style={styles.upcomingPaymentContainer}>
          <Text style={styles.contentHeaderText}>Upcoming Payments</Text>
          <View style={styles.cardContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dateSort(mockedBills).map((bill) => (
                <Pressable
                  style={{ paddingRight: 12 }}
                  id={bill.id}
                  onPress={() => navigation.navigate("BillsScreen")}
                >
                  <Text style={styles.cardDateText}>
                    {moment(bill.dueDate).format("Do MMM")}
                  </Text>
                  <Card style={styles.card}>
                    <Text style={styles.cardText} numberOfLines={1}>
                      {bill.provider}
                    </Text>
                    <Text style={styles.cardText} numberOfLines={1}>
                      £{bill.amount}
                    </Text>
                    <Text style={styles.cardText} numberOfLines={1}>
                      {bill.category}
                    </Text>
                  </Card>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.borrowingContainer}>
          <Text style={styles.contentHeaderText}>Borrowing</Text>
          <SwitchButton
            leftButtonText="Incoming"
            rightButtonText="Outgoing"
            onChange={(option) => setSwitchButton(option)}
            containerStyle={styles.switchButton}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredBorrowing.map(({ amount, name, reason }) => (
              <BorrowingList
                amount={amount}
                name={name}
                reason={reason}
                onPress={() => navigation.navigate("BorrowingScreen")}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};

export default DashboardScreen;
