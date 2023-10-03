import * as React from "react";
import {
  MaterialBottomTabNavigationOptions,
  createMaterialBottomTabNavigator,
} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ChatStackScreen from "./ChatNavigation";
import HomeStackScreen from "./HomeNavigation";
import InfoStackScreen from "./InfoNavigation";
import { COLORS } from "../contains/theme";
import LoginStackScreen from "./LoginStackScreen";
import { ParamListBase, RouteProp } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();
function RoutesNavigation() {
  const [user, setUser] = React.useState(false);
  return user ? (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.subText}
      barStyle={{ backgroundColor: COLORS.white, height: 100 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chat-processing"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoStackScreen}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <LoginStackScreen />
  );
}

export default RoutesNavigation;
