import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";

const Stack = createStackNavigator();
const LoginStackScreen = ({ }) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
  
    </Stack.Navigator>
  );
};

export default LoginStackScreen;
