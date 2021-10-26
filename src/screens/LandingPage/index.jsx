import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts, Raleway_700Bold, Raleway_600SemiBold_Italic } from "@expo-google-fonts/raleway";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { CommonActions } from '@react-navigation/native';

import Button from "../../components/Button";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        padding: 32
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 36,
        color: colors.purple,
        marginBottom: 36
    },
    inputBoxContainer: {
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    inputBox: {
        flex: 1,
        borderColor: colors.blue,
        borderWidth: 1,
        borderRadius: 30,
        height: 40,
        color: "black",
        paddingLeft: 40,
        paddingRight: 12,
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
    },

    inputIcon: {
        left: 12,
        position: "absolute",
    },
});

const LandingPage = ({ route, navigation }) => {
    let [fontsLoaded] = useFonts({
        Raleway_700Bold,
        Raleway_600SemiBold_Italic,
        Montserrat_400Regular
    });

    if (!fontsLoaded) return <View><Text>Carregando...</Text></View>
    return (
        <View style={{flex: 1}}>
            <View style={styles.background}>
                <View style={styles.centered}>
                    <Text style={styles.text}>Turing In</Text>
                    <View style={styles.inputBoxContainer}>
                        <TextInput
                            placeholderTextColor={colors.blue}
                            placeholder="Login"
                            style={styles.inputBox}
                        />
                        <FontAwesome5
                            style={styles.inputIcon}
                            name="user-alt"
                            size={16}
                            color={colors.blue}
                        />
                    </View>
                    <View style={styles.inputBoxContainer}>
                        <TextInput
                            placeholderTextColor={colors.blue}
                            placeholder="Senha"
                            style={styles.inputBox}
                            secureTextEntry={true}
                        />
                        <FontAwesome5
                            style={styles.inputIcon}
                            name="key"
                            size={16}
                            color={colors.blue}
                        />
                    </View>
                    <Button text="Entrar" onPress={() => navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: 'Home' }
                            ]
                        })
                    )}
                        style={{backgroundColor: colors.purple, marginTop:10, borderRadius: 30}}
                    />
                </View>
            </View>
        </View>
    );
};

export default LandingPage;