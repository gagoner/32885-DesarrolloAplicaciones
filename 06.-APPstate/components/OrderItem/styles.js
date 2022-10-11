import { StyleSheet } from "react-native";
import { secondaryBg, secondaryText } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    touchable: {
        backgroundColor: secondaryBg,
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    date: {
        color: secondaryText,
        fontSize: 18
    },
    total: {
        color: secondaryText,
        fontSize: 16
    }
});