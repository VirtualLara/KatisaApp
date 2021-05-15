import React from 'react';
import { Text, Alert, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export default function BtnCotizar(props) {

    const { product, cantidad } = props;

    const agregarProductoCotizar = () => {
        Alert.alert('agregando: ' + cantidad + ' piezas de: ' + product._id + product.descripcion)
    }


    return (
        <View style={styles.content} >
            <View style={styles.contentBtn}>
                <Button success style={styles.btn} onPress={agregarProductoCotizar}>
                    <Text style={styles.textBtn}>
                        Cotizar
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