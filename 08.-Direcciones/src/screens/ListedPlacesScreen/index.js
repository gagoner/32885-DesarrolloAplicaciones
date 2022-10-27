import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { PlaceItem } from '../../components'
import { useEffect } from 'react'
import { loadPlaces } from '../../store/place.slice'

const ListedPlacesScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const places = useSelector(state => state.place.places)

    const onSelectedPlace = place => navigation.navigate('PlaceDetail', { placeId: place.id })

    const renderItem = ({ item }) => (
        <PlaceItem {...item} onSelect={() => onSelectedPlace(item)} />
    )

    const ListEmptyComponent = () => (
        <View style={styles.container}>
            <Text style={styles.text}>No location found.</Text>
            <Text style={styles.text}>Save one!</Text>
        </View>
    )

    useEffect(() => {
        dispatch(loadPlaces())
    }, [])

    return (
        <FlatList
            contentContainerStyle={styles.contentContainer}
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
        />
    )
}

export default ListedPlacesScreen