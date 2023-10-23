import Icon from "@expo/vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InvertedLogo from "assets/SVG/InvertedLogo";
import BillsScreen from "screens/Authenticated/BillsScreen";
import BorrowingScreen from "screens/Authenticated/BorrowingScreen";
import DashboardScreen from "screens/Authenticated/DashboardScreen";
import DebtScreen from "screens/Authenticated/DebtScreen";
import SavingsScreen from "screens/Authenticated/SavingsScreen";
import getTabBarIconName from "utils/getTabBarIconName";

import styles from "./AuthenticatedStack.styles";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="BillsScreen" component={BillsScreen} />
      <Stack.Screen name="SavingsScreen" component={SavingsScreen} />
      <Stack.Screen name="DebtScreen" component={DebtScreen} />
      <Stack.Screen name="BorrowingScreen" component={BorrowingScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={({ route: { name } }: { route: { name: string } }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: () => {
          const isFocused = useIsFocused();
          const iconName = getTabBarIconName(name);

          return name === "DashboardScreen" ? (
            <InvertedLogo
              width={60}
              height={60}
              style={isFocused ? styles.raisedIcon : null}
            />
          ) : (
            <Icon
              name={iconName}
              color="white"
              size={30}
              style={isFocused ? styles.raisedIcon : null}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="BillsScreen"
        component={BillsScreen}
        options={{
          tabBarLabel: "Bills",
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="DebtScreen"
        component={DebtScreen}
        options={{
          tabBarLabel: "Debt",
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarLabel: "",
          tabBarIconStyle: styles.logoTabBarStyle,
        }}
      />
      <Tab.Screen
        name="BorrowingScreen"
        component={BorrowingScreen}
        options={{
          tabBarLabel: "Borrow",
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="SavingsScreen"
        component={SavingsScreen}
        options={{
          tabBarLabel: "Savings",
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthenticatedStack;
