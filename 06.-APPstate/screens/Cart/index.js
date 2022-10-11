import { FlatList, View, Text } from "react-native";
import { ButtonPrimary, CartItem } from "../../components";
import { cart } from "../../constants/data/cart";
import { styles } from "./styles";

const Cart = () => {

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirmPurchase = () => {

    }

    const handleDelete = id => {
        console.log(id);
    }

    const renderCartItem = ({ item }) => <CartItem item={item} handleDelete={handleDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={cart}
                    renderItem={renderCartItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View>
                <View style={styles.total}>
                    <Text style={styles.text}>Total: </Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
                <ButtonPrimary onPress={() => handleConfirmPurchase()}>Confirmar compra</ButtonPrimary>
            </View>
        </View>
    );
}

export default Cart;