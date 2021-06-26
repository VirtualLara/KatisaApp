import React, { useState, useCallback } from "react";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Header, Text, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { map } from 'lodash';

import Articulo from "../Componentes/Articulo";
import StatusBarMy from "../Componentes/StatusBarMy";
import Search from "../Componentes/search/index";

import { getProductsApi } from '../api/products';

export default function Catalogo() {

  //const { navigation } = props;
  const [productsApi, setProductsApi] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const goProduct = (id) => {
    navigation.push("ArticuloDetalles", { idProduct: id })
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getProductsApi();
        setProductsApi(response);
        setLoading(true);
      })()
    }, [])
  );

  if (loading) {
    return (
      <View>

        <Header hasTabs style={styles.headerPos}>
          <StatusBarMy backgroundColor="#29B6F6" />

          <Icon
            name="bars"
            size={35}
            color="#1F618D"
            onPress={() => navigation.openDrawer()}
          />
          <Text> {"\n"} </Text>
          <View styles={styles.header}>
            <Text style={styles.text}>
              {" "}
              Catalogo de articulos{" "}
              <Icon name="book" size={40} color="white" />{" "}
            </Text>
          </View>
        </Header>

        <Search />

        <ScrollView>
          {map(productsApi, (product) => (
            <TouchableOpacity key={product._id}
              onPress={() => goProduct(product._id)} >
              <View>
                <Articulo
                  nombre={product.descripcion}
                  clave={product.clave}
                  watts={product.watts}
                  temperatura={product.temperatura}
                  imagen={product.foto.url}
                  precio={product.precio}
                  pagar={product.pagar}
                />
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.contenttextFin}          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#29b6f6", width: 'auto', textAlign: 'center' }}>
              No hay mas artículos para mostrar...
            </Text>
          </View>
        </ScrollView>

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

const styles = StyleSheet.create({
  headerPos: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29B6F6",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  contentCotizar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 80,

  },
  contentInput: {
    width: "55%",
  },
  contentBtn: {
    width: "45%",
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  contenttextFin: {
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 50,
    paddingBottom: 150,
  },
});
