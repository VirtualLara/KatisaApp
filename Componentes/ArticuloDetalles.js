import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body, Form } from "native-base";
import { TextInput } from "react-native-paper";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";

import { API_URL } from '../utils/constants';
import { getProductApi } from '../api/products';

import Favoritos from '../Componentes/FavoritesComponent';
import BtnCotizar from '../Componentes/BtnCotizar';
import BtnPagar from '../Componentes/BtnPagar';
import { colorMarca } from '../utils/colores';

export default function ArticuloDetalles(props) {

    const { route } = props;
    const { params } = route;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        (async () => {
            const response = await getProductApi(params.idProduct);
            setProduct(response);
            setLoading(true);
        })()
    }, [params])

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    if (loading) {
        return (

            <Card style={styles.container}>

                <CardItem>
                    <Text style={styles.textClave}>
                        {product.descripcion}: {product.clave}
                    </Text>
                </CardItem>

                <View style={styles.card}>

                    <View style={styles.containerImagen}>

                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: `${API_URL}${product.logo.url}` }} />
                                    <Body>
                                        <Text note>KATISA</Text>
                                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }} >
                                            {product.pagar === true ? currencyFormat(product.precio) : "Por Pedido"}
                                        </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <ZoomImage
                                    source={{ uri: `${API_URL}${product.foto.url}` }}
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
                            <Text style={styles.textPropiedad}> {product.watts} W </Text>
                        </View>

                        <View style={styles.containerPropiedades}>
                            <Text style={styles.textNombrePropiedad}> Lúmenes: </Text>
                            <Text style={styles.textPropiedad}> {product.lumen} LM </Text>
                        </View>

                        <View style={styles.containerPropiedades}>
                            <Text style={styles.textNombrePropiedad}>Temperatura Color:</Text>
                            <Text style={styles.textPropiedad}>{product.temperatura} K</Text>
                        </View>

                        <View style={styles.containerPropiedades}>
                            <Text style={styles.textNombrePropiedad}> Voltaje: </Text>
                            <Text style={styles.textPropiedad}> {product.voltminimo}-{product.volmaximo}V</Text>
                        </View>

                        <View style={styles.containerPropiedades}>
                            <Text style={styles.textNombrePropiedad}> Medida: </Text>
                            <Text style={styles.textPropiedad}> {product.medida} MM </Text>
                        </View>

                    </Card>

                </View>


                <View style={styles.contentCotizar}>

                    <View style={styles.contentInput} >
                        <Form>
                            <CardItem>
                                <TextInput
                                    placeholder="Cantidad:"
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={text => setCantidad(parseInt(text))}
                                />
                            </CardItem>
                        </Form>
                    </View>

                    {product.pagar === true ?
                        <>
                            <View style={styles.contentBtn} >
                                <BtnPagar product={product} cantidad={cantidad} />
                            </View>

                            <View style={styles.contentBtn} >
                                <BtnCotizar product={product} cantidad={cantidad} />
                            </View>

                            <View style={styles.contentHeart} >
                                <Favoritos product={product} />
                            </View>
                        </>
                        :
                        <>
                            <View style={styles.contentBtn} >
                                <BtnCotizar product={product} cantidad={cantidad} />
                            </View>

                            <View style={styles.contentHeart} >
                                <Favoritos product={product} />
                            </View>
                        </>
                    }

                </View>

            </Card>


        )
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={colorMarca} size={75} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colorMarca }} > Obteniendo información...</Text>
            </View>
        )

    }

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
        justifyContent: 'flex-start',
        width: "100%",
        height: '60%',
    },
    contentInput: {
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "100%",
        height: 50,
        textAlign: "center",
        borderWidth: 1,
    },
    contentBtn: {
        marginTop: -10,
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentHeart: {
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
});
