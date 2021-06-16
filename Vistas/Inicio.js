import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ScrollView, ActivityIndicator, } from "react-native";
import { View, Header, Button, Text, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { size } from 'lodash';

import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";
import { getrifaApi, getOfertasApi } from '../api/rifa';
import { API_URL } from '../utils/constants';

import BannersComponent from "../Componentes/BannersComponent";
import StatusBarMy from "../Componentes/StatusBarMy";
import Popover from "../Componentes/Popover";

export default function Inicio(props) {

  const { navigation } = props;
  const [rifaApi, setRifaApi] = useState(null);
  const [ofertarApi, setOfertarApi] = useState(null);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getrifaApi();
        setRifaApi(response);
        const responseOfertas = await getOfertasApi();
        setOfertarApi(responseOfertas);
        setLoading(true);
      })()
    }, [])
  );



  if (loading) {

    return (
      <View style={{ flex: 1 }} >

        <View style={{ height: 'auto' }} >
          <Header style={styles.header}>
            <StatusBarMy backgroundColor="#29B6F6" />
            <Button style={{ backgroundColor: "#29B6F6" }} onPress={() => navigation.openDrawer()}>
              <Icon name="bars" style={{ fontWeight: "bold", color: "#1F618D", fontSize: 40 }} />
            </Button>
            <Text style={styles.textHeader}> ¡Promociones y más! </Text>
          </Header>
        </View>

        {size(rifaApi) > 0 ?
          <View style={{ height: '100%', flex: 1 }} >

            <View style={{ height: '35%', }} >
              <BannersComponent />
            </View>

            <View style={{ height: '55%', }} >

              <View style={styles.contentInfoRifa} >
                <View style={styles.headerOferta}>
                  <Icon name="archive" style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }} />
                  <Text style={styles.textHeader}>Rifa de temporada</Text>
                </View>

                <View style={styles.contentTitleRifa}>
                  <Text style={styles.titleRifa}> {rifaApi[0].titulo}</Text>
                </View>

                <View>
                  <Text style={styles.textRifa}> {rifaApi[0].subtitulo} </Text>
                </View>
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

              <View style={styles.contentTxtVigencia} >
                <Text style={styles.titleTextRifa}>Vigencia: </Text>
                <Text style={styles.textVigencia}>{rifaApi[0].fechini} - {rifaApi[0].fechfin}</Text>
              </View>



            </View>

            <View style={{ height: '10%', }} >

              <View style={{ flexDirection: 'row' }} >
                <View style={styles.contentTexBoletos} >
                  <Text style={styles.textBoletos}> Como obtener boletos...  </Text>
                  <Icon name='arrow-right' size={20} style={{ color: 'blue' }} />
                  <Icon name='chevron-right' size={20} style={{ color: 'blue' }} />
                  <Icon name='chevron-right' size={20} style={{ color: 'blue' }} />
                </View>

                <View style={styles.contentBotonBoletos} >
                  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                    <Popover />
                  </View>
                </View>
              </View>

            </View>

          </View>
          :
          <View style={{ height: '100%', flex: 1 }}  >

            <View style={{ height: '35%', }} >
              <BannersComponent />
            </View>

            <View style={{ height: '65%', width: '100%', }} >

              <View style={{ height: '15%', flexDirection: 'row', width: '100%', backgroundColor: '#00b0f0', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={styles.textHeader}>  ***Ofertas del mes*** </Text>
              </View>

              <View style={{ height: '30%', flexDirection: 'row' }} >
                <View style={{ width: '40%', height: '100%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta1.url}`
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

                <View style={{ width: '60%', borderColor: 'blue', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta2.url}`
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

              <View style={{ height: '30%', flexDirection: 'row', }} >
                <View style={{ width: '60%', borderColor: 'blue', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta3.url}`
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

                <View style={{ width: '40%', height: '100%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta4.url}`
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

              <View style={{ height: '25%', flexDirection: 'row' }} >

                <View style={{ width: '25%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta5.url}`
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

                <View style={{ width: '25%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta6.url}`
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

                <View style={{ width: '25%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta7.url}`
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

                <View style={{ width: '25%', borderWidth: 2, borderColor: 'black' }} >
                  <ZoomImage
                    resizeMode={'cover'}
                    source={{
                      uri: `${API_URL}${ofertarApi[0].oferta8.url}`
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
        }

      </View>
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
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
  },
  textHeader: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerOferta: {
    flexDirection: 'row',
    backgroundColor: '#29b6f6',
    justifyContent: 'center',
    alignContent: 'center'
  },
  contentInfoRifa: {
    height: '45%'
  },
  contentTitleRifa: {
    justifyContent: 'center',
    alignContent: 'center',

  },
  titleRifa: {
    textAlign: 'center',
    fontSize: 'bold',
    fontSize: 25,
    color: 'green',
  },
  textRifa: {
    fontSize: 16,
    color: 'darkblue',
  },
  titleTextRifa: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold'
  },
  contentImageRifa: {
    height: '45%',
    width: '100%'
  },
  contentTxtVigencia: {
    height: '10%',
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textVigencia: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  contentPopover: {
    height: '15%',
    flexDirection: 'row'
  },
  contentTexBoletos: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textBoletos: {
    fontWeight: "bold",
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
  contentBotonBoletos: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
