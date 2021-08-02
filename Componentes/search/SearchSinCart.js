import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import { colorMarca } from '../../utils/colores';

export default function SearchSinCart(props) {
    const { cantidad } = props;
    return (
        <View style={styles.contentSearch}>
            <Searchbar style={styles.searchStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    contentSearch: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: colorMarca,
    },
    searchStyle: {
        width: "80%",
        height: 50,
    },
});
