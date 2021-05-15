import React, { useState, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getStoresXalapaApi, getStoresVeracruzApi, getStoresCordobaApi } from '../api/Sucursales';

import ListSucursales from '../Componentes/ListSucursales';
import { color } from 'react-native-reanimated';

export default function Sucursal(props) {

  const { op } = props;
  const [xalapaArray, setXalapaArray] = useState(null);
  const [veracruzArray, setVeracruzArray] = useState(null);
  const [cordobaArray, setcordobaArray] = useState(null);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const responseXalapa = await getStoresXalapaApi();
        setXalapaArray(responseXalapa);
        const responseVeracruz = await getStoresVeracruzApi();
        setVeracruzArray(responseVeracruz);
        const responseCordoba = await getStoresCordobaApi();
        setcordobaArray(responseCordoba);
        setLoading(true)
      })()
    }, [])
  );

  if (loading) {

    return (
      <View style={{ flex: 1 }}>

        { xalapaArray, veracruzArray, cordobaArray && <ListSucursales
          xalapaArray={xalapaArray}
          veracruzArray={veracruzArray}
          cordobaArray={cordobaArray}
          op={op} />
        }

      </View>
    )
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#29b6f6' size={75} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo información...</Text>
      </View>
    )

  }




}