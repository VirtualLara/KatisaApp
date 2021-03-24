import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo-app-loading';
import * as Font from 'expo-font';
import { Root } from 'native-base';
import { Ionicons} from '@expo/vector-icons';

import Login from './Vistas/Login.js';
import Principal from './Vistas/Principal.js';
import RecuperarPassword from './Vistas/RecuperarPassword.js';
import Registrarse from './Vistas/Registrarse.js';
import Sucursales from './Vistas/Sucursales.js';




/* export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      load: false 
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return (
          <AppLoading/>
      );
    }

    return (
      <Sucursales/>
    );
  }
} */


export default class App extends React.Component {

  render() {
      return (
        <Principal/>
    );
  }
}