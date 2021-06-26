import React, { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Alert, ScrollView, ActivityIndicator } from "react-native";
import {
  Icon,
  Button,
  View,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from "native-base";

import { getNoticiasApi } from '../api/Noticias';
import { API_URL } from '../utils/constants';

import StatusBarMy from "../Componentes/StatusBarMy";


export default function Noticias(props) {

  const { navigation } = props;
  const [numNoticia, setNumNoticia] = useState(0);
  const [noticiasApi, setNoticiasApi] = useState(null);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getNoticiasApi();
        setNoticiasApi(response);
        setLoading(true)
      })()
    }, [])
  );

  if (loading) {

    return (

      <View style={{ flex: 1 }}>
        <StatusBarMy backgroundColor="#29b6f6" />

        <View style={styles.header}>
          <Icon
            name="menu"
            style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: 50,
              color: "#1F618D",
            }}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.textHeader}>
            Noticias Katisa
          </Text>
          <Icon
            name="book"
            style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
          />
        </View>

        <View style={styles.contentNoticia}>

          <View style={{ height: "100%" }}>

            <View style={{ height: "20%" }}>
              <CardItem style={{ height: "100%" }}>
                <Left>
                  <Thumbnail
                    source={{ uri: `${API_URL}${noticiasApi[numNoticia].logo.url}` }}
                  />
                  <Body>
                    <Text style={styles.title}>
                      {noticiasApi[numNoticia].titulo}
                    </Text>
                    <Text note>
                      {noticiasApi[numNoticia].subtitulo}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </View>

            <CardItem style={{ height: "70%" }}>
              <ScrollView>
                <Text style={styles.textnoticiasApi}>
                  {noticiasApi[numNoticia].parrafo1}
                  {"\n"}
                  {"\n"}
                  {noticiasApi[numNoticia].parrafo2}
                  {"\n"}
                  {"\n"}
                  {noticiasApi[numNoticia].parrafo3}
                  {"\n"}
                  {"\n"}
                  {noticiasApi[numNoticia].parrafo4}
                  {"\n"}
                  {"\n"}
                  {noticiasApi[numNoticia].parrafo5}
                </Text>
              </ScrollView>
            </CardItem>

            <View style={styles.contentBoton}>

              <View>
                <Button
                  iconLeft
                  onPress={() => {
                    if (numNoticia !== 0) {
                      setNumNoticia(numNoticia - 1);
                    } else {
                      Alert.alert(
                        "Esta es la primer noticia." +
                        `\n` +
                        "No hay más para mostar..."
                      );
                    }
                  }}
                  style={styles.buttonArrow}
                >
                  <Icon name="arrow-back" style={styles.iconArrow} />
                  <Text style={styles.textButtonArrow}> Anterior </Text>
                </Button>
              </View>

              <View>
                <Button
                  iconRight
                  onPress={() => {
                    if (numNoticia <= noticiasApi.length - 2) {
                      setNumNoticia(numNoticia + 1);
                    } else {
                      Alert.alert(
                        "Esta es la última noticia." +
                        `\n` +
                        "En breve publicaremos..."
                      );
                    }
                  }}
                  style={styles.buttonArrow}
                >
                  <Text style={styles.textButtonArrow}> Siguiente </Text>
                  <Icon name="arrow-forward" style={styles.iconArrow} />
                </Button>
              </View>

            </View>
          </View>
        </View >

      </View >

    )

  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarMy backgroundColor="#29b6f6" />

        <View style={styles.header}>
          <Icon
            name="menu"
            style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: 50,
              color: "#1F618D",
            }}
            onPress={() => navigation.openDrawer()}
          />

          <Text style={styles.textHeader}>
            <Icon
              name="book"
              style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
            />{" "}
            Noticias Katisa{" "}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color='#29b6f6' size={75} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo información...</Text>
        </View>

      </View>
    )
  }


}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    height: "8%",
  },
  textHeader: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    height: "auto",
  },
  contentNoticia: {
    width: "100%",
    height: "92%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B2631",
  },
  textNoticia: {
    textAlign: "justify",
    fontSize: 18,
  },
  contentBoton: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#34495E",
  },
  buttonArrow: {
    backgroundColor: "#29b6f6",
  },
  textButtonArrow: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textFooter: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
