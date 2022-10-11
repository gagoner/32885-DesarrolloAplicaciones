import { useEffect } from "react";
import { FlatList, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, filteredProducts } from '../../store/actions'
import { styles } from "./styles";

const Products = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const selectedCategory = useSelector(state => state.category.selected);
    const categoryProducts = useSelector(state => state.products.filteredProducts);
    const productSelected = useSelector(state => state.products.selected);

    const categoryColor = selectedCategory.color

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, [])

    const handleSelect = item => {
        dispatch(selectProduct(item.id)),
        navigation.navigate('ProductDetail', {
            name: item.title,
        })
    }

    const renderItem = ({ item }) => <ProductItem item={item} handleSelect={handleSelect} categoryColor={categoryColor} />

    return (
        <View style={styles.container}>
            <FlatList
                data={categoryProducts}
                renderItem={renderItem}
                contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
            />
        </View>
    );
}

export default Products;