import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import onboarding from "./screens/onboarding";
import BottomTabs from "./components/organisms/BottomTabs";

const Stack = createStackNavigator();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName="onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="onboarding" component={onboarding} />
      <Screen name="Aisha Screens" component={BottomTabs} />
    </Navigator>
  );
};

export default AppRoutes;
