import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { map } from 'lodash';

import ProductCarrito from './ProductCarrito';

import { getProductApi } from '../api/products';


export default function CartList(props) {

    const { cotizacion, products, setProducts, setReloadCotizacion } = props;

    useEffect(() => {
        (async () => {
            const productTemp = [];

            for await (const product of cotizacion) {
                const response = await getProductApi(product.idProduct);
                response.quantity = product.quantity;
                productTemp.push(response);
            }

            setProducts(productTemp);
        })()
    }, [cotizacion])



    return (
        <View>
            {map(products, (product) =>
                <ProductCarrito
                    product={product}
                    setReloadCotizacion={setReloadCotizacion}
                    key={product._id}
                />
            )}
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
        height: 130,
        flexDirection: 'row',
        backgroundColor: '#F4F6F6',
    },
    contentBtnBajar: {
        width: '15%',
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