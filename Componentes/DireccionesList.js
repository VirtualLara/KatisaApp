import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
import { Button, } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { map, size } from 'lodash';

import { colorMarca } from '../utils/colores';

export default function DireccionesList(props) {

    const { direcciones, setDireccionSeleccionada, direccionSeleccionada } = props;
    const navigation = useNavigation();

    useEffect(() => {
        //seleccionar una direccion
        direcciones && setDireccionSeleccionada(direcciones[0])
    }, [direcciones])

    if (size(direcciones) > 0) {
        return (
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'darkgreen' }} > Mis direcciones... </Text>
                {map(direcciones, (direccion) => (
                    <TouchableWithoutFeedback key={direccion._id}
                        onPress={() => setDireccionSeleccionada(direccion)}
                    >
                        <View
                            style={[
                                styles.content,
                                direccion._id === direccionSeleccionada?._id && styles.seleccionado
                            ]} >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'darkgreen' }} >{direccion.titulo}</Text>
                            <Text>
                                <Text style={{ fontWeight: 'bold' }} >Domicilio: </Text>
                                {direccion.callenumero}.
                            </Text>
                            <Text>
                                <Text style={{ fontWeight: 'bold' }} >Colonia: </Text>
                                {direccion.colonia},
                                <Text>  </Text>
                                <Text style={{ fontWeight: 'bold' }} >C.P.: </Text>
                                {direccion.codigopostal},
                                <Text>  </Text>
                                {direccion.ciudad}.</Text>
                            <Text>
                                {direccion.localidadmunicipio},
                                <Text>  </Text>
                                {direccion.estado}.
                            </Text>
                            <Text>
                                <Text style={{ fontWeight: 'bold' }} >Tel.: </Text>
                                {direccion.telefono},
                                <Text style={{ fontWeight: 'bold' }} >Cel.: </Text>
                                {direccion.celular}.
                            </Text>
                            <View style={{ flexDirection: 'row', }} >
                                <Text style={{ fontWeight: 'bold' }} >Ref.: </Text>
                                <View style={{ width: '90%' }} >
                                    <Text>{direccion.referenciasdomicilio}.</Text>
                                </View>
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                ))}
            </View>
        )
    } else {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'darkgreen' }} > Dirección requerida. </Text>

                <View style={{ width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }} >
                        <Button mode='contained' onPress={() => { navigation.navigate('AccountStack', { screen: 'Direcciones' }) }}
                            style={{ alignItems: 'center', backgroundColor: '#00bb2d', width: '90%' }} >
                            <Text style={{ fontSize: 20 }} > Crear dirección  </Text>
                            <Icon active name="plus" style={{ color: 'white', fontSize: 20 }} />
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 5,
        paddingHorizontal: 10,
        margin: 3,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
    },
    seleccionado: {
        borderColor: colorMarca,
        borderWidth: 3,
        backgroundColor: '#0098D330',
    }
})