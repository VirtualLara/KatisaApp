import React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Form,
  Item,
  Input,
  Header,
  Footer,
} from "native-base";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import IconKey from "react-native-vector-icons/MaterialCommunityIcons";
import IconWorld from "react-native-vector-icons/Fontisto";
import IconPass from "react-native-vector-icons/EvilIcons";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Login extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.titulos}>
          <StatusBarMy backgroundColor="#29B6F6" />
          <Text style={styles.textoHeader}>
            {" "}
            <Icon name="user-circle" size={35} color="white" /> Inicio de Sesión{" "}
          </Text>
        </Header>

        <Content>
          <View style={styles.containerImagen}>
            <Image
              style={styles.image}
              source={require("../Recursos/Imagenes/logo.png")}
            />
          </View>

          <Form style={styles.form}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.Text1}>
                {" "}
                <Icon name="user" size={25} color="#01A9DB" /> Usuario{" "}
              </Text>
            </View>
            <Item>
              <TextInput
                placeholder="Ingrese su Usuario"
                placeholderTextColor="#0B2161"
                returnKeyType="go"
                autoCorrect={false}
                style={{ width: "100%" }}
              />
            </Item>

            <Text> {"\n"} </Text>

            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.Text1}>
                {" "}
                <IconKey name="key" size={30} color="#01A9DB" /> Contraseña{" "}
              </Text>
            </View>
            <Item last>
              <TextInput
                placeholder="Ingrese su Contraseña"
                placeholderTextColor="#0B2161"
                returnKeyType="go"
                secureTextEntry //Vuelve el input tipo password
                autoCorrect={false}
                style={{ width: "100%" }}
              />
            </Item>
          </Form>

          <Text> {"\n"} </Text>

          <View style={styles.botones}>
            <View>
              <Button
                rounded
                style={styles.boton}
                onPress={() => {
                  {
                    Alert.alert("entremos...");
                  }
                }}
              >
                <Text style={styles.textboton}>
                  {" "}
                  <IconWorld
                    name="world"
                    size={35}
                    color="white"
                  /> Ingresar{" "}
                </Text>
              </Button>
            </View>

            <Text> {"\n"} </Text>

            <View>
              <Button
                rounded
                style={styles.boton}
                onPress={() => {
                  {
                    Alert.alert("eres nuevo...");
                  }
                }}
              >
                <Text style={styles.textboton}>
                  {" "}
                  <Icon
                    name="user-plus"
                    size={35}
                    color="white"
                  /> Registrarse{" "}
                </Text>
              </Button>
            </View>

            <Text> {"\n"} </Text>
          </View>
        </Content>

        <Footer style={{ backgroundColor: "#29B6F6" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={styles.boton}
              transparent
              onPress={() => {
                {
                  Alert.alert("que pendejo...");
                }
              }}
            >
              <Text style={styles.textbotonTrans}>
                {" "}
                <IconPass name="close-o" size={25} color="white" />
                ¿Olvidaste tu contraseña?{" "}
              </Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulos: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
  },
  textoHeader: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  containerImagen: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "65%",
    height: 150,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 25,
    color: "#01A9DB",
    fontWeight: "bold",
  },
  botones: {
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    width: 300,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#29B6F6",
  },
  textboton: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  textbotonTrans: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
