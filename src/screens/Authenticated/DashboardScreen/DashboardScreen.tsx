import { FC, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import Avatar from "components/Avatar";
import Background from "components/Background";
import BorrowingList from "components/BorrowingList";
import DashboardBillsFlatListRender from "components/FlatListRenders/DashboardBillsFlatListRender";
import ProgressBar from "components/ProgressBar";
import SwitchButton from "components/SwitchButton";
import mockedBills from "mocks/mockedBills";
import mockedBorrowing from "mocks/mockedBorrowing";
import mockedDebt from "mocks/mockedDebt";
import mockedGoals from "mocks/mockedGoals";
import mockedUser from "mocks/mockedUser";
import { DashboardScreenRouteProp } from "navigation/Authenticated/AuthenticatedStack.types";

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
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}
            data={mockedBills}
            renderItem={({ item, index }) => (
              <DashboardBillsFlatListRender item={item} index={index} />
            )}
          />
        </View>
        <View style={styles.borrowingContainer}>
          <Text style={styles.contentHeaderText}>Borrowing</Text>
          <SwitchButton
            leftButtonText="Incoming"
            rightButtonText="Outgoing"
            onChange={(option) => setSwitchButton(option)}
            containerStyle={styles.switchButton}
          />
          <FlatList
            data={filteredBorrowing}
            contentContainerStyle={styles.sectionList}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => navigation.navigate("BorrowingScreen")}>
                <BorrowingList
                  amount={item.amount}
                  name={item.name}
                  reason={item.reason}
                  key={index}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
    </Background>
  );
};

export default DashboardScreen;
