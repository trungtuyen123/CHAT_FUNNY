import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InfoScreen from "../screens/info";


const Stack = createStackNavigator();
const InfoStackScreen = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="InfoScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false
      }}
    >
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
       
      />
    </Stack.Navigator>
  );
};

export default InfoStackScreen;
