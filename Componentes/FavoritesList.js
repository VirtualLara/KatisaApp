import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { map } from 'lodash';

import FavoriteItem from '../Componentes/FavoriteItem';

export default function FavoritesList(props) {

    const { myfavorites, setReload } = props;

    return (
        <ScrollView contentContainerStyle={styles.scroll} >
            <Text style={styles.title} > Favoritos </Text>
            {map(myfavorites, (favorito) => (
                <FavoriteItem key={favorito._id} favorito={favorito} setReload={setReload} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 5,
    }
})