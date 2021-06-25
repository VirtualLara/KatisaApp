import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { map } from 'lodash';

import VentaComponent from '../Componentes/VentaComponent';

export default function ListVentas(props) {

    const { ventas } = props;

    return (
        <View style={styles.container} >
            {map(ventas, (venta) => (
                <VentaComponent key={venta._id} venta={venta} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 40
    }
})