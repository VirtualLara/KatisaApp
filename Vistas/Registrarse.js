import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Container, Header, Content, Form, Item, Footer } from "native-base";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import IconGenerales from "react-native-vector-icons/FontAwesome5";
import IconPhone from "react-native-vector-icons/Fontisto";
import IconCell from "react-native-vector-icons/MaterialCommunityIcons";

import StatusBarMy from "../Componentes/StatusBarMy";

export default class Registrarse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeForm: props,
    };
  }

  render() {
    return (
      <View>
        <Header style={styles.header}>
          <StatusBarMy backgroundColor="#29b6f6" />
          <Icon name="users" size={30} color="white" />
          <Text style={styles.textoHeader}> Registro Nuevos Usuarios </Text>
        </Header>

        <Form>
          <View style={styles.titulos}>
            <Text style={styles.textoTitulos}>
              {" "}
              <IconGenerales name="user-tie" size={20} color="#01A9DB" /> Datos
              generales:{" "}
            </Text>
          </View>

          <View>
            <Item>
              <Text style={styles.textos}>
                {" "}
                <IconGenerales name="user-tag" size={20} color="#0B2161" />{" "}
                Nombre (s){" "}
              </Text>
            </Item>
          </View>
          <Item>
            <TextInput
              placeholder="Nombre (s)"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              autoCorrect={false}
              style={styles.widthInput}
            />
          </Item>

          <View>
            <Item>
              <Text style={styles.textos}>
                {" "}
                <IconPhone name="phone" size={20} color="#0B2161" />/
                <IconCell
                  name="cellphone-android"
                  size={20}
                  color="#0B2161"
                />{" "}
                Telefono o Celular{" "}
              </Text>
            </Item>
          </View>
          <Item>
            <TextInput
              placeholder="Telefono / Celular"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              autoCorrect={false}
              keyboardType="numeric"
              style={styles.widthInput}
            />
          </Item>

          <View style={styles.titulos}>
            <Text style={styles.textoTitulos}>
              {" "}
              <IconGenerales name="user-check" size={20} color="#01A9DB" />{" "}
              Datos De Sesión:{" "}
            </Text>
          </View>

          <View>
            <Item>
              <Text style={styles.textos}>
                {" "}
                <IconGenerales name="user-alt" size={20} color="#0B2161" />{" "}
                Usuario{" "}
              </Text>
            </Item>
          </View>
          <Item>
            <TextInput
              placeholder="Ingrese su Usuario"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              autoCorrect={false}
              style={styles.widthInput}
            />
          </Item>

          <View>
            <Item>
              <Text style={styles.textos}>
                {" "}
                <IconGenerales
                  name="user-lock"
                  size={20}
                  color="#0B2161"
                />{" "}
                Contraseña{" "}
              </Text>
            </Item>
          </View>
          <Item last>
            <TextInput
              placeholder="Ingrese su Contraseña"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              secureTextEntry //Vuelve el input tipo password
              autoCorrect={false}
              style={styles.widthInput}
            />
          </Item>

          <View>
            <Item>
              <Text style={styles.textos}>
                {" "}
                <IconGenerales
                  name="user-lock"
                  size={20}
                  color="#0B2161"
                />{" "}
                Confirmar contraseña{" "}
              </Text>
            </Item>
          </View>
          <Item last>
            <TextInput
              placeholder="Repita la Contraseña"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              secureTextEntry //Vuelve el input tipo password
              autoCorrect={false}
              style={styles.widthInput}
            />
          </Item>
        </Form>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            mode="contained"
            style={styles.boton}
            onPress={() => {
              Alert.alert("ahora ya eres usuario...");
            }}
          >
            <Icon name="check" size={30} color="white" fontWeight="bold" />
            <Text style={styles.textboton}> Registrarse </Text>
          </Button>

          <Button
            mode="text"
            rounded
            style={styles.botonText}
            onPress={this.state.changeForm}
          >
            <Icon name="user" size={30} color="#7B1FA2" fontWeight="bold" />
            <Text style={styles.textbotontext}> Iniciar Sesion </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoHeader: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#29b6f6",
  },
  titulos: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulos: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#01A9DB",
  },
  textos: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0B2161",
  },
  boton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29b6f6",
    margin: 5,
    width: "90%",
  },
  textboton: {
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#7B1FA2",
  },
  widthInput: {
    width: "95%",
    height: 60,
  },
});
