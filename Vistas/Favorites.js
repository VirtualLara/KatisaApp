import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { size } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import FavoritesList from '../Componentes/FavoritesList';
import { colorMarca, iconDrawerMenu } from '../utils/colores';

import { getFavoritosUserApi } from '../api/favoritos';
import useAuth from '../hooks/UseAuth';

export default function Favorites() {

    const navigation = useNavigation();
    const { auth } = useAuth();

    const [myfavorites, setMyfavorites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                setLoading(true);
                const response = await getFavoritosUserApi(auth);
                setMyfavorites(response);
                setLoading(false);
            })()
            setReload(false);
        }, [reload])
    );

    if (!loading) {
        if (size(myfavorites) >= 1) {
            return (
                <>
                    <View>
                        <StatusBarMy backgroundColor={colorMarca} />
                        <View style={styles.headerPos}>
                            <Icon name="bars" size={35} color={iconDrawerMenu}
                                onPress={() => navigation.openDrawer()}
                            />
                            <Text style={styles.text}>
                                Mis Favoritos
                            </Text>
                            <Icon name="heart" size={40} color="white" />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <FavoritesList myfavorites={myfavorites} setReload={setReload} />
                    </View>
                </>
            )
        } else {
            return (
                <>
                    <View>
                        <StatusBarMy backgroundColor={colorMarca} />
                        <View style={styles.headerPos}>
                            <Icon name="bars" size={35} color={iconDrawerMenu}
                                onPress={() => navigation.openDrawer()}
                            />
                            <Text style={styles.text}>
                                Mis Favoritos
                            </Text>
                            <Icon name="heart" size={40} color="white" />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                        <Image source={require('../Recursos/Imagenes/heart.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                        <Text> {'\n'} </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} > No tienes lista de favoritos...  </Text>
                        <Text> {'\n'} </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                            <Button mode='contained' onPress={() => { navigation.navigate('Catalogo') }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00bb2d', width: '90%' }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} > AGREGAR fAVORITOS  </Text>
                                <Icon active name="plus" style={{ color: 'white', fontSize: 20 }} />
                            </Button>
                        </View>
                    </View>
                </>
            )
        }
    } else {
        return (
            <>
                <View>
                    <StatusBarMy backgroundColor={colorMarca} />
                    <View style={styles.headerPos}>
                        <Icon name="bars" size={35} color={iconDrawerMenu}
                            onPress={() => navigation.openDrawer()}
                        />
                        <Text style={styles.text}>
                            Mis Favoritos
                        </Text>
                        <Icon name="heart" size={40} color="white" />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <ActivityIndicator color={colorMarca} size={75} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: colorMarca }} > Obteniendo información...</Text>
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
        backgroundColor: colorMarca,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
});
