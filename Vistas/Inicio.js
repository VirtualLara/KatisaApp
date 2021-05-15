import React, { useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { View, Header, Button, Text, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";
import { getrifaApi } from '../api/rifa';
import { API_URL } from '../utils/constants';

import BannersComponent from "../Componentes/BannersComponent";
import StatusBarMy from "../Componentes/StatusBarMy";
import Popover from "../Componentes/Popover";

export default function Inicio(props) {

  const { navigation } = props;
  const [rifaApi, setRifaApi] = useState(null);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getrifaApi();
        setRifaApi(response);
        setLoading(true);
      })()
    }, [])
  );


  if (loading) {

    return (
      <ScrollView style={styles.content}>

        <Header style={styles.header}>
          <StatusBarMy backgroundColor="#29B6F6" />

          <Button
            style={{ backgroundColor: "#29B6F6" }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon
              name="bars"
              style={{ fontWeight: "bold", color: "#1F618D", fontSize: 40 }}
            />
          </Button>
          <Text style={styles.textHeader}> ¡Promociones y más! </Text>
        </Header>

        <View style={styles.contentCarousel}>
          <BannersComponent />
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.headerOferta}>
            <Text style={styles.textHeader}>
              <Icon
                name="archive"
                style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
              />{" "}
                Rifa de temporada{" "}
            </Text>
          </View>

          <View style={styles.contentOferta}>

            <View style={styles.contentTitleRifa}>
              <Text style={styles.titleRifa}>
                {rifaApi[0].titulo}
              </Text>
            </View>

            <View style={styles.imageArea}>

              <View style={styles.contentDatos}>

                <View style={{ height: 110 }}>
                  <Text style={styles.titleTextRifa}>Actividad:</Text>
                  <Text style={styles.textRifa}>
                    {rifaApi[0].subtitulo}
                  </Text>
                </View>

                <View>
                  <Text style={styles.titleTextRifa}>Vigencia:</Text>
                  <Text style={styles.subtitleTextRifa}>Inicia:</Text>
                  <Text style={styles.textRifa}>{rifaApi[0].fechini}</Text>
                  <Text style={styles.subtitleTextRifa}>Termina:</Text>
                  <Text style={styles.textRifa}> {rifaApi[0].fechfin} </Text>
                </View>

                <Text style={{ fontWeight: "bold" }}> Obtener Boletos </Text>

                <Popover />

              </View>

              <View style={styles.contentImageRifa}>

                <ZoomImage
                  resizeMode={'cover'}
                  source={{
                    uri: `${API_URL}${rifaApi[0].imagen.url}`
                  }}
                  imgStyle={{
                    height: '100%',
                    width: '100%',
                  }}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  duration={2000}
                  enableScaling={false}
                  easingFunc={Easing.ease}
                />
              </View>

            </View>
          </View>
        </View>

      </ScrollView>
    )

  } else {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#29b6f6' size={75} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo información...</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    height: "auto",
  },
  textHeader: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    height: "auto",
  },
  contentCarousel: {
    height: "auto",
  },
  textFooter: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  headerOferta: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    height: "10%",
  },
  contentOferta: {
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
  },
  contentTitleRifa: {
    height: "10%",
    width: "100%",
  },
  titleRifa: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "purple",
  },
  imageArea: {
    flexDirection: "row",
    height: "90%",
  },
  contentImageRifa: {
    width: "60%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentDatos: {
    width: "40%",
    height: "100%",
  },
  titleTextRifa: {
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "#4A235A",
    backgroundColor: "#D4E6F1",
  },
  subtitleTextRifa: {
    paddingLeft: 5,
    fontWeight: "bold",
    fontSize: 18,
    color: "#C0392B",
  },
  textRifa: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#2E86C1",
  },
  textBases: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#F1C40F",
    textAlign: "center",
    backgroundColor: "#212F3D",
  },
});
