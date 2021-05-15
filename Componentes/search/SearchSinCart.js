import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Button, Badge } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";

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
        backgroundColor: "#29b6f6",
    },
    searchStyle: {
        width: "80%",
        height: 50,
    },
});
