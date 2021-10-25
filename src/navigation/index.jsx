import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Course from "../screens/Course";

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Course" component={Course} />
  </Stack.Navigator>
);

export default Routes;
