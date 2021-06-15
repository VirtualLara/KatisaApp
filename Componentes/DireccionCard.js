import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Card, CardItem } from 'native-base';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { deleteDireccionApi } from '../api/direcciones';


export default function DireccionCard(props) {

    const { a_auth, a_id, titulo, nombreapellido, callenumero, colonia, codigopostal, ciudad,
        localidadmunicipio, estado, telefono, celular, referenciasdomicilio, setReloadDirecciones } = props;
    const navigation = useNavigation();

    const deleteDireccionAlert = () => {
        Alert.alert(
            `Esta a punto de eliminar la direccion: ${titulo}`,
            '¿Desea continuar?',
            [
                {
                    text: 'NO'
                },
                {
                    text: 'SI',
                    onPress: () => deleteDireccion(a_id)
                },
            ],
            { cancelable: false }
        )
    }

    const ActualizarDireccion = (idDireccion) => {
        navigation.navigate('AgregarDireccion', { idDireccion })
    }

    const deleteDireccion = async (idDireccion) => {
        try {
            await deleteDireccionApi(a_auth, idDireccion),
                setReloadDirecciones(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Card>
                <CardItem style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5, color: '#2E4053' }} >{titulo}</Text>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >Recibe: </Text>
                        <Text note>{nombreapellido}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >Dirección: </Text>
                        <Text note>{callenumero}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >Col: </Text>
                        <Text note>{colonia} </Text>
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} > C.P: </Text>
                        <Text note>{codigopostal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >ciudad: </Text>
                        <Text note>{ciudad}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >Mpio: </Text>
                        <Text note>{localidadmunicipio} </Text>
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} > Edo: </Text>
                        <Text note>{estado}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} >Tel: </Text>
                        <Text note>{telefono}</Text>
                        <Text style={{ fontWeight: 'bold', color: '#2E4053' }} > Cel: </Text>
                        <Text note>{celular}</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', color: '#2E4053', textAlign: 'justify' }} > Referencias: </Text>
                    <Text note>{referenciasdomicilio}</Text>
                </CardItem>

                <CardItem style={{ width: '100%', flexDirection: 'row' }} >
                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                        <Button mode='contained' style={{ width: '90%', backgroundColor: '#29B6F6' }} onPress={() => { ActualizarDireccion(a_id) }} >
                            <Text>Actualizar</Text>
                        </Button>
                    </View>

                    <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                        <Button mode='contained' style={{ width: '90%', backgroundColor: '#29B6F6' }} onPress={() => { deleteDireccionAlert() }} >
                            <Text>Eliminar</Text>
                        </Button>
                    </View>
                </CardItem>
            </Card>
        </View>
    )
}
