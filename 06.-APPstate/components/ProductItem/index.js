import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, handleSelect, categoryColor }) => {
    return (
        <View style={[styles.container, { backgroundColor: categoryColor }]}>
            <TouchableOpacity style={styles.touchable} onPress={() => handleSelect(item)}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>Peso: {item.weight}</Text>
                        <Text style={styles.detailText}>Precio: ${item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;