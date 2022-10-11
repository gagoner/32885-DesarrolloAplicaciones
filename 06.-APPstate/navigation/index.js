import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import TabNavigator from "./tab";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="default"
            />
            <TabNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;