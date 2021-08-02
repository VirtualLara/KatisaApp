import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { Header } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";

import UseAuth from '../../hooks/UseAuth';
import { getMeApi } from '../../api/user';
import Loading from '../../Componentes/Loading';

import StatusBarMy from '../../Componentes/StatusBarMy';
import UserInfo from '../../Componentes/account/UserInfo';
import Menu from '../../Componentes/account/Menu';
import { colorMarca, iconDrawerMenu } from '../../utils/colores';


export default function Account(props) {

  const openMyDrawer = props;

  const [user, setUser] = useState(null);
  const { auth } = UseAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token)
        setUser(response)
      })()
    }, [])
  )



  return (

    <View style={{ flex: 1 }} >


      <Header hasTabs style={styles.headerPos}>
        <StatusBarMy backgroundColor={colorMarca} />
        <View style={styles.headerContent} >
          <Icon name="bars" size={35} color={iconDrawerMenu} onPress={() => openMyDrawer.navigation.openDrawer()} />
          <Text style={styles.text}> Mi perfil </Text>
          <Icon name="user" size={40} color="white" />
        </View>
      </Header>

      {!user ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Loading size='large' text="Cargando..." color={colorMarca} />
        </View>
      ) : (
        <ScrollView>
          <UserInfo user={user} />
          <Menu />
        </ScrollView >
      )
      }

    </View >

  );
}

const styles = StyleSheet.create({
  headerPos: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    alignItems: "center",
    backgroundColor: colorMarca,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
