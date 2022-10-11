import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart } from '../screens';
import { primaryBg, primaryText, secondaryBg, secondaryText } from '../constants/colors';
import { isIOS } from '../constants/utils';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
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
                name='Cart'
                component={Cart}
                options={{ title: 'Carrito' }}
            />
        </Stack.Navigator>
    );
}

export default CartNavigator;