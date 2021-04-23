import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Header, Button, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Siguenos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flexDirection: "column" }}>
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
              Siguenos <Icon name="arrow-right" size={40} color="white" />
            </Text>
          </View>
        </Header>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 120,
          }}
          onPress={async () => {
            await Linking.openURL("fb://page/517620561746100/");
          }}
        >
          {/* Lin para buscar fb id:  https://roadtoblogging.com/get-facebook-page-id*/}
          <View
            style={{
              backgroundColor: "#3B5998",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "15%",
            }}
          >
            <Icon name="facebook" size={50} color="white" />
          </View>
          <View
            style={{
              backgroundColor: "#3B5998",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Distribuidora Katisa Iluminacion LED
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 120,
          }}
          onPress={async () => {
            await Linking.openURL(
              "https://www.instagram.com/katisailuminacionled/?hl=es-la"
            );
          }}
        >
          <View
            style={{
              backgroundColor: "#8134AF",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "15%",
            }}
          >
            <Icon name="instagram" size={50} color="#FEDA77" />
          </View>
          <View
            style={{
              backgroundColor: "#8134AF",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "80%",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: "#FEDA77" }}
            >
              Distribuidora Katisa Iluminacion LED
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 120,
          }}
          onPress={async () => {
            await Linking.openURL(
              "https://www.youtube.com/channel/UCcydkyVFWNU9zBwaWUB-dFw"
            );
          }}
        >
          <View
            style={{
              backgroundColor: "#C4203B",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "15%",
            }}
          >
            <Icon name="youtube" size={50} color="white" />
          </View>
          <View
            style={{
              backgroundColor: "#C4203B",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              Distribuidora Katisa Iluminacion LED
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 120,
          }}
          onPress={async () => {
            await Linking.openURL("https://katisailuminacionled.com/");
          }}
        >
          <View
            style={{
              backgroundColor: "#2471A3",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "15%",
            }}
          >
            <Icon name="internet-explorer" size={50} color="white" />
          </View>
          <View
            style={{
              backgroundColor: "#2471A3",
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              www.katisailuminacionled.com
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 120,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Button
              backgroundColor="#29B6F6"
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon
                name="arrow-left"
                size={30}
                color="white"
                fontWeight="bold"
              />
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Regresar...
              </Text>
            </Button>
          </View>
        </View>
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
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});
