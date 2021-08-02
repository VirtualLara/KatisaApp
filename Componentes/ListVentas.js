import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { map, } from 'lodash';

import VentaComponent from '../Componentes/VentaComponent';
import { getVentaIdApi } from '../api/ventas';

export default function ListVentas(props) {

    const { ventas, auth } = props;

    const idVentas = [];
    const haver = async () => {
        {
            map(ventas, (venta) => {
                idVentas.push(venta._id)
            })
        }
        const a = await getVentaIdApi(auth, idVentas[1]);
        //console.log(a);

        { console.log(idVentas) }
    }


    { haver() }

    return (
        < View style={styles.container} >

            {map(ventas, (venta) => (
                <VentaComponent key={venta._id} venta={venta} />
            ))
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 40
    }
})