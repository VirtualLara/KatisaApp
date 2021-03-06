import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Card, } from 'native-base';

import { API_URL } from '../utils/constants';

export default function Articulo(props) {

    const { imagen, nombre, clave, watts, temperatura, precio, pagar } = props;

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Card style={styles.container} >
            <View style={styles.imgContent} >
                <Image source={{ uri: `${API_URL}${imagen}` }} style={styles.img} />
            </View>

            <View style={styles.dataContent} >
                <Text style={styles.title} >Clave:</Text>
                <Text style={styles.text} >{clave}</Text>
                <Text style={styles.title} >Descripción:</Text>
                <Text style={styles.text} >{nombre}</Text>
                <Text style={styles.text} >{watts}W  {temperatura}K
                    <Text>  </Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>
                        {pagar === true ? currencyFormat(precio) : 'Por pedido'}
                    </Text>
                </Text>
            </View>
        </Card>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: '#F4F6F6',
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
        fontSize: 18,
        backgroundColor: '#D6EAF8'
    },
    text: {
        fontSize: 15,
    }
})
