import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "screens/Authentication/LoginScreen";
import SignUpScreen from "screens/Authentication/SignUpScreen";

import styles from "./AuthenticationStack.styles";
import { AuthenticationStackParamList } from "./AuthenticationStack.types";

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: "Sign Up",
          headerTitleStyle: styles.headerText,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
