import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import RegisterScreeen from "../Vistas/Registrarse";
import LoginScreen from "../Vistas/Login";

const AppFirst = () => {
  const [login, setlogin] = useState(undefined);

  const changeForm = () => setlogin(!login);

  return (
    <View style={styles.inner}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset="-150"
        style={styles.container}
      >
        {login ? <LoginScreen /> : <RegisterScreeen changeForm={changeForm} />}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 0,
    margin: 0,
    flex: 1,
    justifyContent: "space-around",
  },
});

export default AppFirst;
