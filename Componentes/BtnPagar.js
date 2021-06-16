import React from 'react';
import { Text, Alert, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { addProductCarrito } from '../api/carrito';

export default function BtnPagar(props) {

    const { product, cantidad } = props;
    const navigation = useNavigation();

    const agregarProductoCarrito = async () => {

        if (cantidad > 0) {
            const response = await addProductCarrito(product._id, cantidad);
            if (response) {
                Alert.alert('Agregado al carrito...')
                navigation.goBack()
            } else {
                Alert.alert('Error... ')
            }
        } else {
            Alert.alert('La cantidad debe ser mayor a 0.')
        }

    }


    return (
        <View style={styles.content} >
            <View style={styles.contentBtn}>
                <Button success style={styles.btn} onPress={agregarProductoCarrito}>
                    <Text style={styles.textBtn}>
                        AGREGAR A CARRITO
                    </Text>

                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '90%',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentBtn: {
        width: '100%',
        height: '70%'
    },
    btn: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: '#fff',
    },
})