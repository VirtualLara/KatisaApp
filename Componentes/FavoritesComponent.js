import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { size } from 'lodash';

import UseAuth from '../hooks/UseAuth';
import { getFavoritosApi, addFavoritoApi, deleteFavoritoApi } from '../api/favoritos';

export default function FavoritesComponent(props) {

    const { product } = props;
    const { auth } = UseAuth();
    const [favoritos, setFavoritos] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await getFavoritosApi(auth, product._id);
            if (size(response) === 0) setFavoritos(false)
            else setFavoritos(true);
        })()
    }, [product])

    const addFavorites = async () => {
        if (!loading) {
            setLoading(true);
            try {
                await addFavoritoApi(auth, product._id);
                setFavoritos(true);
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
    }

    const deleteFavorite = async () => {
        if (!loading) {
            setLoading(true);
            try {
                await deleteFavoritoApi(auth, product._id);
                setFavoritos(false);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    }

    return (

        <View style={styles.contentHeart} >
            <View>
                <Text style={favoritos
                    ? { fontSize: 25, fontWeight: 'bold', color: "#E50000" }
                    : { fontSize: 25, fontWeight: 'bold', color: "#2980B9" }} >

                    {favoritos ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
                </Text>
            </View>
            <View>
                <View style={{ width: "50%", height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon
                        active
                        name={favoritos ? 'heart' : 'thumbs-up'}
                        //name='thumbs-up'
                        size={75}
                        style={favoritos ? { padding: 5, color: "#E50000", } : { padding: 5, color: "#2980B9", }}
                        onPress={favoritos ? deleteFavorite : addFavorites}
                    />
                </View>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    contentHeart: {
        width: '100%',
        height: "35%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
})