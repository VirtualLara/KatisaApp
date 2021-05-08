import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getStoresXalapaApi, getStoresVeracruzApi, getStoresCordobaApi } from '../api/Sucursales';

import ListSucursales from '../Componentes/ListSucursales';

export default function Sucursal(props) {

  const { op } = props;
  const [xalapaArray, setXalapaArray] = useState(null);
  const [veracruzArray, setVeracruzArray] = useState(null);
  const [cordobaArray, setcordobaArray] = useState(null);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const responseXalapa = await getStoresXalapaApi();
        setXalapaArray(responseXalapa);
        const responseVeracruz = await getStoresVeracruzApi();
        setVeracruzArray(responseVeracruz);
        const responseCordoba = await getStoresCordobaApi();
        setcordobaArray(responseCordoba);
      })()
    }, [])
  );


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


}