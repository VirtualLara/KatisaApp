import React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import VerifyInitialApp from "./VerifyInitialApp";

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
