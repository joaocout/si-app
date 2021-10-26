/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";

import Store from "./shared/state";
import Routes from "./navigation";

const App = () => (
  <NavigationContainer>
    <Store>
      <Routes />
      <StatusBar barStyle="default" />
    </Store>
  </NavigationContainer>
);

export default registerRootComponent(App);
