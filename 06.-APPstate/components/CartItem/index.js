import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

const CartItem = ({ item, handleDelete }) => {

    const { title, quantity, price, id } = item;

    return (
        <ScrollView  style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{title}</Text>
            </ScrollView>
            <View style={styles.details}>
                <View>
                    <Text style={styles.text}>Cantidad: {quantity}</Text>
                    <Text style={styles.text}>Precio: ${price}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.delete} onPress={() => handleDelete(id)}>
                        <Ionicons name={'trash'} color={'#d1d1d1'} size={20} />
                        <Text style={styles.label}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default CartItem;