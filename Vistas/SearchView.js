import React from 'react'
import { View, Text } from 'react-native'
import search from '../Componentes/search';

export default function SearchView(props) {

    const { route } = props;
    const { params } = route;
    console.log(params.search);

    return (
        <View>
            <Text>Search...</Text>
        </View>
    )
}
