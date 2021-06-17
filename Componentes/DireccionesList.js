import React from 'react';
import { View, Text } from 'react-native';
import { map } from 'lodash';

export default function DireccionesList(props) {

    const { direcciones } = props;

    console.log(direcciones);

    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'darkgreen' }} > Mis direcciones... </Text>
            {map(direcciones, (direccion) => (
                <View key={direccion._id} style={{ padding: 5, margin: 3, borderColor: 'gray', borderWidth: 2, borderRadius: 10, }} >
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
            ))}
        </View>
    )
}
