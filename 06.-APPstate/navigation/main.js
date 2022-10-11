import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Categories, ProductDetail, Products } from '../screens';
import { primaryBg, primaryText, secondaryBg, secondaryText } from '../constants/colors';
import { isIOS } from '../constants/utils';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? secondaryBg : primaryBg,
                },
                headerTintColor: isIOS ? secondaryText : primaryText,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'AnekRegular',
                }
            }}
        >
            <Stack.Screen
                name='Categories'
                component={Categories}
                options={{ title: 'Categorías'}}
            />
            <Stack.Screen
                name='Products'
                component={Products}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen
                name='ProductDetail'
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    );
}

export default MainNavigator;