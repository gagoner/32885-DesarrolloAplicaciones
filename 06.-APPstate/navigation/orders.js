import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Orders } from '../screens';
import { primaryBg, primaryText, secondaryBg, secondaryText } from '../constants/colors';
import { isIOS } from '../constants/utils';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
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
                name='Orders'
                component={Orders}
                options={{ title: 'Ordenes' }}
            />
        </Stack.Navigator>
    );
}

export default OrdersNavigator;