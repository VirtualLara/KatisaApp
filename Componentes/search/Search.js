import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Keyboard, Animated } from "react-native";
import { Button, Badge } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

import { Searchbar } from "react-native-paper";
import { colorMarca, IconCotizarCarrito, IconCotizarCarritoInterior } from '../../utils/colores';

export default function Search(props) {

  const { cantidad } = props;
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const onSearch = () => {
    closeSearch();

    navigation.push('SearchView', {
      search: searchQuery
    })
  }

  const closeSearch = () => {
    Keyboard.dismiss();
  }

  return (

    <View style={styles.contentSearch} >

      <View style={styles.viewBtnCotizar}>
        <Button info badge style={styles.btnCotizar} onPress={() => { navigation.navigate('Cotizacion') }} >
          {/* <Badge warning>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              {cantidad}
            </Text>
          </Badge> */}
          <Icon name="list-alt" size={30} color={IconCotizarCarritoInterior} />
        </Button>
      </View>

      <Searchbar style={styles.searchStyle}
        placeholder='Escriba para filtrar'
        value={searchQuery}

        onChangeText={onChangeSearch}
        onSubmitEditing={onSearch} />

      <View style={styles.viewBtnComprar}>
        <Button info badge style={styles.btnComprar} onPress={() => { navigation.navigate('Carrito') }} >
          {/* <Badge warning>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              {cantidad}
            </Text>
          </Badge> */}
          <Icon name="cart-plus" size={30} color={IconCotizarCarritoInterior} />
        </Button>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  contentSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: colorMarca,
  },
  searchStyle: {
    width: "69%",
    height: 50,
  },
  viewBtnCotizar: {
    width: "13%",
    height: 50,
  },
  btnCotizar: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: IconCotizarCarrito
  },
  viewBtnComprar: {
    width: "13%",
    height: 50,
  },
  btnComprar: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: IconCotizarCarrito
  },
});
