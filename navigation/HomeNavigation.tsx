import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";

const Stack = createStackNavigator();
const HomeStackScreen = ({ }) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
  
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
