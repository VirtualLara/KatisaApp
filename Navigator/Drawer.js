import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, Platform, SafeAreaView, ScrollView, TouchableOpacity, ProgressViewIOSComponent, } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from "../Vistas/Login";
import RecuperarPassword from "../Vistas/RecuperarPassword";
import Inicio from "../Vistas/Inicio";
import Registrarse from "../Vistas/Registrarse";
import Sucursales from "../Vistas/Sucursales";

import BarMy from '../Componentes/StatusBarMy';

function Menu(props) {
  return (
    <View>
      <BarMy backgroundColor='#29B6F6' />
      <View style={{ width: '100%', height: 200, }}>
        <View style={{ width: '100%', height: '100%', }} >
          <TouchableOpacity>
            <View style={{ width: '100%', height: 150, alignItems: 'center', justifyContent: 'center', }} >
              <Image source={require('../Recursos/Imagenes/logo.png')} style={{ width: '95%', height: '95%', resizeMode: 'contain' }} />
            </View>
            <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', }} >
              <Text style={{ color: '#039BE5', fontWeight: 'bold', fontSize: 20, }} > Los expertos en iluminación </Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu iconName='home' titleName='Inicio' navigation={() => props.navigation.navigate('Inicio')} />
        <DrawerMenu iconName='building' titleName='Sucursales' navigation={() => props.navigation.navigate('Sucursales')} />
      </View>
    </View>
  )
}

function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation} >
      <View style={{ width: '100%', flexDirection: 'row', margin: 10, paddingHorizontal: 5 }}>
        <View>
          <Icon style={{ fontSize: 22, fontWeight: 'bold', margin: 5, paddiing: 5, color: '#039BE5' }} name={props.iconName} />
        </View>
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 5, paddiing: 5, color: '#039BE5' }}> {props.titleName} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />} initialRouteName="Inicio">
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
      statusBar: {
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
