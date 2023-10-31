import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import config from "config";
import AuthenticatedStack from "navigation/AuthenticatedStack";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" backgroundColor={config.colors.primary} />
        <AuthenticatedStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
