import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import UseAuth from '../hooks/UseAuth';
import { getFavoritosApi } from '../api/favoritos';

export default function FavoritesComponent(props) {

    const { product } = props;
    const { auth } = UseAuth;
    const [favoritos, setFavoritos] = useState(undefined);

    useEffect(() => {
        (async () => {
            const response = await getFavoritosApi(auth, product._id);
            console.log(response)
        })()
    }, [product])

    const addFavorites = () => {
        Alert.alert('favorito: ' + product._id)
    }


    return (
        <View style={{ width: "50%", height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Icon
                active
                name="heart"
                size={75}
                style={{ padding: 5, color: "#2980B9", }}
                onPress={addFavorites}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})