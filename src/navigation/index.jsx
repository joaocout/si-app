import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Lesson from "../screens/Lesson";
import Exercise from "../screens/Exercise";
import Course from "../screens/Course";
import LessonFinish from "../screens/LessonFinish";

import BackButton from "./BackButton";
import LandingPage from "../screens/LandingPage";

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      header: ({ navigation, route, options, back }) => {
        return <BackButton onPress={navigation.goBack} visible={back} />;
      },
    }}
  >
    <Stack.Screen name="LandingPage" component={LandingPage} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Lesson" component={Lesson} />
    <Stack.Screen name="Exercise" component={Exercise} />
    <Stack.Screen name="LessonFinish" component={LessonFinish} />
    <Stack.Screen name="Course" component={Course} />
  </Stack.Navigator>
);

export default Routes;
