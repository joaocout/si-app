import React from "react";
import { View, Text } from "react-native";
import { useFonts, Raleway_600SemiBold } from "@expo-google-fonts/raleway";

import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

const FlatButton = ({ text, onPress }) => {
    let [fontsLoaded] = useFonts({
        Raleway_600SemiBold,
    });

    if (!fontsLoaded) return <View><Text>Carregando...</Text></View>
    
    return (
        <TouchableOpacity
            style={styles.background}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default FlatButton;
