import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Lesson from "../screens/Lesson";
import Exercise from "../screens/Exercise";
import Course from "../screens/Course";
import LessonFinish from "../screens/LessonFinish";

import BackButton from "./BackButton";

const Stack = createNativeStackNavigator();

const header = ({ navigation, route, options, back }) => {
    return <BackButton onPress={navigation.goBack} visible={back} />
};

const Routes = () => (
    <Stack.Navigator screenOptions={{
        //headerShown: false,
        headerTransparent: true, 
        header: header,
    }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lesson" component={Lesson} initialParams={{ id: 1 }} />
        <Stack.Screen name="Exercise" component={Exercise} initialParams={{ id: 1 }} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="LessonFinish" component={LessonFinish} />
    </Stack.Navigator>
);

export default Routes;
