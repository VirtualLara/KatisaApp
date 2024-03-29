import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import Popover from "react-native-popover-view";
import Icon from "react-native-vector-icons/FontAwesome";

import { colorMarca } from '../utils/colores';

export default function App() {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setShowPopover(true)}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 130,
            height: 80,

            margin: -5,
          }}
        >
          <View style={styles.btnObtenBoletos} >
            <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name="ticket"
                style={{ fontWeight: "bold", color: "#F1C40F", fontSize: 45, }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Popover
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
      >
        <Text style={styles.titlePasos}>Obten tus boletos...</Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="map" style={styles.iconStyle} />
            <Text style={styles.title}>Paso1:</Text>
          </View>
          <Text style={styles.text}>
            Visita cualquiera de nuestras sucursales.
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="facebook" style={styles.iconStyle} />
            <Text style={styles.title}>Paso2:</Text>
          </View>
          <Text style={styles.text}>Ingresa a nuestro perfil de Facebook.</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="thumbs-up" style={styles.iconStyle} />
            <Text style={styles.title}>Paso3:</Text>
          </View>
          <Text style={styles.text}>Dale LIKE a nuestra publicación.</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="edit" style={styles.iconStyle} />
            <Text style={styles.title}>Paso4:</Text>
          </View>
          <Text style={styles.text}>Comenta nuestra publicación.</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="share-square" style={styles.iconStyle} />
            <Text style={styles.title}>Paso5:</Text>
          </View>
          <Text style={styles.text}>Comparte nuestra publicación.</Text>
        </View>
        <View>
          <Text> {"\n"}</Text>
        </View>
        <View>
          <Text style={styles.textFacil}> Así de fácil es ganar...</Text>
          <Text style={styles.textSuerte}>¡Mucha suerte...!</Text>
        </View>
      </Popover>
    </>
  );
}

const styles = StyleSheet.create({
  titlePasos: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colorMarca,
  },
  title: {
    paddingLeft: 10,
    marginLeft: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "darkgreen",
  },
  btnObtenBoletos: {
    backgroundColor: "#212F3D",
    borderRadius: 20,
    height: 50,
    borderColor: "silver",
    borderWidth: 3,
    width: '100%'
  },
  text: {
    paddingLeft: 25,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
  },
  textFacil: {
    fontSize: 30,
    fontWeight: "bold",
    color: colorMarca,
    textAlign: "center",
  },
  textSuerte: {
    fontSize: 40,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  iconStyle: {
    paddingLeft: 10,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#0B5345",
    fontSize: 40,
  },
});
