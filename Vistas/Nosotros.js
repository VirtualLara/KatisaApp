import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Header, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import StatusBarMy from "../Componentes/StatusBarMy";
import CardInfoNosotros from "../Componentes/CardInfoNosotros";

export default class Nosotros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "Historia",
          subtitle: "Desde 07/Dic/2016",
          text: {
            parrafo1: "El inicio",
            parrafo2:
              "Empresa mexicana de origen Xalapeño, fundada el 7 de diciembre del año 2016.",
            parrafo3:
              "Desde el inico el giro se ha enfocado en la venta y distribucion de las mejores marcas" +
              "de iluminacion LED, para todo tipo de uso domestico, comercial o industrial.",
            parrafo4:
              "Siempre ofreciendo el respaldo a nuestros clientes ofreciendo productos garantizados hasta por 5 años.",
            parrafo5:
              "Actualmente tenemos presencia en las ciudades de Xalapa, Veracruz y Cordoba, todas en el estado de Veracruz.",
          },
        },
        {
          title: "Mision",
          subtitle: "Desde 07/Dic/2016",
          text: {
            parrafo1: "El inicio",
            parrafo2:
              "Empresa mexicana de origen Xalapeño, fundada el 7 de diciembre del año 2016.",
            parrafo3:
              "Desde el inico el giro se ha enfocado en la venta y distribucion de las mejores marcas" +
              "de iluminacion LED, para todo tipo de uso domestico, comercial o industrial.",
            parrafo4:
              "Siempre ofreciendo el respaldo a nuestros clientes ofreciendo productos garantizados hasta por 5 años.",
            parrafo5:
              "Actualmente tenemos presencia en las ciudades de Xalapa, Veracruz y Cordoba, todas en el estado de Veracruz.",
          },
        },
        {
          title: "Vision",
          subtitle: "Desde 07/Dic/2016",
          text: {
            parrafo1: "El inicio",
            parrafo2:
              "Empresa mexicana de origen Xalapeño, fundada el 7 de diciembre del año 2016.",
            parrafo3:
              "Desde el inico el giro se ha enfocado en la venta y distribucion de las mejores marcas" +
              "de iluminacion LED, para todo tipo de uso domestico, comercial o industrial.",
            parrafo4:
              "Siempre ofreciendo el respaldo a nuestros clientes ofreciendo productos garantizados hasta por 5 años.",
            parrafo5:
              "Actualmente tenemos presencia en las ciudades de Xalapa, Veracruz y Cordoba, todas en el estado de Veracruz.",
          },
        },
        {
          title: "Valores",
          subtitle: "Desde 07/Dic/2016",
          text: {
            parrafo1: "El inicio",
            parrafo2:
              "Empresa mexicana de origen Xalapeño, fundada el 7 de diciembre del año 2016.",
            parrafo3:
              "Desde el inico el giro se ha enfocado en la venta y distribucion de las mejores marcas" +
              "de iluminacion LED, para todo tipo de uso domestico, comercial o industrial.",
            parrafo4:
              "Siempre ofreciendo el respaldo a nuestros clientes ofreciendo productos garantizados hasta por 5 años.",
            parrafo5:
              "Actualmente tenemos presencia en las ciudades de Xalapa, Veracruz y Cordoba, todas en el estado de Veracruz.",
          },
        },
      ],
    };
  }

  renderizarCards() {
    return this.state.cards.map((Item, Index) => {
      return (
        <View key={Index} >
          <CardInfoNosotros
            title={Item.title}
            subtitle={Item.subtitle}
            parrafo1={Item.text.parrafo1}
            parrafo2={Item.text.parrafo2}
            parrafo3={Item.text.parrafo3}
            parrafo4={Item.text.parrafo4}
            parrafo5={Item.text.parrafo5}
          />
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
            <Text style={styles.textHeader}>
              NOSOTROS <Icon name="building" size={40} color="white" />
            </Text>
          </View>
        </Header>

        <ScrollView>
          {this.renderizarCards()}
          <Text>
            {" "}
            {"\n"}
            {"\n"}
            {"\n"}{" "}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerPos: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#29B6F6",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  parrafo: {
    textAlign: "justify",
  },
});
