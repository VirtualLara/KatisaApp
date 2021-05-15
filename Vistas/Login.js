import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Container, Content, Card, Item, Header, Footer } from "native-base";
import { TextInput, Button } from "react-native-paper";
import { loginApi } from "../api/user";
import useAuth from "../hooks/UseAuth";
import Toast from "react-native-root-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import IconKey from "react-native-vector-icons/MaterialCommunityIcons";
import IconWorld from "react-native-vector-icons/Fontisto";
import IconPass from "react-native-vector-icons/EvilIcons";

import StatusBarMy from "../Componentes/StatusBarMy";

export default function pruebas(props) {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const { login } = useAuth();

  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await loginApi(formData);
        if (response.statusCode) throw "Error en usuario o contraseña";
        login(response);
        Alert.alert("Bienvenido"); //esto lo puse yoo
      } catch (error) {
        Alert.alert('Favor de Reintentar... ' + error);
        /*         Toast.show(error, {
          position: Toast.positions.CENTER,
        }); */
        setLoading(false);
      }
    },
  });

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
            source={require("../Recursos/Imagenes/logorednom.png")}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.viewForm}>
            <Text style={styles.Text1}>
              {" "}
              <Icon name="envelope" size={25} color="#01A9DB" /> Correo /{" "}
              <Icon name="user" size={25} color="#01A9DB" /> Usuario{" "}
            </Text>
          </View>
          <Item>
            <TextInput
              placeholder="Ingrese correo o usuario"
              placeholderTextColor="#0B2161"
              returnKeyType="go"
              autoCorrect={false}
              style={styles.widthInput}
              onChangeText={(text) => formik.setFieldValue("identifier", text)}
              value={formik.values.identifier}
              error={formik.errors.identifier}
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
              style={styles.widthInput}
              onChangeText={(text) => formik.setFieldValue("password", text)}
              value={formik.values.password}
              error={formik.errors.password}
            />
          </Item>
        </View>

        <Text> {"\n"} </Text>

        <View style={styles.botones}>
          <View>
            <Button
              rounded
              success
              style={styles.boton}
              onPress={formik.handleSubmit}
              loading={loading}
            >
              <Text style={styles.textboton}>
                {" "}
                <IconWorld name="world" size={35} color="white" /> Ingresar{" "}
              </Text>
            </Button>
          </View>

          <Text> {"\n"} </Text>

          <View>
            <Button rounded style={styles.botonText} onPress={changeForm}>
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

      {/* <Footer style={{ backgroundColor: "#29B6F6" }}>
        <View style={styles.viewForm}>
          <Button
            style={styles.botonOlvidaste}
            transparent
            onPress={() => {
              {
                Alert.alert("Pronto se podra restaurar...");
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
      </Footer> */}
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
    height: 170,
    width: "100%",
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: "contain",
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
    fontSize: 16,
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
    width: "100%",
    height: 50,
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

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}
