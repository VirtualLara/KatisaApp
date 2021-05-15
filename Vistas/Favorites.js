import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";

import StatusBarMy from '../Componentes/StatusBarMy';
import SearchSinCart from '../Componentes/search/SearchSinCart';

export default function Favorites(props) {

    const { navigation } = props;

    return (
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

            <SearchSinCart />

        </View>
    )
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
