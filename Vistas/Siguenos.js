import React, { useState, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Linking, ScrollView, } from "react-native";
import { Header, Button, Text } from "native-base";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { map } from 'lodash';
import Icon from "react-native-vector-icons/FontAwesome";

import StatusBarMy from "../Componentes/StatusBarMy";
import { getRedesApi } from '../api/redes';

export default function Siguenos(props) {

  const [redes, setRedes] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getRedesApi();
        setRedes(response)
        console.log(response)
      })()
    }, [])
  )

  return (
    <View style={{ flex: 1 }} >
      <View style={{ height: '8%', }} >
        <Header hasTabs style={styles.headerPos}>
          <StatusBarMy backgroundColor="#29B6F6" />
          <Icon name="bars" size={35} color="#1F618D" onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.text}>
            Siguenos
          </Text>
          <Icon name="arrow-right" size={40} color="white" />
        </Header>
      </View>

      <View style={{ height: '82%' }} >
        <ScrollView>
          {map(redes, (red) => (
            <TouchableOpacity
              key={red._id}
              style={styles.touchable}
              onPress={async () => {
                await Linking.openURL(red.link);
              }}
            >
              <View style={{ backgroundColor: red.colorcontenedor, width: '100%', flexDirection: 'row' }} >
                {/* Lin para buscar fb id:  https://roadtoblogging.com/get-facebook-page-id*/}
                < View style={styles.contentLogo} >
                  <Icon name={red.logonombre} size={50} color={red.colorlogo} />
                </View>
                <View style={styles.contentNombreRed}      >
                  <Text style={{ fontWeight: "bold", fontSize: 18, color: red.colortexto }}>
                    {red.nombre}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.contentRegresar}                >
        <View style={{ alignItems: "center", justifyContent: "center", width: "100%", flexDirection: "row", }}          >
          <Button backgroundColor="#29B6F6" onPress={() => navigation.openDrawer()}                        >
            <Icon name="arrow-left" size={30} color="white" fontWeight="bold" />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Regresar</Text>
          </Button>
        </View>
      </View>


    </View >
  )
}


const styles = StyleSheet.create({
  headerPos: {
    backgroundColor: "#29B6F6",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingTop: 20,
  },
  contentLogo: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "15%",
  },
  contentNombreRed: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "80%",
  },
  contentRegresar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: '10%',
  },
});
