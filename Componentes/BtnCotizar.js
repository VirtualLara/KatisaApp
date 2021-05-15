import React from 'react';
import { Text, Alert, View } from 'react-native';
import { Button } from 'native-base';

export default function BtnCotizar(props) {

    const { product, cantidad } = props;

    const agregarProductoCotizar = () => {
        Alert.alert('agregando')
    }


    return (
        <View style={{ width: '90%', height: 100, justifyContent: 'center', alignItems: 'center' }} >

            <View style={{ width: '100%', height: '100%' }}>
                <Button success
                    style={{ width: "100%", height: "65%", alignItems: 'center', justifyContent: 'center' }}
                    onPress={agregarProductoCotizar}
                >
                    <Text style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: '#fff',
                    }}
                    >
                        Cotizar
            </Text>

                </Button>
            </View>
        </View>
    )
}