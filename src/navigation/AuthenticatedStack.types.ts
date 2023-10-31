import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type locationType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type AuthenticatedStackParamList = {
  navigate(arg0: string): void;
  DashboardScreen: undefined;
  BillsScreen: undefined;
  BorrowingScreen: undefined;
  DebtScreen: undefined;
  SavingsScreen: undefined;
  TabNavigator: undefined;
  BillsInputScreen: undefined;
  BorrowingInputScreen: undefined;
  DebtInputScreen: undefined;
  SavingsInputScreen: undefined;
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

export type BillsInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BillsInputScreen"
>;

export type BorrowingInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "BorrowingInputScreen"
>;

export type DebtInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "DebtInputScreen"
>;

export type SavingsInputScreenProp = NativeStackNavigationProp<
  AuthenticatedStackParamList,
  "SavingsInputScreen"
>;
