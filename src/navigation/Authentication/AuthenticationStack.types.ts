import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthenticationStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

// Screens
export type LoginScreenRouteProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  "LoginScreen"
>;
export type LoginScreenProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  "LoginScreen"
>;

export type SignUpScreenProp = NativeStackNavigationProp<
  AuthenticationStackParamList,
  "SignUpScreen"
>;
