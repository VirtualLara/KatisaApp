import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Image } from "react-native";
import { Container, Header, Content, Form, Item, Footer } from "native-base";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import IconGenerales from "react-native-vector-icons/FontAwesome5";
import IconPhone from "react-native-vector-icons/Fontisto";
import IconCell from "react-native-vector-icons/MaterialCommunityIcons";

import { registerApi } from "../api/user";
import StatusBarMy from "../Componentes/StatusBarMy";

export default function pruebas(props) {
  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      try {
        await registerApi(formData);
        console.log("ok");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBarMy backgroundColor="#29b6f6" />

      <View style={styles.containerImagen}>
        <Image
          style={styles.image}
          source={require("../Recursos/Imagenes/logo.png")}
        />
      </View>

      <View>
        <View style={styles.titulos}>
          <Text style={styles.textoTitulos}>
            <IconGenerales name="user-check" size={20} color="#01A9DB" /> Datos
            De Sesión:
          </Text>
        </View>

        <View>
          <Item>
            <Text style={styles.textos}>
              {" "}
              <IconGenerales
                name="envelope-square"
                size={20}
                color="#0B2161"
              />{" "}
              Correo
            </Text>
          </Item>
        </View>
        <Item>
          <TextInput
            placeholder="Ingrese un correo"
            placeholderTextColor="#0B2161"
            returnKeyType="go"
            autoCorrect={false}
            style={styles.widthInput}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            value={formik.values.email}
            error={formik.errors.email}
          />
        </Item>

        <View>
          <Item>
            <Text style={styles.textos}>
              {" "}
              <IconGenerales name="user-alt" size={20} color="#0B2161" />{" "}
              Usuario
            </Text>
          </Item>
        </View>
        <Item>
          <TextInput
            placeholder="Ingrese nombre de usuario"
            placeholderTextColor="#0B2161"
            returnKeyType="go"
            autoCorrect={false}
            style={styles.widthInput}
            onChangeText={(text) => formik.setFieldValue("user", text)}
            value={formik.values.user}
            error={formik.errors.user}
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
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#0B2161"
            returnKeyType="go"
            secureTextEntry //Vuelve el input tipo password
            autoCorrect={false}
            style={styles.widthInput}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            value={formik.values.password}
            error={formik.errors.password}
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
            placeholder="Repita sus Contraseña"
            placeholderTextColor="#0B2161"
            returnKeyType="go"
            secureTextEntry //Vuelve el input tipo password
            autoCorrect={false}
            style={styles.widthInput}
            onChangeText={(text) =>
              formik.setFieldValue("repeatPassword", text)
            }
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
          />
        </Item>
      </View>

      <View
        style={{
          paddingTop: 10,
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
    height: 50,
  },

  view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerImagen: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 110,
    resizeMode: "contain",
  },
});

function initialValues() {
  return {
    user: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    user: Yup.string().required(true),
    password: Yup.string().required(true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password"), true]),
  };
}
