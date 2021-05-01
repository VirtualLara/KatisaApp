import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";

import StatusBarMy from '../../Componentes/StatusBarMy';

export default function Account(props) {

  const openMyDrawer = props;


  return (
    <View>
      <Header hasTabs style={styles.headerPos}>
        <StatusBarMy backgroundColor="#29B6F6" />

        <View style={styles.headerContent} >
          <Icon
            name="bars" size={35} color="#1F618D"
            onPress={() => openMyDrawer.navigation.openDrawer()}
          />

          <Text style={styles.text}>
            Mi perfil
          </Text>

          <Icon name="user" size={40} color="white" />
        </View>

      </Header>

      <Text> mi perfil... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerPos: {
    flexDirection: 'row',
    width: "100%",
    alignItems: "center",
    backgroundColor: "#29B6F6",
  },
  header: {
    display: "flex",
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
