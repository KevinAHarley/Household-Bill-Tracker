import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type locationType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type AuthenticatedStackParamList = {
  DashboardScreen: undefined;
  BillsScreen: undefined;
  BorrowingScreen: undefined;
  DebtScreen: undefined;
  SavingsScreen: undefined;
  TabNavigator: undefined;
};

export type DashboardScreenRouteProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "DashboardScreen"
>;
export type BillsScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BillsScreen"
>;
export type BorrowingScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BorrowingScreen"
>;
export type DebtScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "DebtScreen"
>;
export type SavingsScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "SavingsScreen"
>;
