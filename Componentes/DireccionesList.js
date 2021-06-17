import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { map } from 'lodash';

export default function DireccionesList(props) {

    const { direcciones, setDireccionSeleccionada, direccionSeleccionada } = props;

    useEffect(() => {
        //seleccionar una direccion
        direcciones && setDireccionSeleccionada(direcciones[0])
    }, [direcciones])


    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'darkgreen' }} > Mis direcciones... </Text>
            {map(direcciones, (direccion) => (
                <TouchableWithoutFeedback key={direccion._id} onPress={() => setDireccionSeleccionada(direccion)} >
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
                        <Text>{direccion.referenciasdomicilio}.</Text>
                    </View>

                </TouchableWithoutFeedback>
            ))}
        </View>
    )
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
        borderColor: '#29B6F6',
        borderWidth: 3,
        backgroundColor: '#0098D330',
    }
})