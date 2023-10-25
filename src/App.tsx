import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Background from "components/Background";
import AuthenticatedStack from "navigation/AuthenticatedStack";

const App = () => {
  return (
    <NavigationContainer>
      <Background>
        <StatusBar style="auto" />
        <AuthenticatedStack />
      </Background>
    </NavigationContainer>
  );
};

export default App;
