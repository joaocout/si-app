import { StyleSheet } from "react-native";
import colors from "../../shared/colors";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.lightBlue,
    },

    container: {
        flex: 3,
        backgroundColor: "white",
        paddingTop: 32,
        borderRadius: 30,
    },

    header: {
        flex: 1,
        paddingHorizontal: 32,
    },

    header_title: {
        fontSize: 24,
        color: colors.purple,
        marginTop: 60,
        fontFamily: "Raleway_700Bold"
    },

    text_title: {
        fontFamily: "Raleway_600SemiBold",
        fontSize: 18,
        color: "black"
    },

    text_content: {
        fontFamily: "Montserrat_300Light",
        fontSize: 14,
        color: "black",
        marginTop: 14,
        marginBottom: 24
    }
});

export default styles;