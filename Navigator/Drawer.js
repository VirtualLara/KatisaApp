import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import useAuth from "../hooks/UseAuth";
import BarMy from "../Componentes/StatusBarMy";
import Inicio from "../Vistas/Inicio";
import Sucursales from "../Vistas/Sucursales";
import Siguenos from "../Vistas/Siguenos";
import Catalogo from "../Vistas/Catalogo";
import Nosotros from "../Vistas/Nosotros";
import AccountStack from "./AccountStack";

function Menu(props) {
  const { logout } = useAuth();
  const logoutAccount = () => {
    Alert.alert(
      "Al seguir se cerrara la session.",
      "¿Deseas salir?",
      [
        {
          tex: "NO",
        },
        { tex: "SI", onPress: logout },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <View>
      <BarMy backgroundColor="#29B6F6" />

      <TouchableOpacity onPress={() => props.navigation.navigate("Nosotros")}>
        <View style={styles.containImage}>
          <Image
            source={require("../Recursos/Imagenes/logo.png")}
            style={{ width: "95%", height: "95%", resizeMode: "contain" }}
          />
        </View>
        <View style={styles.containTextImagen}>
          <Text style={styles.textImagen}> Los expertos en iluminación </Text>
        </View>
      </TouchableOpacity>

      <View style={{ width: "100%", height: 450 }}>
        <ScrollView>
          <DrawerMenu
            iconName="home"
            titleName="Inicio"
            navigation={() => props.navigation.navigate("Inicio")}
          />
          <DrawerMenu
            iconName="book"
            titleName="Catalogo"
            navigation={() => props.navigation.navigate("Catalogo")}
          />
          <DrawerMenu
            iconName="building"
            titleName="Sucursales"
            navigation={() => props.navigation.navigate("Sucursales")}
          />
          <DrawerMenu
            iconName="arrow-right"
            titleName="Siguenos"
            navigation={() => props.navigation.navigate("Siguenos")}
          />
          <DrawerMenu
            iconName="users"
            titleName="Nosotros"
            navigation={() => props.navigation.navigate("Nosotros")}
          />
          <DrawerMenu
            iconName="user"
            titleName="Mi perfil"
            navigation={() => props.navigation.navigate("Mi perfil")}
          />
        </ScrollView>
      </View>

      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={logoutAccount}
        >
          <Icon
            style={{
              fontSize: 35,
              fontWeight: "bold",
              margin: 5,
              padding: 5,
              color: "#1F618D",
            }}
            name="window-close"
          />
          <Text style={styles.textCerrarSesion}> Cerrar sesion... </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={styles.viewDrawerMenu}>
        <View>
          <Icon style={styles.iconDrawerMenu} name={props.iconName} />
        </View>
        <View>
          <Text style={styles.textDrawerMenu}> {props.titleName} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Menu {...props} />}
        initialRouteName="Inicio"
      >
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Catalogo" component={Catalogo} />
        <Drawer.Screen name="Sucursales" component={Sucursales} />
        <Drawer.Screen name="Siguenos" component={Siguenos} />
        <Drawer.Screen name="Nosotros" component={Nosotros} />
        <Drawer.Screen name="Mi perfil" component={AccountStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containImage: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  containTextImagen: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textImagen: { color: "#039BE5", fontWeight: "bold", fontSize: 20 },
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
  viewDrawerMenu: {
    width: "100%",
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: 5,
  },
  textDrawerMenu: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    color: "#039BE5",
  },
  textCerrarSesion: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    color: "#1F618D",
  },
  iconDrawerMenu: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    color: "#039BE5",
  },
});
