import React, { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator, ScrollView, Alert } from "react-native";
import {
  Header,
  Text,
  Form,
  Button,
  CardItem,
} from "native-base";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { map } from 'lodash';

import CardArticulo from "../Componentes/CardArticulo";
import StatusBarMy from "../Componentes/StatusBarMy";
import Search from "../Componentes/search/index";

import { getProductsApi } from '../api/products';
import { color } from "react-native-reanimated";

export default function Catalogo(props) {

  const { navigation } = props;
  const [productsApi, setProductsApi] = useState(null);
  const [loading, setLoading] = useState(false);

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
            <View key={product._id}>
              <CardArticulo
                nombre={product.descripcion}
                clave={product.clave}
                watts={product.watts}
                lumen={product.lumen}
                temperarura={product.temperarura}
                voltajemin={product.voltminimo}
                voltajemax={product.volmaximo}
                medida={product.medida}
                imagen={product.foto.url}
              />

              <View style={styles.contentCotizar}>
                <View style={styles.contentInput}>
                  <Form>
                    <CardItem>
                      <Icon
                        active
                        name="heart"
                        size={30}
                        style={{ width: "35%", padding: 5, color: "#2E4053" }}
                        onPress={() => { Alert.alert('Favorito') }}
                      />
                      <TextInput
                        placeholder="Cantidad:"
                        keyboardType="numeric"
                        style={{
                          width: "65%",
                          height: 50,
                          textAlign: "center",
                          borderWidth: 1,
                        }}
                      />
                    </CardItem>
                  </Form>
                </View>

                <View style={styles.contentBtn}>
                  <View>
                    <Button rounded success
                      style={{ width: "80%" }}
                      onPress={() => { Alert.alert('agregado') }}
                    >
                      <Text style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                      >
                        Cotizar
                  </Text>
                    </Button>
                  </View>
                </View>

              </View>


            </View>
          ))}

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#29b6f6", width: 'auto' }}
            >
              No hay mas articulos para mostrar...
            </Text>
          </View>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </ScrollView>
      </View>

    )
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#29b6f6' size={75} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obtieniendo información...</Text>
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
});
