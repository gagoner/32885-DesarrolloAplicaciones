import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: 'AnekBold'
    },
    description: {
        marginTop: 20,
        fontSize: 20
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '33%',
        margin: 30
    },
    detailText: {
        fontSize: 20
    }
});