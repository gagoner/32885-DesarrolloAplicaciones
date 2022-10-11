import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CategoryItem = ({ item, handleSelect }) => {
    return (
        <View style={[styles.container, { backgroundColor: item.color }]}>
            <TouchableOpacity style={styles.touchable} onPress={() => handleSelect(item)}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryItem;