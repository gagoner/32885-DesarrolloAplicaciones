import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { Header, ProductPreview, SecondaryButton } from '../../components'

const SearchScreen = ({ navigation }) => {

    const favourites = useSelector(state => state.product.favourites)

    const renderItem = ({ item }) => <ProductPreview handleSelected={() => navigation.navigate('ProductDetail', { itemId: item.id })} item={item} />

    const goHome = () => navigation.navigate('Home')

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favorites found</Text>
            <SecondaryButton title='Home' onPress={goHome} />
        </View>
    )

    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FlatList
                extraData={favourites}
                data={favourites}
                renderItem={renderItem}
                ListEmptyComponent={ListEmptyComponent}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default SearchScreen