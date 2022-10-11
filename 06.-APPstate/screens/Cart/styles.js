import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 0.85,
        justifyContent: 'flex-start',
    },
    cartList: {
        marginTop: 5,
        marginBottom: 20,
        width: '100%'
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    text: {
        fontSize: 20
    }
});