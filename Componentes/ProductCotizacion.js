import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, } from 'native-base';
import { TextInput } from "react-native-paper";

import { API_URL } from '../utils/constants';

import { deleteProductCotizacionApi, incrementQuantityApi, decrementQuantityApi } from '../api/cotizacion';

export default function ProductCotizacion(props) {

    const { product, setReloadCotizacion } = props;


    const deleteProduct = async () => {
        const response = await deleteProductCotizacionApi(product._id)
        if (response) setReloadCotizacion(true);
    }

    const IncrementQuantity = async () => {
        const response = await incrementQuantityApi(product._id)
        if (response !== null) setReloadCotizacion(true);
    }

    const decrementQuantity = async () => {
        const response = await decrementQuantityApi(product._id);
        if (response) setReloadCotizacion(true)
    }

    return (
        <View>
            <Card style={styles.container}>
                <View style={styles.imgContent} >
                    <Image source={{ uri: `${API_URL}${product.foto.url}` }} style={styles.img} />
                </View>

                <View style={styles.dataContent} >

                    <View style={{ height: '50%' }} >
                        <Text style={styles.title} >Clave: | Descripción:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.text} >{product.clave}</Text>
                            <Text style={{ fontWeight: 'bold', color: 'black' }} > / </Text>
                            <Text style={styles.text} >{product.descripcion}</Text>
                        </View>
                        <Text style={styles.text} >{product.watts}W  {product.temperatura}K</Text>
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

        </View>
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
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
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
        height: 150,
        flexDirection: 'row',
        backgroundColor: '#F4F6F6',
    },
    contentBtnBajar: {
        width: '20%',
        height: '80%',
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
        height: '80%',
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
        height: '80%',
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
        height: 55,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#D5D8DC'
    },
})