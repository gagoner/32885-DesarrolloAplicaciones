import { FlatList, View } from "react-native";
import { OrderItem } from "../../components";
import { orders } from "../../constants/data/orders";
import { styles } from "./styles";

const Orders = () => {

    const handleSelect = item => {
        console.log(item);
    }

    const renderOrder = ({ item }) => <OrderItem item={item} handleSelect={handleSelect} />

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={orders}
                    renderItem={renderOrder}
                    keyExtractor={order => order.id}
                />
            </View>
        </View>
    );
}

export default Orders;