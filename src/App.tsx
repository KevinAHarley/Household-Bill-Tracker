import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import config from "config";
import RootStack from "navigation/RootStack/RootStack";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" backgroundColor={config.colors.primary} />
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
