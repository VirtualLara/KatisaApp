import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
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
            <Button onPress={favoritos ? deleteFavorite : addFavorites} >
                <Icon
                    active
                    name={favoritos ? 'heart' : 'thumbs-up'}
                    size={50}
                    style={favoritos ? { padding: 5, color: "#E50000", } : { padding: 5, color: "#2980B9", }}
                />
                <Text style={favoritos
                    ? { fontSize: 18, fontWeight: 'bold', color: "#E50000" }
                    : { fontSize: 18, fontWeight: 'bold', color: "#2980B9" }} >

                    {favoritos ? 'Eliminar de Favoritos' : 'Añadir a Favoritos'}
                </Text>
            </Button>
        </View>



    )
}

const styles = StyleSheet.create({
    contentHeart: {
        marginTop: -10,
        flexDirection: 'row',
        width: '100%',
        height: "35%",
        justifyContent: 'center',
        alignItems: 'center',
    },
})