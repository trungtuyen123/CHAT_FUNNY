import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/chat";


const Stack = createStackNavigator();
const ChatStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false
      }}
    >
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
      />
    </Stack.Navigator>
  );
};

export default ChatStackScreen;
