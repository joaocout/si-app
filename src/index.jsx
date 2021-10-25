/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

import Routes from "./navigation";

const App = () => (
  <NavigationContainer>
    <Routes />
    <StatusBar barStyle="default" />
  </NavigationContainer>
);

export default registerRootComponent(App);
