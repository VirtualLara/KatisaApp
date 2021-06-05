import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Header } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { size } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import { getProductCotizacionApi } from '../api/cotizacion';

import CotizacionList from '../Componentes/CotizacionList';
import { render } from 'react-dom';

export default function Cotizacion() {

    const navigation = useNavigation();
    const [cotizacion, setCotizacion] = useState(null);
    const [products, setProducts] = useState(null);
    const [reloadCotizacion, setReloadCotizacion] = useState(false);

    const loadCotizacion = async () => {
        const response = await getProductCotizacionApi();
        setCotizacion(response);
    }

    useFocusEffect(
        useCallback(() => {
            loadCotizacion();
        }, [],
        )
    )

    useEffect(() => {
        if (reloadCotizacion) {
            loadCotizacion();
            setReloadCotizacion(false);
        }
    }, [reloadCotizacion])

    if (reloadCotizacion) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='#29b6f6' size={75} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Actualizando...</Text>
            </View>
        )
    } else {

        //dfsdfsdflsdflsdflsdf{sdlf{sdf}}

        if (size(cotizacion) > 0) {
            return (
                <View>

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
                                Mi cotización <Icon name="list-alt" size={40} color="white" />
                            </Text>
                        </View>
                    </Header>

                    <ScrollView>
                        <CotizacionList
                            cotizacion={cotizacion}
                            products={products}
                            setProducts={setProducts}
                            setReloadCotizacion={setReloadCotizacion}
                        />
                    </ScrollView>

                </View>
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
                                Mi cotización <Icon name="list-alt" size={40} color="white" />
                            </Text>
                        </View>
                    </Header>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                        <Image source={require('../Recursos/Imagenes/logored.png')} style={{ width: 200, height: 200 }} />
                        <Text> {'\n'} </Text>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#29b6f6' }} > Agrega algo para cotizar...</Text>
                    </View>
                </>
            )

        }














    }
    //asdñasd{asld{sdl{asdlasdl{asldñ{d}}}}}


}

const styles = StyleSheet.create({
    headerPos: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#29B6F6",
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});