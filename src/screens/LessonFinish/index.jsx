import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Raleway_700Bold, Raleway_600SemiBold_Italic } from "@expo-google-fonts/raleway";

import FlatButton from "../../components/FlatButton";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.blue,
        padding: 32
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        fontFamily: 'Raleway_700Bold',
        fontSize: 24,
        color: 'white'
    },
    lesson_title: {
        fontFamily: 'Raleway_600SemiBold_Italic',
        fontSize: 24,
        color: 'white'
    }
});

const LessonFinish = ({ route, navigation }) => {
    const { lesson_id, lesson_title, courseId } = route.params;

    let [fontsLoaded] = useFonts({
        Raleway_700Bold,
        Raleway_600SemiBold_Italic
    });

    return (
        <View style={{flex: 1}}>
            <View style={styles.background}>
                <View style={styles.centered}>
                    <Text style={styles.text}>Parabéns!</Text>
                    <Text style={styles.text}>Você finalizou o tópico</Text>
                    <Text>{"\n"}</Text>
                    <Text style={styles.lesson_title}>{lesson_id}. {lesson_title}</Text>
                </View>
            </View>
            {/* <FlatButton text="Voltar para o curso" onPress={() => navigation.navigate('Home')}/> */}
            <FlatButton text="Voltar para o curso" onPress={() => navigation.popToTop()}/>
        </View>
    );
};

export default LessonFinish;