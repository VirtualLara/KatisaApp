import React from 'react'
import { View, StyleSheet, Image, Alert } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body, Form } from "native-base";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";


import { API_URL } from '../utils/constants';

import Favoritos from '../Componentes/FavoritesComponent';
import BtnCotizar from '../Componentes/BtnCotizar';




export default function ArticuloDetalles(props) {

    return (
        <Card style={styles.container}>

            <CardItem>
                <Text style={styles.textClave}>
                    {" "}
                    nombre: clave{" "}
                </Text>
            </CardItem>

            <View style={styles.card}>

                <View style={styles.containerImagen}>

                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail
                                    source={{
                                        uri:
                                            "data:image/png;base64,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",
                                    }}
                                />
                                <Body>
                                    <Text>Katisa</Text>
                                    <Text note>Iluminación LED</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <ZoomImage
                                source={{ uri: `${API_URL}` }}
                                imgStyle={styles.imagen}
                                style={styles.imagen}
                                duration={2000}
                                enableScaling={false}
                                easingFunc={Easing.ease}
                            />
                        </CardItem>
                    </Card>

                </View>

                <Card style={styles.containerPropiedad}>

                    <View style={styles.containerPropiedades}>
                        <Text style={styles.textNombrePropiedad}> Watts: </Text>
                        <Text style={styles.textPropiedad}> wattsW </Text>
                    </View>

                    <View style={styles.containerPropiedades}>
                        <Text style={styles.textNombrePropiedad}> Lumen: </Text>
                        <Text style={styles.textPropiedad}> lumenLM </Text>
                    </View>

                    <View style={styles.containerPropiedades}>
                        <Text style={styles.textNombrePropiedad}>
                            Temperatura Color:
                        </Text>
                        <Text style={styles.textPropiedad}>
                            temperaruraK
                        </Text>
                    </View>

                    <View style={styles.containerPropiedades}>
                        <Text style={styles.textNombrePropiedad}> Voltaje: </Text>
                        <Text style={styles.textPropiedad}>
                            voltajemin-voltajemaxV
                        </Text>
                    </View>

                    <View style={styles.containerPropiedades}>
                        <Text style={styles.textNombrePropiedad}> Medida: </Text>
                        <Text style={styles.textPropiedad}> medida MM </Text>
                    </View>

                </Card>

            </View>


            <View style={styles.contentCotizar}>

                <View style={{ width: '100%', height: "20%", justifyContent: 'center', alignItems: 'center' }} >
                    <Favoritos />
                </View>

                <View style={{ width: '100%', height: "20%", justifyContent: 'center', alignItems: 'center' }} >
                    <Form>
                        <CardItem>
                            <TextInput
                                placeholder="Cantidad:"
                                keyboardType="numeric"
                                style={{
                                    width: "100%",
                                    height: 50,
                                    textAlign: "center",
                                    borderWidth: 1,
                                }}

                            />
                        </CardItem>
                    </Form>
                </View>

                <View style={{ width: '100%', height: "20%", justifyContent: 'center', alignItems: 'center' }} >
                    <BtnCotizar />
                </View>
            </View>


        </Card>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 200,
    },
    textClave: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        backgroundColor: "#D4E6F1",
    },
    card: {
        width: "100%",
        flexDirection: "row",
    },
    containerImagen: {
        flexDirection: "column",
        width: "55%",
        height: 240,
        backgroundColor: "white",
    },

    imagen: {
        width: "100%",
        height: 120,
        resizeMode: "contain",
    },
    containerPropiedades: {
        height: "20%",
    },
    containerPropiedad: {
        flexDirection: "column",
        width: "45%",
        height: 240,
        borderColor: "black",
        borderWidth: 1,
    },
    textNombrePropiedad: {
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "#EBF5FB",
    },
    textPropiedad: {
        fontSize: 16,
    },
    btnCotizar: {
        width: "100%",
        height: "15%",
        backgroundColor: "green",
    },
    contentCotizar: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: "100%",

    },
    contentInput: {
        width: "50%",
    },
    contentBtn: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    contenttextFin: {
        justifyContent: "center",
        alignContent: "center",
        paddingTop: 50,
        paddingBottom: 150,
    },
});
