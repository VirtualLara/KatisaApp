import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Button, ActivityIndicator } from 'react-native';
import { Card, } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";

import { API_URL } from '../utils/constants';
import { colorMarca } from '../utils/colores';
import { deleteFavoritoApi } from '../api/favoritos';
import UseAuth from '../hooks/UseAuth';

export default function FavoriteItem(props) {

    const { favorito, setReload } = props;
    const { auth } = UseAuth();
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const goToProduct = (id) => {
        navigation.navigate('ArticuloDetalles', { idProduct: id })
    }

    const deleteFavorite = async (id) => {
        setLoading(true);
        await deleteFavoritoApi(auth, id);
        setReload(true);
        setLoading(false);
    }

    return (

        <Card style={styles.container} >

            <View style={styles.imgContent} >
                <ZoomImage
                    resizeMode={'cover'}
                    source={{ uri: `${API_URL}${favorito.product.foto.url}` }}
                    imgStyle={{
                        height: '100%',
                        width: '100%'
                    }}
                    style={styles.img}
                    duration={2000}
                    enableScaling={false}
                    easingFunc={Easing.ease}
                />
                {/*<Image source={{ uri: `${API_URL}${favorito.product.foto.url}` }} style={styles.img} />*/}
            </View>

            <View style={styles.dataContent} >

                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }} >
                    <View style={{ width: '70%', height: '50%', }} >
                        <Text style={styles.title} >Producto:</Text>
                        <Text style={styles.text} >{favorito.product.descripcion}</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', }} >
                        <Button title='VER...' style={{ width: '100%' }} onPress={() => goToProduct(favorito.product._id)} />
                    </View>
                </View>

                <View style={{ width: '100%', height: '50%', flexDirection: 'row' }} >
                    <View style={{ width: '70%', height: '100%', }} >
                        <Text style={styles.text} > {favorito.product.watts}W  {favorito.product.temperatura}K</Text>
                        <Text style={styles.text} > {favorito.product.clave}</Text>
                    </View>
                    <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', }} >
                        <View>
                            <Icon
                                active
                                name='heart'
                                size={40}
                                //style={{ padding: 5, color: "#E50000", }}
                                style={{ padding: 5, color: "#2980B9", }}
                                onPress={() => deleteFavorite(favorito.product._id)}
                            />
                        </View>
                    </View>

                </View>

            </View>

            {loading && (
                <View style={styles.indicator}>
                    <ActivityIndicator size={50} color={colorMarca} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }} > Eliminando... </Text>
                </View>

            )}

        </Card>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: '#F4F6F6',
    },
    imgContent: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    img: {
        width: '95%',
        height: '95%',
        resizeMode: 'contain',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'gray'
    },
    dataContent: {
        width: '60%',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#D6EAF8'
    },
    text: {
        fontSize: 16,
    },
    indicator: {
        width: "100%",
        height: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#F8F9F9',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
