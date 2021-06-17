import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, } from 'native-base';
import { TextInput } from "react-native-paper";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";

import { API_URL } from '../utils/constants';

import { deleteProductCarritoApi, incrementQuantityApi, decrementQuantityApi } from '../api/carrito';

export default function ProductCarrito(props) {

    const { product, setReloadCarrito } = props;

    const deleteProduct = async () => {
        const response = await deleteProductCarritoApi(product._id)
        if (response) setReloadCarrito(true);
    }

    const IncrementQuantity = async () => {
        const response = await incrementQuantityApi(product._id)
        if (response !== null) setReloadCarrito(true);
    }

    const decrementQuantity = async () => {
        const response = await decrementQuantityApi(product._id);
        if (response) setReloadCarrito(true)
    }

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <View>
            <Card style={styles.container}>
                <View style={styles.imgContent} >
                    <ZoomImage
                        resizeMode={'cover'}
                        source={{ uri: `${API_URL}${product.foto.url}` }}
                        imgStyle={{
                            height: '100%',
                            width: '100%'
                        }}
                        style={styles.img}
                        duration={2000}
                        enableScaling={false}
                        easingFunc={Easing.ease}
                    />
                    {/* <Image source={{ uri: `${API_URL}${product.foto.url}` }} style={styles.img} /> */}
                </View>

                <View style={styles.dataContent} >

                    <View style={{ height: '50%' }} >
                        <Text style={styles.title} >Clave: | Descripción:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text} >{product.clave}</Text>
                            <Text style={{ fontWeight: 'bold', color: 'black' }} > / </Text>
                            <Text style={styles.text} >{product.descripcion}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Unitario: </Text>
                            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }} >{currencyFormat(product.precio)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Importe: </Text>
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }} >{currencyFormat(product.precio * product.quantity)}</Text>
                        </View>
                    </View>

                    <View style={{ height: '50%', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }} >

                        <View style={styles.contentBtnBajar}>
                            <TouchableOpacity style={{ width: '100%' }} onPress={decrementQuantity} >
                                <Text style={styles.btnSubir} > - </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentTexinput}>
                            <TextInput
                                style={styles.textInput}
                                value={product.quantity.toString()}
                                disabled={true}
                            />
                        </View>

                        <View style={styles.contentBtnSubir}>
                            <TouchableOpacity style={{ width: '100%' }} onPress={IncrementQuantity} >
                                <Text style={styles.btnSubir} > + </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentBtnEliminar}>
                            <TouchableOpacity style={{ width: '100%' }} onPress={deleteProduct} >
                                <Text style={styles.btnEliminar} > X </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>

        </View >
    )
}

const styles = StyleSheet.create({
    titleHead: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    },
    imgContent: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: '95%',
        height: '95%',
        resizeMode: 'contain',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'gray'
    },
    dataContent: {
        width: '60%',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#D6EAF8'
    },
    text: {
        fontSize: 16,
    },
    container: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        backgroundColor: '#F4F6F6',
    },
    contentBtnBajar: {
        width: '20%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7FB3D5'
    },
    btnBajar: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    },
    contentBtnSubir: {
        width: '20%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7FB3D5'
    },
    btnSubir: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    },
    contentBtnEliminar: {
        width: '20%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A93226'
    },
    btnEliminar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    contentTexinput: {
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    textInput: {
        width: '100%',
        height: 50,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#D5D8DC'
    },
})