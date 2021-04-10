import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  ScrollableTab,
  Item,
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";
import Sucursal from "./Sucursal";

export default class TabsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ciudades: [
        { ciudad: "Xalapa" },
        { ciudad: "Veracruz" },
        { ciudad: "Cordoba" },
      ],
    };
  }

  renderizarCiudades() {
    return this.state.ciudades.map((Item, Index) => {
      return (
        <Tab
          key={Index}
          heading={Item.ciudad}
          Index={Index}
          tabStyle={{ backgroundColor: "#29B6F6" }}
          textStyle={{ color: "black", fontWeight: "bold" }}
          activeTabStyle={{ backgroundColor: "#0288D1" }}
        >
          <Sucursal opc={Item.ciudad} />
        </Tab>
      );
    });
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={styles.headerPos}>
          <Icon
            name="arrow-left"
            size={35}
            color="#1F618D"
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text> {"\n"} </Text>
          <View styles={styles.header}>
            <Text style={styles.text}>
              Ubicanos <Icon name="map-marker-alt" size={40} color="white" />
            </Text>
          </View>
        </Header>

        <Tabs locked="true" tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          {this.renderizarCiudades(this.state.valorCiudad)}
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerPos: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29B6F6",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});
