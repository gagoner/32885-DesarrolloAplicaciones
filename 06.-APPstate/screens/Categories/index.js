import { View, FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { styles } from "./styles";

const Categories = ({ navigation }) => {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.category.categories);
    const categoriesSelected = useSelector(state => state.category.selected);

    const handleSelect = item => (
        dispatch(selectCategory(item.id)),
        navigation.navigate('Products', {
            name: item.title
        })
    )

    const renderItem = ({ item }) => <CategoryItem item={item} handleSelect={handleSelect} />

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
                numColumns={2}
            />
        </View>
    );
}

export default Categories;