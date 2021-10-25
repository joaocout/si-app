import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Lesson from "../screens/Lesson";
import Exercise from "../screens/Exercise";

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Lesson" component={Lesson} initialParams={{id:1}}/>
    <Stack.Screen name="Exercise" component={Exercise} initialParams={{id:1}}/>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default Routes;
