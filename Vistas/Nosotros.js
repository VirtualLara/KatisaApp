import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Header, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import StatusBarMy from '../Componentes/StatusBarMy';

export default class Nosotros extends Component {
    render() {
        return (
            <View>

                <Header hasTabs style={styles.headerPos}>
                    <StatusBarMy backgroundColor='#29B6F6' />
                    <Icon name="arrow-left" size={35} color="#1F618D" onPress={ () => this.props.navigation.openDrawer() } />
                    <Text>     {"\n"} </Text>
                    <View styles={styles.header}>
                    <Text style={styles.text}>
                        Historia Katisa  <Icon name="building" size={40} color="white" />
                    </Text>
                    </View>
                </Header>

                <Text> Katisa Iluminacion LED </Text>
                <Text> {"\n"} </Text>
                <Text> Es una empresa mexicana de origen xalapeño. Fundada en el año 2016, con la intencion de 
                        proveer a la poblacion de la capital del estado veracruzano, asi como de sus alrededores
                        de todo tipo de artefactos para la iluminacionde sus hogares, empresas, escuelasm obras 
                        o cualquier espacio que requiera de iluminacion, ya que el giro al que se dedica la empresa
                        es venta de iluminacion en general. </Text>

                <Header hasTabs style={styles.headerPos}>
                    <View styles={styles.header}>
                    <Text style={styles.text}>
                        Mision  <Icon name="building" size={40} color="white" />
                    </Text>
                    </View>
                </Header>

                <Text> Proveer arteefactos de iluminacion con gatantia de calidad para toda la poblacion que lo requira. </Text>

                <Header hasTabs style={styles.headerPos}>
                    <StatusBarMy backgroundColor='#29B6F6' />
                    <Text>     {"\n"} </Text>
                    <View styles={styles.header}>
                    <Text style={styles.text}>
                        Vision  <Icon name="building" size={40} color="white" />
                    </Text>
                    </View>
                </Header>

                <Text> Ser el mayor proveedor a nivel local y estatal de iluminacion.  </Text>
                
                <Header hasTabs style={styles.headerPos}>
                    <StatusBarMy backgroundColor='#29B6F6' />
                    <Text>     {"\n"} </Text>
                    <View styles={styles.header}>
                    <Text style={styles.text}>
                        Valores  <Icon name="building" size={40} color="white" />
                    </Text>
                    </View>
                </Header>

                <Text> En Katisa estamos comprometidos con nuestros clientes con: </Text>
                <Text> * Respeto </Text>
                <Text> * Honestidad </Text>
                <Text> * Puntualidad </Text>
                <Text> * Empatia </Text>
                <Text> * Tolerancia </Text>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerPos: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#29B6F6",
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
    },
  });
  
