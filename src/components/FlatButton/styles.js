import { StyleSheet } from "react-native";

import colors from "../../shared/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.purple,
        padding: 16,
        alignItems: 'center'
    },
    
    text: {
        flex: 1,
        fontFamily: 'Raleway_600SemiBold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    }
});

export default styles;