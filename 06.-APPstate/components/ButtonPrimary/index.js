import CustomButton from "../CustomButton";
import { styles } from "./styles";

const ButtonPrimary = ({ children, onPress }) => {
    return (
        <CustomButton buttonStyle={styles.container} textStyle={styles.text} onPress={onPress}>
            {children}
        </CustomButton>
    );
}

export default ButtonPrimary;