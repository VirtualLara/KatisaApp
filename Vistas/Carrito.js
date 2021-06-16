import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, } from 'react-native';
import { Header, } from 'native-base';
import { Button, } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { size, map } from 'lodash';

import useAuth from '../hooks/UseAuth';
import { getProductCarritoApi, vaciarCarrito } from '../api/carrito';
import { getDireccionesApi } from '../api/direcciones';
import StatusBarMy from '../Componentes/StatusBarMy';
import CartList from '../Componentes/CartList';

export default function Carrito() {

    const navigation = useNavigation();
    const [cotizacion, setCotizacion] = useState(null);
    const [products, setProducts] = useState(null);
    const [reloadCotizacion, setReloadCotizacion] = useState(false);
    const { auth } = useAuth();

    const loadCotizacion = async () => {
        setCotizacion(null)
        const response = await getProductCarritoApi();
        setCotizacion(response);
    }

    const loadDirecciones = async () => {
        const response = await getDireccionesApi(auth)
        console.log(response)
    }

    useFocusEffect(
        useCallback(() => {
            loadCotizacion();
            loadDirecciones();
        }, [],
        )
    )

    useEffect(() => {
        if (reloadCotizacion) {
            loadCotizacion();
            setReloadCotizacion(false);
        }
    }, [reloadCotizacion])

    if (size(cotizacion) > 0) {
        return (
            <View style={{ display: 'flex', flex: 1 }} >

                <Header hasTabs style={styles.headerPos}>
                    <StatusBarMy backgroundColor="#29B6F6" />
                    <Icon
                        name="bars"
                        size={35}
                        color="#1F618D"
                        onPress={() => navigation.openDrawer()}
                    />
                    <Text> {"\n"} </Text>
                    <View styles={styles.header}>
                        <Text style={styles.textHeader}>
                            Carrito de Compras
                        </Text>
                    </View>
                    <Icon name="cart-plus" size={40} color="white" />
                </Header>

                <ScrollView>
                    <CartList
                        cotizacion={cotizacion}
                        products={products}
                        setProducts={setProducts}
                        setReloadCotizacion={setReloadCotizacion}
                    />
                </ScrollView>

                <View >
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 15 }} >
                        <Button mode='contained' onPress={() => { navigation.navigate('Catalogo') }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00bb2d', width: '90%' }} >
                            <Text style={{ fontSize: 20 }} > Añadir más artículos </Text>
                            <Icon active name="plus" style={{ color: 'white', fontSize: 20 }} />
                        </Button>
                    </View>
                </View>

            </View >
        )
    } else {
        return (
            <>
                <Header hasTabs style={styles.headerPos}>
                    <StatusBarMy backgroundColor="#29B6F6" />
                    <Icon
                        name="bars"
                        size={35}
                        color="#1F618D"
                        onPress={() => navigation.openDrawer()}
                    />
                    <Text> {"\n"} </Text>
                    <View styles={styles.header}>
                        <Text style={styles.textHeader}>
                            Carrito de Compras
                        </Text>
                    </View>
                    <Icon name="cart-plus" size={40} color="white" />
                </Header>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                    <Image source={require('../Recursos/Imagenes/carrito.png')} style={{ width: 200, height: 200 }} />
                    <Text> {'\n'} </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} > Carrito Vacio...   </Text>
                    <Text> {'\n'} </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                        <Button mode='contained' onPress={() => { navigation.navigate('Catalogo') }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00bb2d', width: '90%' }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }} > Agregar ARTICULOS   </Text>
                            <Icon active name="plus" style={{ color: 'white', fontSize: 20 }} />
                        </Button>
                    </View>
                </View>
            </>
        )

    }

}

const styles = StyleSheet.create({
    headerPos: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#29B6F6",
    },
    textHeader: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
});