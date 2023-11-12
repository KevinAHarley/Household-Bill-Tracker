import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type locationType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type AuthenticatedStackParamList = {
  TabNavigator: undefined;
  DashboardScreen: undefined;
  BillsScreen: undefined;
  BorrowingScreen: undefined;
  DebtScreen: undefined;
  SavingsScreen: undefined;
  BillsInputScreen: { id?: string } | undefined;
  BorrowingInputScreen: { id?: string } | undefined;
  DebtInputScreen: { id?: string } | undefined;
  SavingsInputScreen: { id?: string } | undefined;
};

// Screens
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

// Input Screens

export type BillsInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BillsInputScreen"
>;
export type BillsInputScreenRouteProp = RouteProp<
  AuthenticatedStackParamList,
  "BillsInputScreen"
>;

export type BorrowingInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BorrowingInputScreen"
>;
export type BorrowingInputScreenRouteProp = RouteProp<
  AuthenticatedStackParamList,
  "BorrowingInputScreen"
>;

export type DebtInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "DebtInputScreen"
>;
export type DebtInputScreenRouteProp = RouteProp<
  AuthenticatedStackParamList,
  "DebtInputScreen"
>;

export type SavingsInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "SavingsInputScreen"
>;
export type SavingsInputScreenRouteProp = RouteProp<
  AuthenticatedStackParamList,
  "SavingsInputScreen"
>;
