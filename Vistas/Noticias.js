import React, { Component } from "react";
import { StyleSheet, Alert, ScrollView } from "react-native";
import {
  Icon,
  Button,
  View,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Content,
} from "native-base";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numNoticia: 0,
      noticia: [
        {
          tittle: "AVISO DE SEMANA SANTA",
          subtittle: "DIAS NO LABORABLES",
          infoNoticia: {
            parrafo1: "Atodos nuestros clientes les informamos lo siguiente:",
            parrafo2:
              "Por celebracion de los dias de semana santa, suspenderemos labores los dias 1 y 2 de abril del presente año.",
            parrafo3:
              "Reanudando actividades el dia 3 de abril en todas nuestra sucursales.",
            parrafo4: "En los horarios que ya conocen como de costumrbe.",
            parrafo5: "",
          },
        },
      ],
    };
  }
  render() {
    return (
      <View>
        <StatusBarMy backgroundColor="#29b6f6" />

        <View style={styles.header}>
          <Text style={styles.textHeader}>
            <Icon
              name="book"
              style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
            />{" "}
            Noticias Katisa{" "}
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
          }}
        >
          <View style={{ height: "85%" }}>
            <View style={{ height: "30%" }}>
              <CardItem style={{ height: "100%" }}>
                <Left>
                  <Thumbnail
                    source={require("../Recursos/Imagenes/logo.png")}
                  />
                  <Body>
                    <Text>
                      {" "}
                      {this.state.noticia[this.state.numNoticia].tittle}{" "}
                    </Text>
                    <Text note>
                      {" "}
                      {this.state.noticia[this.state.numNoticia].tittle}{" "}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </View>
            <CardItem style={{ height: "70%" }}>
              <ScrollView>
                <Text style={styles.textNoticia}>
                  {
                    this.state.noticia[this.state.numNoticia].infoNoticia
                      .parrafo1
                  }{" "}
                  {"\n"}
                  {"\n"}
                  {
                    this.state.noticia[this.state.numNoticia].infoNoticia
                      .parrafo2
                  }{" "}
                  {"\n"}
                  {"\n"}
                  {
                    this.state.noticia[this.state.numNoticia].infoNoticia
                      .parrafo3
                  }{" "}
                  {"\n"}
                  {"\n"}
                  {
                    this.state.noticia[this.state.numNoticia].infoNoticia
                      .parrafo4
                  }{" "}
                  {"\n"}
                  {"\n"}
                  {
                    this.state.noticia[this.state.numNoticia].infoNoticia
                      .parrafo5
                  }{" "}
                  {"\n"}
                  {"\n"}
                </Text>
              </ScrollView>
            </CardItem>
          </View>
        </View>
        <View
          style={{
            height: "15%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            iconLeft
            onPress={() => {
              if (this.state.numNoticia !== 0) {
                this.setState({ numNoticia: this.state.numNoticia - 1 });
              } else {
                Alert.alert(
                  "Estas en la primer noticia." +
                    `\n` +
                    "No hay mas para mostar..."
                );
              }
            }}
            style={styles.buttonArrow}
          >
            <Icon name="arrow-back" style={styles.iconArrow} />
            <Text style={styles.textButtonArrow}> Anterior </Text>
          </Button>

          <Button
            iconRight
            onPress={() => {
              if (this.state.numNoticia <= this.state.noticia.length - 2) {
                this.setState({ numNoticia: this.state.numNoticia + 1 });
              } else {
                Alert.alert(
                  "Estas en la ultima noticia." +
                    `\n` +
                    "En breve publicaremos..."
                );
              }
            }}
            style={styles.buttonArrow}
          >
            <Text style={styles.textButtonArrow}> Siguiente </Text>
            <Icon name="arrow-forward" style={styles.iconArrow} />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    height: "auto",
  },
  textHeader: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    height: "auto",
  },
  textFooter: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
