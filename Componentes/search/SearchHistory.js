import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native'

export default function SearchHistory(props) {

    const { showHistory } = props;

    return (
        <View style={[showHistory ? styles.history : styles.hidden, { top: 110 }]} >
            <Text> Historial de busqueda... </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    hidden: {
        display: 'none'
    },
    history: {
        position: 'absolute',
        backgroundColor: '#EBEDEF',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    }
})