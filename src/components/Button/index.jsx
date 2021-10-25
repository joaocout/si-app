import React, { useState } from "react";
import { View, Text } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

const Button = ({ text, onPress, style=undefined, pressed }) => {
    //let [ pressed, setPressed ] = useState(pressedState); // 0 = normal, 1 = verde, 2 = vermelho

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fontsLoaded) return <View><Text>Carregando...</Text></View>
    
    return (
        <TouchableOpacity
            style={[style, styles.background, pressed == 0 ? styles.default : (pressed == 1 ? styles.green : styles.red)]}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
