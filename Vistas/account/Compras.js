import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import useAuth from '../../hooks/UseAuth';
import { size } from 'lodash';

import { getVentasApi } from '../../api/ventas';
import ListVentas from '../../Componentes/ListVentas';

export default function Compras() {

    const [ventas, setVentas] = useState(null);
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getVentasApi(auth);
                setVentas(response)
            })()
        }, [])
    )

    if (ventas !== null) {
        return (
            <ScrollView style={styles.container} >
                <Text style={styles.title} >Compras realizadas: </Text>

                {!ventas ? (
                    <ActivityIndicator size='large' style={styles.loading} />
                ) : size(ventas) === 0 ? (
                    <Text style={styles.noVentas} > Aun no tienes compras. </Text>
                ) : (
                    <ListVentas ventas={ventas} />
                )}
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
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loading: {
        marginTop: 20,
    },
    noVentas: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 20
    }
});
