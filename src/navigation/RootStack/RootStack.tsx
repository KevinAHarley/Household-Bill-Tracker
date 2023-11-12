import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthenticatedStack from "navigation/Authenticated/AuthenticatedStack";
import AuthenticationStack from "navigation/Authentication/AuthenticationStack";

import { RootStackParamList } from "./RootStack.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const isLoggedIn = false;

const RootStack = () => {
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="AuthenticatedStack"
          component={AuthenticatedStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AuthenticationStack"
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
