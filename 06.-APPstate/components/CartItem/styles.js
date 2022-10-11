import { StyleSheet } from "react-native";
import { secondaryBg, secondaryText } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryBg,
        borderRadius: 5,
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    title: {
        color: secondaryText,
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: secondaryText,
        fontSize: 15,
        marginVertical: 5
    },
    delete: {
        alignItems: 'center'
    },
    label: {
        color: '#d1d1d1',
        fontSize: 13,
        marginTop: 5
    }
})