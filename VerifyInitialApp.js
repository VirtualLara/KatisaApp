import React, { useState, useEffect, useMemo } from "react";
import { Alert, Text, View, Button } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import jwtDecode from "jwt-decode";

import AuthScreen from "./Vistas/Auth";
import Authcontext from "./context/Authcontext";
import { setTokenApi, getTokenApi, removeTokenApi } from "./api/token";

import Drawer from "./Navigator/Drawer";

export default function VerifyInitialApp() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if (token) {
        setAuth({
          token,
          idUser: jwtDecode(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = () => {
    if (auth) {
      removeTokenApi();
      setAuth(null);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
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
