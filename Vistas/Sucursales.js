import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Alert } from "react-native";
import { Container, Header, Tab, Tabs, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { map } from 'lodash';

import { getCitysApi } from '../api/Sucursales';

import StatusBarMy from '../Componentes/StatusBarMy';
import Sucursal from "../Vistas/Sucursal";

export default function Sucursales(props) {

  const { navigation } = props;
  const [citys, setCitys] = useState(null);


  useEffect(() => {
    (async () => {
      const response = await getCitysApi();
      setCitys(response);
    })()
  });

  /*   useFocusEffect(
      useCallback(() => {
        (async () => {
          const response = await getCitysApi();
          setCitys(response);
        })()
      }, [])
    );
   */

  return (
    <Container>
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

      {<Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: "white" }}>
        {map(citys, (city) => (

          <Tab
            key={city._id}
            heading={city.nombreciudad}
            tabStyle={{ backgroundColor: "#29B6F6" }}
            textStyle={{ color: "black", fontWeight: "bold" }}
            activeTabStyle={{ backgroundColor: "#0288D1" }}
          >

            {/*  {<Sucursal op={city.nombreciudad} />} */}

          </Tab>

        ))}

      </Tabs>}

    </Container>

  )
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