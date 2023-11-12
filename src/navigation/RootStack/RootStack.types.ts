import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AuthenticatedStack: undefined;
  AuthenticationStack: undefined;
};

// Screens
export type AuthenticationStackProp = NativeStackNavigationProp<
  RootStackParamList,
  "AuthenticationStack"
>;

export type AuthenticatedStackProp = NativeStackNavigationProp<
  RootStackParamList,
  "AuthenticatedStack"
>;
