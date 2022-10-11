import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CustomButton = ({ children, buttonStyle, textStyle, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, { ...buttonStyle }]} onPress={onPress}>
            <Text style={[styles.text, { ...textStyle }]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton;