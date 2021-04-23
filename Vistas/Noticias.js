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
} from "native-base";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numNoticia: 0,
      noticia: [
        {
          tittle: "AVISO DE SEMANA SANTA Y DEMAS DIAS",
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
        {
          tittle: "NOTICIA 2",
          subtittle: "OTRA NOTICIA",
          infoNoticia: {
            parrafo1: "Atodos nuestros clientes les informamos lo siguiente:",
            parrafo2:
              "Por celebracion de los dias de semana santa, suspenderemos labores los dias 1 y 2 de abril del presente año.",
            parrafo3:
              "Reanudando actividades el dia 3 de abril en todas nuestra sucursales.",
            parrafo4: "En los horarios que ya conocen como de costumrbe.",
            parrafo5:
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos.",
          },
        },
        {
          tittle: "NOTICIA 3 DE EJEMPLO",
          subtittle: "OTRA NOTICIA",
          infoNoticia: {
            parrafo1: "Atodos nuestros clientes les informamos lo siguiente:",
            parrafo2:
              "Por celebracion de los dias de semana santa, suspenderemos labores los dias 1 y 2 de abril del presente año.",
            parrafo3:
              "Reanudando actividades el dia 3 de abril en todas nuestra sucursales.",
            parrafo4: "En los horarios que ya conocen como de costumrbe.",
            parrafo5:
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos.",
          },
        },
        {
          tittle: "EJEMPLO 4 NOTICAS",
          subtittle: "OTRA NOTICIA",
          infoNoticia: {
            parrafo1: "Atodos nuestros clientes les informamos lo siguiente:",
            parrafo2:
              "Por celebracion de los dias de semana santa, suspenderemos labores los dias 1 y 2 de abril del presente año.",
            parrafo3:
              "Reanudando actividades el dia 3 de abril en todas nuestra sucursales.",
            parrafo4: "En los horarios que ya conocen como de costumrbe.",
            parrafo5:
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos." +
              " Vamos a poner otro texto aqui nadamas de relleno para que se vea en el ejemplo de los campos.",
          },
        },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarMy backgroundColor="#29b6f6" />

        <View style={styles.header}>
          <Icon
            name="menu"
            style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: 50,
              color: "#1F618D",
            }}
            onPress={() => this.props.navigation.openDrawer()}
          />

          <Text style={styles.textHeader}>
            <Icon
              name="book"
              style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
            />{" "}
            Noticias Katisa{" "}
          </Text>
        </View>

        <View style={styles.contentNoticia}>
          <View style={{ height: "100%" }}>
            <View style={{ height: "20%" }}>
              <CardItem style={{ height: "100%" }}>
                <Left>
                  <Thumbnail
                    source={require("../Recursos/Imagenes/logo.png")}
                  />
                  <Body>
                    <Text style={styles.title}>
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

            <View style={styles.contentBoton}>
              <View>
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
              </View>

              <View>
                <Button
                  iconRight
                  onPress={() => {
                    if (
                      this.state.numNoticia <=
                      this.state.noticia.length - 2
                    ) {
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
          </View>
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    height: "8%",
  },
  textHeader: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    height: "auto",
  },
  contentNoticia: {
    width: "100%",
    height: "92%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B2631",
  },
  textNoticia: {
    textAlign: "justify",
    fontSize: 18,
  },
  contentBoton: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#34495E",
  },
  buttonArrow: {
    backgroundColor: "#29b6f6",
  },
  textButtonArrow: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textFooter: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
