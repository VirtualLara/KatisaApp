import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import { size } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import FavoritesList from '../Componentes/FavoritesList';

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

                        <FavoritesList myfavorites={myfavorites} setReload={setReload} />

                    </View>
                </>
            )
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

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                        <Image source={require('../Recursos/Imagenes/logored.png')} style={{ width: 200, height: 200 }} />
                        <Text> {'\n'} </Text>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#29b6f6' }} > Aún no tienes favoritos...</Text>
                    </View>
                </>
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
