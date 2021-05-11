import React, { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Header, Text } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { map } from 'lodash';

import StatusBarMy from "../Componentes/StatusBarMy";
import CardInfoNosotros from "../Componentes/CardInfoNosotros";

import { getNosotrosApi } from '../api/Nosotros';


export default function Nosotros(props) {

  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getNosotrosApi();
        setCards(response);
        setLoading(true)
      })()
    }, [])
  );


  if (loading) {
    return (
      <View>
        <Header hasTabs style={styles.headerPos}>
          <StatusBarMy backgroundColor="#29B6F6" />
          <Icon
            name="bars"
            size={35}
            color="#1F618D"
            onPress={() => navigation.openDrawer()}
          />
          <Text> {"\n"} </Text>
          <View styles={styles.header}>
            <Text style={styles.textHeader}>
              NOSOTROS <Icon name="building" size={40} color="white" />
            </Text>
          </View>
        </Header>

        <ScrollView>
          {map(cards, (card) => (
            <View key={card._id}>
              <CardInfoNosotros
                title={card.titulo}
                subtitle={card.subtitulo}
                parrafo1={card.parrafo1}
                parrafo2={card.parrafo2}
                parrafo3={card.parrafo3}
                parrafo4={card.parrafo4}
                parrafo5={card.parrafo5}
                image={card.logo.url}
              />
            </View>
          ))}
        </ScrollView>

      </View>
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
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  parrafo: {
    textAlign: "justify",
  },
});
