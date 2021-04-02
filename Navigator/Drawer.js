import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../Vistas/Login";
import RecuperarPassword from "../Vistas/RecuperarPassword";
import Inicio from "../Vistas/Inicio";
import Registrarse from "../Vistas/Registrarse";
import Sucursales from "../Vistas/Sucursales";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Sucursales" component={Sucursales} />
        <Drawer.Screen name="Registrarse" component={Registrarse} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="RecuperarPassword" component={RecuperarPassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({

...Platform.select({
    ios: {
        },
        android: {
            statusBar:{
                backgroundColor: 'red',
            }
        },
        default: {
            backgroundColor: 'blue'
        },
    }),

  contenedor: {
    flex: 0.3,
    width: "77%",
  },

  ContImagen: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#E6E6E6",
  },
  Imagen: {
    width: 180,
    height: 100,
  },
});
