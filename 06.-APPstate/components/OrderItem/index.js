import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, handleSelect }) => {

    const { date, total } = item;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={() => handleSelect(item)}>
                <Text style={styles.date}>{formatDate(date)}</Text>
                <Text style={styles.total}>${total}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default OrderItem;