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

export default function pruebas() {
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
          <View style={styles.viewForm}>
            <Text style={styles.Text1}>
              {" "}
              <Icon name="user" size={25} color="#01A9DB" /> Usuario{" "}
            </Text>
          </View>
          <Item>
            <TextInput
              placeholder="Ingrese su usuario"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              autoCorrect={false}
              style={{ width: "100%" }}
            />
          </Item>

          <Text> {"\n"} </Text>

          <View style={styles.viewForm}>
            <Text style={styles.Text1}>
              {" "}
              <IconKey name="key" size={30} color="#01A9DB" /> Contraseña{" "}
            </Text>
          </View>
          <Item last>
            <TextInput
              placeholder="Ingrese su contraseña"
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
              success
              style={styles.boton}
              onPress={() => {
                {
                  Alert.alert("entremos...");
                }
              }}
            >
              <Text style={styles.textboton}>
                {" "}
                <IconWorld name="world" size={35} color="white" /> Ingresar{" "}
              </Text>
            </Button>
          </View>

          <Text> {"\n"} </Text>

          <View>
            <Button
              rounded
              style={styles.botonText}
              onPress={() => {
                {
                  Alert.alert("eres nuevo...");
                }
              }}
            >
              <Text style={styles.textbotontext}>
                {" "}
                <Icon
                  name="user-plus"
                  size={35}
                  color="#1976D2"
                  fontWeight="bold"
                />{" "}
                Registrarse{" "}
              </Text>
            </Button>
          </View>

          <Text> {"\n"} </Text>
        </View>
      </Content>

      <Footer style={{ backgroundColor: "#29B6F6" }}>
        <View style={styles.viewForm}>
          <Button
            style={styles.botonOlvidaste}
            transparent
            onPress={() => {
              {
                Alert.alert("que pendejo...");
              }
            }}
          >
            <Text style={styles.textbotonTrans}>
              {" "}
              <IconPass name="close-o" size={40} color="white" />
              Recuperar contraseña{" "}
            </Text>
          </Button>
        </View>
      </Footer>
    </Container>
  );
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
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#28B463",
  },
  textboton: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  textbotonTrans: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  botonText: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    width: "90%",
  },
  textbotontext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
  },
  widthInput: {
    width: "95%",
    height: 60,
  },
  botonOlvidaste: {
    backgroundColor: "#E67E22",
    height: "100%",
    width: "100%",
  },

  viewForm: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
