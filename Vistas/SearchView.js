import React, { useState, useEffect, } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView, Image } from 'react-native';
import search from '../Componentes/search';
import { map, size } from 'lodash';

import Articulo from '../Componentes/Articulo';
import { searchProducstApi } from '../api/Search';

export default function SearchView(props) {

    const { route } = props;
    const { params } = route;
    const navigation = useNavigation();

    const [products, setProducts] = useState(null);
    const [data, setData] = useState(false);

    const goProduct = (id) => {
        navigation.push("ArticuloDetalles", { idProduct: id })
    }

    useEffect(() => {
        (async () => {
            setProducts(null);
            const response = await searchProducstApi(params.search);
            setProducts(response);
            setData(true);
            console.log(data)
        })()
    }, [params.search])

    if (data) {

        if (size(products) >= 1) {
            return (
                <View>
                    <ScrollView>
                        {map(products, (product) => (
                            <TouchableOpacity key={product._id}
                                onPress={() => goProduct(product._id)} >
                                <View>
                                    <Articulo
                                        nombre={product.descripcion}
                                        clave={product.clave}
                                        watts={product.watts}
                                        temperatura={product.temperatura}
                                        imagen={product.foto.url}
                                    />
                                </View>
                            </TouchableOpacity>
                        ))}

                        <View style={styles.contenttextFin} >
                            <Text style={styles.textFin}>
                                No hay mas artículos para mostrar...
                             </Text>
                        </View>
                    </ScrollView>
                </View>

            )
        } else {
            return (

                <View style={styles.container}>

                    <View style={styles.containerImage} >
                        <Image source={require('../Recursos/Imagenes/vectorRoto.png')} style={styles.image} />
                    </View>

                    <View style={styles.containerActivity} >
                        {/* <ActivityIndicator color='#29b6f6' size={100} /> */}
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#29b6f6' }} > No existen resultados...</Text>
                    </View>

                </View>

            )
        }

    } else {
        return (

            <View style={styles.container}>

                <View style={styles.containerActivity} >
                    <ActivityIndicator color='#29b6f6' size={100} />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#29b6f6' }} > Obteniendo Información...</Text>
                </View>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    contenttextFin: {
        justifyContent: "center",
        alignContent: "center",
        paddingTop: 50,
        paddingBottom: 150,
    },
    textFin: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#29b6f6",
        width: 'auto',
        textAlign: 'center'
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImage: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '40%',
        height: "80%",
        resizeMode: 'contain'
    },
    containerActivity: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});