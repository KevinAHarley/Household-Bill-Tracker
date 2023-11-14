import Icon from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "screens/Authentication/LoginScreen";
import SignUpScreen from "screens/Authentication/SignUpScreen";

import styles from "./AuthenticationStack.styles";
import { AuthenticationStackParamList } from "./AuthenticationStack.types";

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationStack = () => {
  const navigation = useNavigation();
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
          headerShown: true,
          headerTransparent: true,
          headerTitle: "Sign Up",
          headerTitleStyle: styles.headerText,
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="white"
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
54;
