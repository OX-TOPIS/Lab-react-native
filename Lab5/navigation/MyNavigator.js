import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainNavigator from "./MainNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
