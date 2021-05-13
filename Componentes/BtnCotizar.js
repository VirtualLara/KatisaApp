import React from 'react';
import { Text, Alert } from 'react-native';
import { Button } from 'native-base';

export default function BtnCotizar(props) {

    const { product, cantidad } = props;

    const agregarProductoCotizar = () => {
        Alert.alert('agregando' + product.clave)
    }


    return (
        <Button rounded success
            style={{ width: 110, height: '85%' }}
            onPress={agregarProductoCotizar}
        >
            <Text style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                color: '#fff',
            }}
            >
                Cotizar {cantidad}
            </Text>
        </Button>
    )
}