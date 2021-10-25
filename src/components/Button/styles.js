import { StyleSheet } from "react-native";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 13,
        alignItems: 'center',
        borderRadius: 10
    },

    default: {
        backgroundColor: colors.purple
    },

    red: {
        backgroundColor: colors.red
    },

    green: {
        backgroundColor: colors.green
    },
    
    text: {
        flex: 1,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    }
});

export default styles;