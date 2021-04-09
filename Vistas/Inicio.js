import React from "react";
import { StyleSheet, Alert, Image } from "react-native";
import {
  Icon,
  Container,
  Header,
  Footer,
  Button,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Content,
} from "native-base";

import Carousel from "../Componentes/Carousel.js";
import { ScrollView } from "react-native-gesture-handler";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Inicio extends React.Component {
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
        {
          tittle: "APERTURA DE NUEVA TIENDA",
          subtittle: "XALAPA CENTRO",
          infoNoticia: {
            parrafo1: "Apreciables clientes de KATISA.",
            parrafo2:
              "Tenemos el honor de informales que apartir de ahora tambien le estaremos atendiendo en nuestra nueva sucursal:",
            parrafo3: "XALAPA CENTRO",
            parrafo4:
              "Ubicada en la clalle: mi calle, de la colonia: mi colonia, de esta ciudad Xalapa, Veracruz. Con horario de atencion: 9:00 hrs - 20:00 hras.",
            parrafo5:
              'POR APERTURA 50% DE DESCEUNTO EN TODA LA TIENDA...  "NO TE QUEDES SIN LUZ..." ',
          },
        },
        {
          tittle: "OFERTA DEL MES",
          subtittle: "FOCOS 10W",
          infoNoticia: {
            parrafo1:
              "Este mes apoyamos tu economia poniendo a tu disposicion esta promocion:",
            parrafo2: "TRIPACK FOCO LED 10W",
            parrafo3: "3 x $59.00",
            parrafo4: "",
            parrafo5: "",
          },
        },
        {
          tittle: "REMATES AL 50%",
          subtittle: "LIQUIDACION DE TEMPORADA",
          infoNoticia: {
            parrafo1:
              "Por liquidacion de temporada, ponemos a tu disposocion auna amplia gama de articulos seleccionados en remate:",
            parrafo2: "50% DE DESCUENTO",
            parrafo3: "No te quedes sin aprovechar esta promocion...",
            parrafo4: "",
            parrafo5: "",
          },
        },
        {
          tittle: "NOTICIA DE PRUEBA",
          subtittle: "INFORMACION",
          infoNoticia: {
            parrafo1:
              "Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript",
            parrafo2:
              "intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad.",
            parrafo3:
              "Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:",
            parrafo4:
              "Para asignaciones más complejas, la sintaxis de asignación de desestructuración es una expresión de JavaScript que hace posible extraer datos de arreglos u objetos usando una sintaxis que refleja la construcción de arreglos y objetos literales.",
            parrafo5: "XXXXXXXXXXXXX ########## 0=0 *.* :)",
          },
        },
        {
          tittle: "ULTIMA NOTICIA",
          subtittle: "INFORMACION",
          infoNoticia: {
            parrafo1:
              "Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript",
            parrafo2:
              "intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad.",
            parrafo3:
              "Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:",
            parrafo4:
              "Para asignaciones más complejas, la sintaxis de asignación de desestructuración es una expresión de JavaScript que hace posible extraer datos de arreglos u objetos usando una sintaxis que refleja la construcción de arreglos y objetos literales.",
            parrafo5: "XXXXXXXXXXXXX ########## 0=0 *.* :)",
          },
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.content}>
        <Header style={styles.header}>
          <StatusBarMy backgroundColor="#29B6F6" />
          <Button
            style={{ backgroundColor: "#29B6F6" }}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon
              name="menu"
              style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
            />
          </Button>
          <Text style={styles.textHeader}> ¡Promociones y más! </Text>
        </Header>

        <View style={styles.contentCarousel}>
          <Carousel />
        </View>

        <View style={styles.header}>
          <Text style={styles.textHeader}>
            <Icon
              name="book"
              style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
            />{" "}
            Noticias Katisa{" "}
          </Text>
        </View>

        <View style={styles.contentBody}>
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

                {/* <View style={{ width: '100%', height: 150,  }}>
                                    
                                </View> */}
              </ScrollView>
            </CardItem>
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

        <Footer style={styles.header}>
          <Text style={styles.textFooter}> ¡Los expertos en iluminación! </Text>
        </Footer>
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
    fontSize: 25,
    fontWeight: "bold",
    height: "auto",
  },
  contentCarousel: {
    height: "auto",
  },
  contentBody: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
  },
  textNoticia: {
    width: "100%",
    textAlign: "justify",
    padding: 15,
    backgroundColor: "#EBF5FB",
  },
  buttonArrow: {
    backgroundColor: "#039BE5",
  },
  iconArrow: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 40,
  },
  textButtonArrow: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
  textFooter: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
