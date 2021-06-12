import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { size, map } from 'lodash';

import { getDireccionesApi } from '../../api/direcciones';
import useAuth from '../../hooks/UseAuth';
import DireccionCard from '../../Componentes/DireccionCard';

export default function Direcciones() {

    const [direcciones, setDirecciones] = useState(null)
    const { auth } = useAuth();
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getDireccionesApi(auth);
                setDirecciones(response)
            })()
        }, [])
    )

    return (

        <ScrollView style={styles.container} >

            <Text style={styles.title} >Mi lista de direcciones</Text>

            <TouchableOpacity onPress={() => { navigation.navigate('AgregarDireccion') }} >
                <View style={styles.addDireccion} >
                    <Text style={styles.addDireccionTexto} >Añadir nueva dirección</Text>
                    <IconButton icon='arrow-right' color='#000' size={19} />
                </View>
            </TouchableOpacity>

            {!direcciones ? (
                <ActivityIndicator size='large' style={styles.loading} />
            ) : size(direcciones) === 0 ? (
                <Text style={styles.primerdireccionText} > Crea tu primera dirección... </Text>
            ) : (
                <>
                    <Text style={styles.primerdireccionText} > Mis direcciones... </Text>
                    {map(direcciones, (direccion) => (
                        <DireccionCard
                            key={direccion._id}
                            titulo={direccion.titulo}
                            nombreapellido={direccion.nombreapellido}
                            callenumero={direccion.callenumero}
                            colonia={direccion.colonia}
                            codigopostal={direccion.codigopostal}
                            ciudad={direccion.ciudad}
                            localidadmunicipio={direccion.localidadmunicipio}
                            estado={direccion.estado}
                            telefono={direccion.telefono}
                            celular={direccion.celular}
                            referenciasdomicilio={direccion.referenciasdomicilio}
                        />
                    ))}
                </>
            )}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    title: {
        fontSize: 20,
    },
    addDireccion: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addDireccionTexto: {
        fontSize: 16
    },
    loading: {
        marginTop: 20
    },
    primerdireccionText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
})