import React, { useState } from "react";
import { View, KeyboardAvoidingView, StyleSheet, Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import RegisterScreeen from "./Registrarse";
import LoginScreen from "./Login";

const Auth = () => {
  const [login, setlogin] = useState(true);

  const changeForm = () => setlogin(!login);

  return (
    <View style={styles.inner}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset="-150"
        style={styles.container}
      >
        {login ? (
          <LoginScreen changeForm={changeForm} />
        ) : (
          <RegisterScreeen changeForm={changeForm} />
        )}
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

export default Auth;
