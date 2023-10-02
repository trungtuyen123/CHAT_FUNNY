import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyTabs from "./navigation";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStackScreen from "./navigation/LoginStackScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs">
        <Stack.Screen
          name="Logins"
          component={LoginStackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* <StatusBar style="auto" /> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
