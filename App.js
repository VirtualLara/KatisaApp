import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Asset from "expo-asset";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Root from "native-base";
import { Ionicons } from "@expo/vector-icons";

import VerifyInitialApp from "./VerifyInitialApp";

import Aa from "./Vistas/Noticias";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
    };
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return <AppLoading />;
    } else {
      return (
        <>
          <VerifyInitialApp />
        </>
      );
    }
  }
}
