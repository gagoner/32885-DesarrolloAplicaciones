import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryBg, primaryText } from '../constants/colors';
import CartNavigator from './cart';
import MainNavigator from './main';
import OrdersNavigator from './orders';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const Icon = ({name, focused}) => <Ionicons name={focused ? name : `${name}-outline`} color={focused ? primaryText : '#d1d1d1'} size={20} />

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                tabBarActiveTintColor: primaryText,
                tabBarInactiveTintColor: '#d1d1d1',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 18
                },
                tabBarStyle: {
                    backgroundColor: primaryBg,
                    padding: 10,
                    flex: 0.08,
                }
            }}
        >
            <BottomTabs.Screen
                name='ShopTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ focused }) => <Icon name='home' focused={focused} />
                }}
            />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => <Icon name='cart' focused={focused} />
                }}
            />
            <BottomTabs.Screen
                name='OrdersTab'
                component={OrdersNavigator}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ focused }) => <Icon name='file-tray-full' focused={focused} />
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default TabNavigator;