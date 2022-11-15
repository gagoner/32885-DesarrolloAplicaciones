import { useState } from 'react'
import { Alert, Image, Modal, ScrollView, Text, View } from 'react-native'
import { CustomInput, PrimaryButton, SecondaryButton } from '../../components'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../store/product.slice'

const AddProductScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [showForm, setShowForm] = useState(true)

    const [name, setName] = useState('Product name')
    const [price, setPrice] = useState('100000')
    const [amountAvailable, setAmounAvailable] = useState('1')
    const [description, setDescription] = useState('Product description')
    const [imageUri, setImageUri] = useState('')

    const formCompleted = () => !!(name && price && amountAvailable && description && imageUri)

    const verifyPermissions = async () => {

        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {

            Alert.alert(
                'Insufficient permissions',
                'Requires camera permission to take a picture',
                [{ text: 'Ok' }]
            )

            return false
        }

        return true
    }

    const handleTakePicture = async () => {

        const isCameraOk = await verifyPermissions()

        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        setImageUri(image.uri)

    }

    const goHome = () => navigation.navigate('Home')

    const handleSumbit = () => {

        if (!formCompleted()) {
            Alert.alert(
                'An error has occurred',
                'Form must be complete to add the product',
                [{ text: 'Ok' }]
            )
            return
        }

        dispatch(
            createProduct(name, price, amountAvailable, description, imageUri)
        )

        setShowForm(false)

    }

    return (
        <>
            {
                showForm
                    ?
                    <ScrollView style={styles.container}>
                        <Text style={styles.title}>Add product</Text>
                        <CustomInput
                            labelColor='black'
                            label='Product name'
                            helper={''}
                            value={name}
                            placeholder='Enter product name'
                            onChangeText={setName}
                            onEndEditing={() => { }}
                        />
                        <CustomInput
                            labelColor='black'
                            label='Product price'
                            helper={''}
                            value={price}
                            placeholder='10000'
                            onChangeText={setPrice}
                            onEndEditing={() => { }}
                            keyboardType='numeric'
                        />
                        <CustomInput
                            labelColor='black'
                            label='Product quantity'
                            helper={''}
                            value={amountAvailable}
                            placeholder='10000'
                            onChangeText={setAmounAvailable}
                            onEndEditing={() => { }}
                            keyboardType='numeric'
                        />
                        <CustomInput
                            labelColor='black'
                            label='Product description'
                            helper={''}
                            value={description}
                            placeholder='Product description'
                            onChangeText={setDescription}
                            onEndEditing={() => { }}
                        />
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Product image:</Text>
                            <View style={styles.imageContainer}>
                                {
                                    imageUri
                                        ?
                                        <Image source={{ uri: imageUri }} style={styles.image} />
                                        :
                                        <Text style={styles.text}>No image selected</Text>
                                }
                            </View>
                            <SecondaryButton title='Image capture' onPress={handleTakePicture} />
                        </View>
                        <View style={styles.sumbitButtonContainer}>
                            <PrimaryButton title='Add product' onPress={handleSumbit} />
                        </View>
                    </ScrollView>
                    :
                    <Modal
                        animationType='slide'
                        onRequestClose={goHome}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Product added successfully!</Text>
                                <Text style={styles.modalText}>You will be able to find the product under newly added on the home page and it will also appear in searches.</Text>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton onPress={goHome} title='Home' />
                                </View>
                            </View>
                        </View>
                    </Modal>
            }
        </>
    )
}

export default AddProductScreen