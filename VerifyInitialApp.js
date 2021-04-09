import React, { useState, useEffect, useMemo } from "react";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import AuthScreen from "./Vistas/Auth";
import Authcontext from "./context/Authcontext";
import { setTokenApi } from "./api/token";

import Drawer from "./Navigator/Drawer";

export default function VerifyInitialApp() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, []);

  const login = (user) => {
    console.log("LOGIN APP.JS");
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <Authcontext.Provider value={authData}>
      <PaperProvider>{auth ? <Drawer /> : <AuthScreen />}</PaperProvider>
    </Authcontext.Provider>
  );
}
