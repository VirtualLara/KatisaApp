import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header, Text, Form, Button, Item, CardItem, Input } from "native-base";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import CardArticulo from "../Componentes/CardArticulo";
import StatusBarMy from "../Componentes/StatusBarMy";
import Search from "../Componentes/search/index";
import { Alert } from "react-native";
import { Value } from "react-native-reanimated";

export default class Catalogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempCantidad: 0,
      cantidad: 0,
      articulos: [
        {
          nombre: "Reflector",
          clave: "1234567",
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
          nombre: "Lampara",
          clave: "1234567",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "data:image/jpeg;base64,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",
        },
        {
          nombre: "Panel",
          clave: "1234567",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "data:image/jpeg;base64,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",
        },
        {
          nombre: "Foco",
          clave: "1234567",
          watts: "150",
          lumen: "1500",
          temperarura: "6500",
          voltajemin: "80",
          voltajemax: "220",
          medida: "50*30*70",
          imagen:
            "https://www.radioshack.com.mx/medias/92243.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjM2MDE0fGltYWdlL2pwZWd8aDIwL2hmZi84OTg0MjQ3Njk3NDM4LmpwZ3wwOWRlNDIwMTUzNTRmOTc3Mzg4MzNiZWUwYjA3NjI5M2Y0NjgxMzcxMzc2MDQyNGI5Y2U1YmZkZTIxOTZjN2Q0",
        },
      ],
      cotizar: {
        cantidad: "",
        lista: [],
      },
    };
  }

  renderizarArticulos() {
    return this.state.articulos.map((Item, Index) => {
      return (
        <View>
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
                    onChangeText={(value) => {
                      console.log(this.state.tempCantidad);
                      this.setState({ cantidad: value });
                    }}
                  />
                </CardItem>
              </Form>
            </View>

            <View style={styles.contentBtn}>
              <View>
                <Button
                  rounded
                  success
                  style={{ width: "80%" }}
                  onPress={() => {
                    let cantidad = this.state.cantidad;
                    let temp = this.state.tempCantidad;
                    this.setState({
                      cantidad: cantidad + temp,
                      tempCantidad: 0,
                    });
                  }}
                >
                  <Input min={0}> </Input>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Cotizar{" "}
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
            name="arrow-left"
            size={35}
            color="#1F618D"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text> {"\n"} </Text>
          <View styles={styles.header}>
            <Text style={styles.text}>
              {" "}
              Catalogo de articulos <Icon
                name="book"
                size={40}
                color="white"
              />{" "}
            </Text>
          </View>
        </Header>

        <Search cantidad={this.state.cantidad} />

        <ScrollView>
          {this.renderizarArticulos()}
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
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
