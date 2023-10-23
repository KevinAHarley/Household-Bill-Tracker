import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthenticatedStack from "navigation/AuthenticatedStack";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthenticatedStack />
    </NavigationContainer>
  );
};

export default App;
