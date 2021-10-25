/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

import Routes from "./navigation";

const App = () => (
  <NavigationContainer>
    <Routes />
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default registerRootComponent(App);
