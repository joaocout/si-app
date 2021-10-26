import React from "react";
import { View, Text } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

const Button = ({ text, onPress, style=undefined, color }) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fontsLoaded) return <View><Text>Carregando...</Text></View>
    
    return (
        <TouchableOpacity
            style={[style, styles.background, 
                color == "default" ? styles.default : (color == "green" ? styles.green : styles.red)]}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
