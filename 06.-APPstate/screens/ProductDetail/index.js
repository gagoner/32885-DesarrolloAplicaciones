import { View, Text } from "react-native";
import { ButtonSecondary } from "../../components";
import { styles } from "./styles";
import { useSelector } from 'react-redux';

const ProductDetail = ({ navigation }) => {

    const product = useSelector(state => state.products.selected)

    const { title, description, weight, price } = product;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description[0].toUpperCase() + description.slice(1)}</Text>
            <View style={styles.details}>
                <Text style={styles.detailText}>{weight}</Text>
                <Text style={styles.detailText}>${price}</Text>
            </View>
            <ButtonSecondary onPress={() => navigation.goBack()}>Ir atrás</ButtonSecondary>
        </View>
    );
}

export default ProductDetail;