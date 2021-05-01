import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {
  Header,
  Text,
  Form,
  Button,
  CardItem,
} from "native-base";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import CardArticulo from "../Componentes/CardArticulo";
import StatusBarMy from "../Componentes/StatusBarMy";
import Search from "../Componentes/search/index";

export default class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        {
          nombre: "Reflector",
          clave: "1600386",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://resources.claroshop.com/medios-plazavip/s2/10382/1216720/5d93ab966d603-277157899bc8195570724df5c92d1917862d77e4-1600x1600.jpg",
        },
        {
          nombre: "Reflector",
          clave: "1600386",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://resources.claroshop.com/medios-plazavip/s2/10382/1216720/5d93ab966d603-277157899bc8195570724df5c92d1917862d77e4-1600x1600.jpg",
        },
        {
          nombre: "Reflector",
          clave: "1600386",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://resources.claroshop.com/medios-plazavip/s2/10382/1216720/5d93ab966d603-277157899bc8195570724df5c92d1917862d77e4-1600x1600.jpg",
        },
        {
          nombre: "Reflector",
          clave: "1600386",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://resources.claroshop.com/medios-plazavip/s2/10382/1216720/5d93ab966d603-277157899bc8195570724df5c92d1917862d77e4-1600x1600.jpg",
        },
        {
          nombre: "Reflector",
          clave: "1600386",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://resources.claroshop.com/medios-plazavip/s2/10382/1216720/5d93ab966d603-277157899bc8195570724df5c92d1917862d77e4-1600x1600.jpg",
        },
      ],
    };
  }

  renderizarArticulos() {
    return this.state.articulos.map((Item, Index) => {
      return (
        <View key={Index}>
          <CardArticulo
            nombre={Item.nombre}
            clave={Item.clave}
            watts={Item.watts}
            lumen={Item.lumen}
            temperarura={Item.temperarura}
            voltajemin={Item.voltajemin}
            voltajemax={Item.voltajemax}
            medida={Item.medida}
            imagen={Item.imagen}
          />

          <View style={styles.contentCotizar}>
            <View style={styles.contentInput}>
              <Form>
                <CardItem>
                  <Icon
                    active
                    name="pencil"
                    size={30}
                    style={{ width: "25%", padding: 5, color: "#2E4053" }}
                  />
                  <TextInput
                    placeholder="Cantidad:"
                    keyboardType="numeric"
                    style={{
                      width: "75%",
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
      );
    });
  }

  render() {
    return (
      <View>
        <Header hasTabs style={styles.headerPos}>
          <StatusBarMy backgroundColor="#29B6F6" />

          <Icon
            name="bars"
            size={35}
            color="#1F618D"
            onPress={() => this.props.navigation.openDrawer()}
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
          {this.renderizarArticulos()}

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
    );

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
    height: 70,
  },
  contentInput: {
    width: "55%",
  },
  contentBtn: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
