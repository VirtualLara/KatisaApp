import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Container, Header, Content, Form, Item, Footer } from "native-base";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import IconGenerales from "react-native-vector-icons/FontAwesome5";
import IconPhone from "react-native-vector-icons/Fontisto";
import IconCell from "react-native-vector-icons/MaterialCommunityIcons";

import StatusBarMy from "../Componentes/StatusBarMy";

export default function pruebas(props) {
  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formData) => {
      console.log("registro enviado");
      console.log(formData);
    },
  });

  return (
    <View>
      <Header style={styles.header}>
        <StatusBarMy backgroundColor="#29b6f6" />
        <Icon name="users" size={30} color="#0B2161" />
        <Text style={styles.textoHeader}> Registro Nuevos Usuarios </Text>
      </Header>

      <View>
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
              <IconGenerales name="user-tag" size={20} color="#0B2161" /> Nombre
              (s){" "}
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
            onChangeText={(text) => formik.setFieldValue("name", text)}
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
            onChangeText={(text) => formik.setFieldValue("celphone", text)}
          />
        </Item>

        <View style={styles.titulos}>
          <Text style={styles.textoTitulos}>
            {" "}
            <IconGenerales name="user-check" size={20} color="#01A9DB" /> Datos
            De Sesión:{" "}
          </Text>
        </View>

        <View>
          <Item>
            <Text style={styles.textos}>
              {" "}
              <IconGenerales name="user-alt" size={20} color="#0B2161" /> Correo
              (Usuario){" "}
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
            onChangeText={(text) => formik.setFieldValue("user", text)}
          />
        </Item>

        <View>
          <Item>
            <Text style={styles.textos}>
              {" "}
              <IconGenerales name="user-lock" size={20} color="#0B2161" />{" "}
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
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </Item>

        <View>
          <Item>
            <Text style={styles.textos}>
              {" "}
              <IconGenerales name="user-lock" size={20} color="#0B2161" />{" "}
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
            onChangeText={(text) =>
              formik.setFieldValue("repeatPassword", text)
            }
          />
        </Item>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          mode="contained"
          style={styles.boton}
          onPress={formik.handleSubmit}
        >
          <Icon name="check" size={30} color="white" fontWeight="bold" />
          <Text style={styles.textboton}> Registrarse </Text>
        </Button>

        <Button
          mode="text"
          rounded
          style={styles.botonText}
          onPress={changeForm}
        >
          <Icon name="user" size={35} color="#28B463" fontWeight="bold" />
          <Text style={styles.textbotontext}> Iniciar Sesion </Text>
        </Button>
      </View>
    </View>
  );
}

function initialValues() {
  return {
    name: "",
    celphone: "",
    user: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  textoHeader: {
    fontSize: 20,
    color: "#0B2161",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#29b6f6",
  },
  titulos: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
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
    backgroundColor: "#1976D2",
    margin: 5,
    width: "70%",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#28B463",
  },
  widthInput: {
    width: "100%",
    height: 60,
  },

  view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
