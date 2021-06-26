import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { API_URL } from '../utils/constants';

export default function VentaComponent(props) {

    const { venta } = props;

    console.log(venta)

    return (
        <View style={styles.container} >
            <View style={styles.containerImages} >
                <Image style={styles.image} source={{ uri: `${API_URL}${venta.product.foto.url}` }} />
            </View>
            <View style={styles.info} >
                <Text style={styles.name} >{venta.product.clave} | {venta.product.descripcion} </Text>
                <Text style={styles.label} > Cantidad: <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }} >{venta.cantidad}</Text>  </Text>
                <Text style={styles.label} > Total Pagado: <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }} >${venta.totalproducto}.00</Text> </Text>
                <Text style={styles.label} > Fecha: {(venta.published_at).substr(8, 2)}-
                    {(venta.published_at).substr(5, 2)}-
                    {(venta.published_at).substr(0, 4)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: -20,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    containerImages: {
        width: '30%',
        height: 120,
        padding: 10
    },
    image: {
        height: '100%',
        resizeMode: 'contain'
    },
    info: {
        width: '70%',
        justifyContent: 'center'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    label: {
        fontSize: 16,
    },
})