import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Montserrat_300Light, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";

import styles from "./styles";

import FlatButton from "../../components/FlatButton";
import ExerciseContent from "./ExerciseContent";

const exercises = {
    "1": {
        title: "Representação de Algoritmos",
        contents: [
            {
                id: 1,
                type: 2,
                title: "Algoritmos",
                content: "t1",
            },
            {
                id: 2,
                type: 1, // multipla escolha
                title: "Algoritmos",
                content: "Qual das seguintes opções não representa um exemplo de algoritmo?",
                options: [
                    {
                        text: "Receita culinária",
                        correct: false,
                    },
                    {
                        text: "Instruções de montagem",
                        correct: false,
                    },
                    {
                        text: "Lista de compras",
                        correct: true,
                    },
                ]
            }
        ],
        nextLesson: 2
    }
}

const Exercise = ({ route, navigation }) => {
    let { id } = route.params;

    let [fontsLoaded] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        Montserrat_300Light, 
        Montserrat_600SemiBold
    });


    if (!fontsLoaded) return <View><Text>Carregando...</Text></View>
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.header_title}>{id}. {exercises[id].title}</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    style={{paddingHorizontal: 32}}
                    data={exercises[id].contents}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ExerciseContent question={item} />}
                />
            </View>
            <FlatButton text="Finalizar" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};

export default Exercise;
