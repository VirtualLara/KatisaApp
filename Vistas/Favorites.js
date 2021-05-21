import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import { map, size } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import Articulo from "../Componentes/Articulo";

import { getFavoritosUserApi } from '../api/favoritos';
import useAuth from '../hooks/UseAuth';

export default function Favorites(props) {

    const navigation = useNavigation();
    const { auth } = useAuth();

    const [myfavorites, setMyfavorites] = useState(null);
    const [loading, setLoading] = useState(false);

    const goProduct = (id) => {
        navigation.navigate("ArticuloDetalles", { idProduct: id })
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                setLoading(true);
                const response = await getFavoritosUserApi(auth);
                setMyfavorites(response);
                setLoading(false);
            })()
        }, [])
    );

    if (!loading) {
        if (size(myfavorites) >= 1) {
            return (
                <>
                    <View>
                        <StatusBarMy backgroundColor="#29B6F6" />
                        <View style={styles.headerPos}>
                            <Icon name="bars" size={35} color="#1F618D"
                                onPress={() => navigation.openDrawer()}
                            />
                            <Text style={styles.text}>
                                Mis Favoritos
                        </Text>
                            <Icon name="heart" size={40} color="white" />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                        <ScrollView>
                            {map(myfavorites, (favorite) => (
                                <TouchableOpacity key={favorite.product._id}
                                    onPress={() => goProduct(favorite.product._id)} >
                                    <View>
                                        <Articulo
                                            nombre={favorite.product.descripcion}
                                            clave={favorite.product.clave}
                                            watts={favorite.product.watts}
                                            temperatura={favorite.product.temperatura}
                                            imagen={favorite.product.foto.url}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}

                            <View style={styles.contenttextFin} >
                                <Text> {'\n'} </Text>
                                <Text> {'\n'} </Text>
                                <Text style={{ fontWeight: "bold", fontSize: 22, color: "#29b6f6", width: 'auto', textAlign: 'center' }}>
                                    No hay más favoritos...
                            </Text>
                            </View>
                        </ScrollView>

                    </View>
                </>
            )
        } else {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                    <Image source={require('../Recursos/Imagenes/logored.png')} style={{ width: 200, height: 200 }} />
                    <Text> {'\n'} </Text>
                    {/* <ActivityIndicator color='#29b6f6' size={75} />
                    <Text> {'\n'} </Text> */}
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#29b6f6' }} > Aún no tienes favoritos...</Text>
                </View>
            )


        }
    } else {
        return (
            <>
                <View>
                    <StatusBarMy backgroundColor="#29B6F6" />
                    <View style={styles.headerPos}>
                        <Icon name="bars" size={35} color="#1F618D"
                            onPress={() => navigation.openDrawer()}
                        />
                        <Text style={styles.text}>
                            Mis Favoritos
                    </Text>
                        <Icon name="heart" size={40} color="white" />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color='#29b6f6' size={75} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo información...</Text>
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
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
});
