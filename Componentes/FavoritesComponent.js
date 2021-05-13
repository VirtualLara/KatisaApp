import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function FavoritesComponent(props) {

    const { product } = props;
    const addFavorites = () => {
        Alert.alert('favorito ' + product.clave)
    }


    return (
        <Icon
            active
            name="heart"
            size={30}
            style={{ width: "35%", padding: 5, color: "#2E4053" }}
            onPress={addFavorites}
        />
    )
}

const styles = StyleSheet.create({

})