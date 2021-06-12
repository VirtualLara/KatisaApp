import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Left, Body, Right } from 'native-base';
import { Button } from 'react-native-paper';


export default function DireccionCard(props) {

    const { titulo, nombreapellido, callenumero, colonia, codigopostal, ciudad, localidadmunicipio, estado, telefono, celular, referenciasdomicilio, } = props;

    return (
        <View>
            <Card>

                <Text>{titulo}</Text>
                <Text note>{nombreapellido}</Text>
                <Text note>{callenumero}</Text>
                <Text note>{colonia}</Text>
                <Text note>{codigopostal}</Text>
                <Text note>{ciudad}</Text>
                <Text note>{localidadmunicipio}</Text>
                <Text note>{estado}</Text>
                <Text note>{telefono}</Text>
                <Text note>{celular}</Text>
                <Text note>{referenciasdomicilio}</Text>
                {/* <Text>titulo</Text>
                <Text note>nombreapellido</Text>
                <Text note>callenumero</Text>
                <Text note>colonia</Text>
                <Text note>codigopostal</Text>
                <Text note>ciudad</Text>
                <Text note>localidadmunicipio</Text>
                <Text note>estado</Text>
                <Text note>telefono</Text>
                <Text note>celular</Text>
                <Text note>referenciasdomicilio</Text> */}



                <CardItem style={{ width: '100%', flexDirection: 'row' }} >
                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                        <Button mode='contained' style={{ width: '90%' }} >
                            <Text>12 Likes</Text>
                        </Button>
                    </View>

                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                        <Button mode='contained' style={{ width: '90%' }} >
                            <Text>4 Comments</Text>
                        </Button>
                    </View>
                </CardItem>
            </Card>
        </View>
    )
}
