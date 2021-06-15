import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { size, map } from 'lodash';

import { getDireccionesApi } from '../../api/direcciones';
import useAuth from '../../hooks/UseAuth';
import DireccionCard from '../../Componentes/DireccionCard';
import { render } from 'react-dom';

export default function Direcciones() {

    const [direcciones, setDirecciones] = useState(null)
    const { auth } = useAuth();
    const navigation = useNavigation();
    const [reloadDirecciones, setReloadDirecciones] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setDirecciones(null);
            (async () => {
                const response = await getDireccionesApi(auth);
                setDirecciones(response)
                setReloadDirecciones(false);
            })()
        }, [reloadDirecciones])
    )

    if (direcciones) {
        return (

            <ScrollView style={styles.container} >

                <Text style={styles.title} >Mi lista de direcciones</Text>

                <TouchableOpacity onPress={() => { navigation.navigate('AgregarDireccion') }} >
                    <View style={styles.addDireccion} >
                        <Text style={styles.addDireccionTexto} >Añadir nueva dirección</Text>
                        <IconButton icon='arrow-right' color='white' fontWeight='bold' size={20} />
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
                                a_id={direccion._id}
                                a_auth={auth}
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
                                setReloadDirecciones={setReloadDirecciones}
                            />
                        ))}
                    </>
                )}

                <View>
                    <Text> {'\n'} </Text>
                </View>
            </ScrollView>

        )
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='#29b6f6' size={75} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo información...</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
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
        backgroundColor: '#00bb2d'
    },
    addDireccionTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    loading: {
        marginTop: 20
    },
    primerdireccionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
})