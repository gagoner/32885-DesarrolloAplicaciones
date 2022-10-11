import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        height: 100,
    },
    touchable: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'AnekRegular'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    detailText: {
        fontSize: 18
    }
});