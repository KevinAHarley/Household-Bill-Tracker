import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "screens/Authentication/LoginScreen";

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
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
