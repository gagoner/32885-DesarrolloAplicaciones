import { useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import { CustomInput, SecondaryButton } from '../../components'
import { primaryText } from '../../constants/colors'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '../../store/auth.slice'

const AuthScreen = () => {

    const dispatch = useDispatch()

    const authState = useSelector(state => state.auth)

    const [isLogin, setIsLogin] = useState(true)

    const [email, setEmail] = useState('new@test.com')
    const [password, setPassword] = useState('123456')

    const title = isLogin ? 'Login' : 'Register'
    const buttonTitle = !isLogin ? 'Sign up' : 'Login'
    const message = isLogin ? 'You don`t have an account?' : 'Already have an account?'
    const messageButton = isLogin ? 'Sign up' : 'Login'

    const handleChangeAuth = () => setIsLogin(!isLogin)

    const handleSumbit = () => dispatch(
        isLogin
            ? signIn(email, password)
            : signUp(email, password)
    )

    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.keyboard}
        >
            <View style={styles.formContainer}>
                <Text style={styles.title}>{title}</Text>
                <CustomInput
                    labelColor={primaryText}
                    label='Email'
                    helper={''}
                    value={email}
                    placeholder='test@test.com'
                    onChangeText={setEmail}
                    textContentType='emailAddress'
                    onEndEditing={() => { }}
                />
                <CustomInput
                    labelColor={primaryText}
                    label='Password'
                    helper={''}
                    value={password}
                    placeholder='********'
                    onChangeText={setPassword}
                    textContentType='password'
                    onEndEditing={() => { }}
                />
                <View style={styles.buttonContainer}>
                    <SecondaryButton onPress={handleSumbit} title={buttonTitle} />
                </View>
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>{message}</Text>
                <TouchableOpacity style={styles.messageButtonContainer} onPress={handleChangeAuth}>
                    <Text style={styles.messageButton}>{messageButton}</Text>
                </TouchableOpacity>
            </View>
            {
                !!authState.message && <Text style={styles.error}>{authState.message}</Text>
            }
        </KeyboardAvoidingView>
    )
}

export default AuthScreen