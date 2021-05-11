import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Container, Header, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import { getCitysApi } from '../api/Sucursales';

import StatusBarMy from '../Componentes/StatusBarMy';
import ListCiudades from '../Componentes/ListCiudades';

export default function Sucursales(props) {

  const { navigation } = props;
  const [citys, setCitys] = useState(null);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getCitysApi();
        setCitys(response);
        setLoading(true)
      })()
    }, [])
  );

  if (loading) {
    return (
      <Container style={{ flex: 1 }}>
        <Header hasTabs style={styles.headerPos}>
          <StatusBarMy backgroundColor='#29b6f6' />
          <Icon
            name="bars"
            size={35}
            color="#1F618D"
            onPress={() => navigation.openDrawer()}
          />
          <View styles={styles.header}>
            <Text style={styles.text}>
              Ubicanos <Icon name="map-marker-alt" size={40} color="white" />
            </Text>
          </View>
        </Header>

        { citys && <ListCiudades citys={citys} />}

      </Container>

    )

  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#29b6f6' size={75} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obtieniendo información...</Text>
      </View>
    )
  }



}

const styles = StyleSheet.create({
  headerPos: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#29B6F6",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
})