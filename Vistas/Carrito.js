import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, } from 'react-native';
import { Header, } from 'native-base';
import { Button, Checkbox } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { size, map } from 'lodash';

import useAuth from '../hooks/UseAuth';
import { getProductCarritoApi, vaciarCarrito } from '../api/carrito';
import { getDireccionesApi } from '../api/direcciones';
import StatusBarMy from '../Componentes/StatusBarMy';
import CartList from '../Componentes/CartList';
import DireccionesList from '../Componentes/DireccionesList';

export default function Carrito() {

    const navigation = useNavigation();
    const [carrito, setCarrito] = useState(null);
    const [products, setProducts] = useState(null);
    const [reloadCarrito, setReloadCarrito] = useState(false);
    const [direcciones, setDirecciones] = useState(null);
    const [checkedItems, setCheckedItems] = useState(true);
    const [checked, setChecked] = useState(false);
    const [checkCard, setCheckCard] = useState(false);
    const { auth } = useAuth();

    const loadCarrito = async () => {
        setCarrito(null)
        const response = await getProductCarritoApi();
        setCarrito(response);
    }

    const loadDirecciones = async () => {
        const response = await getDireccionesApi(auth)
        setDirecciones(response);
    }

    useFocusEffect(
        useCallback(() => {
            loadCarrito();
            loadDirecciones();
        }, [],
        )
    )

    useEffect(() => {
        if (reloadCarrito) {
            loadCarrito();
            setReloadCarrito(false);
        }
    }, [reloadCarrito])

    if (size(carrito) > 0) {
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

                <View >
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }} >
                        <Button mode='contained' onPress={() => { navigation.navigate('Catalogo') }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00bb2d', width: '90%' }} >
                            <Text style={{ fontSize: 20 }} > Añadir más artículos </Text>
                            <Icon active name="plus" style={{ color: 'white', fontSize: 20 }} />
                        </Button>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}  >
                        1 - Mis compras:
                        <Text>  </Text>
                        <Icon name="shopping-basket" size={20} color="black" />
                    </Text>
                    <Checkbox
                        status={checkedItems ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckedItems(!checkedItems);
                        }}
                        color={'#29b6f6'}
                        fontSize={50}
                    />
                </View>

                {checkedItems ?
                    <ScrollView>
                        <CartList
                            carrito={carrito}
                            products={products}
                            setProducts={setProducts}
                            setReloadCarrito={setReloadCarrito}
                        />
                    </ScrollView>
                    :
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'green' }} >
                            Estas a 2 pasos de terminar...
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', color: 'green' }} >
                            Total de carrito:
                            <Text>  </Text>
                            <Icon name="cart-plus" size={20} color="green" />
                            <Text>  </Text>
                            <Text style={{ color: 'red', fontSize: 18 }} >$0,000.00</Text>
                        </Text>
                    </View>
                }

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}  >
                        2 - Dirección de envío:
                        <Text>  </Text>
                        <Icon name="map" size={20} color="black" />
                    </Text>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                            setCheckedItems(!checkedItems);
                        }}
                        color={'#29b6f6'}
                        fontSize={50}
                    />
                </View>

                {checked ?
                    <ScrollView>
                        <DireccionesList
                            direcciones={direcciones}
                        />
                    </ScrollView>
                    :
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', color: 'green' }} >
                        Habilita y selecciona una dirección...
                    </Text>
                }

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}  >
                        3 - Datos de tarjeta:
                        <Text>  </Text>
                        <Icon name="credit-card" size={20} color="black" />
                    </Text>
                    <Checkbox
                        status={checkCard ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setCheckCard(!checkCard);
                        }}
                        color={'#29b6f6'}
                        fontSize={50}
                    />
                </View>

                {checkCard ?
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center' }} > Mi tarjeta...</Text>
                    </View>
                    :
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', color: 'green' }} >
                        Habilita e ingresa una tarjeta...
                    </Text>
                }

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