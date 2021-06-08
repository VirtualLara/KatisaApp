import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Alert, Linking, Picker } from 'react-native';
import { Header, Item, } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import email from 'react-native-email';
import { size, map } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import { getProductCotizacionApi } from '../api/cotizacion';
import { getCitysApi, getStoresXalapaApi, getStoresVeracruzApi, getStoresCordobaApi } from '../api/Sucursales';
import CotizacionList from '../Componentes/CotizacionList';
import { Button, Checkbox, } from 'react-native-paper';
import { vaciarCotizacion } from '../api/cotizacion';
import { color } from 'react-native-reanimated';

export default function Cotizacion() {

    const navigation = useNavigation();
    const [cotizacion, setCotizacion] = useState(null);
    const [products, setProducts] = useState(null);
    const [reloadCotizacion, setReloadCotizacion] = useState(false);

    const [checked, setChecked] = useState('');
    const [selected, setSelected] = useState('');
    const [tienda, setTienda] = useState('')

    const [citys, setCitys] = useState(null);
    const [xalapaArray, setXalapaArray] = useState(null);
    const [veracruzArray, setVeracruzArray] = useState(null);
    const [cordobaArray, setcordobaArray] = useState(null);

    const loadCotizacion = async () => {
        setCotizacion(null)
        const response = await getProductCotizacionApi();
        setCotizacion(response);
    }

    const ArrayCovertToString = () => {
        let array = []
        {
            map(products, (art) => (
                array.push(`Requiero: ${art.quantity} - ${art.clave} - ${art.descripcion}`)
            ))
        }
        const string = ((array.join('\n')).toString())
        return string
    }

    const sendMail = () => {
        const to = ['virtual060591lara@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['virtual_lara@hotmail.com'], // string or array of email addresses
            bcc: 'virtual_lara@hotmail.com', // string or array of email addresses
            subject: 'Consulta desde AppMovil',
            body: 'Hola, me pongo en contacto con ustedes desde su AppMovil, para solicitar me cotice lo siguiente: ' +
                `${'\n'}` +
                `${'\n'}` +
                ArrayCovertToString() +
                `${'\n'}` +
                `${'\n'}` +
                'Quedo pendiente de su pronta respuesta.'

            //`${products[0].quantity} - ${products[0].clave} - ${products[0].descripcion}`
        }).catch(console.error)
        //vaciarCotizacion()
        //navigation.navigate('Inicio')
    }

    const llenarSucursales = (val) => {
        switch (val) {
            case 'Xalapa': {
                return (
                    <Picker>
                        {map(xalapaArray, (sucursal) => (
                            <Picker.Item label={sucursal.namesuc} value={sucursal.namesuc} key={sucursal._id} />,
                            console.log(sucursal.namesuc)
                        ))}
                    </Picker>
                )
                break;
            }
            case 'Veracruz': {
                map(veracruzArray, (sucursal) => (
                    <Picker.Item label={sucursal.namesuc} value={sucursal.namesuc} key={sucursal._id} />,
                    console.log(sucursal.namesuc)
                ))
                break;
            }
            case 'Cordoba': {
                map(cordobaArray, (sucursal) => (
                    <Picker.Item label={sucursal.namesuc} value={sucursal.namesuc} key={sucursal._id} />,
                    console.log(sucursal.namesuc)
                ))
                break;
            }
            default:
                <Picker.Item label='Selecciona una ciudad...' value='' />
                break;
        }
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getCitysApi();
                setCitys(response);
                const responseXalapa = await getStoresXalapaApi();
                setXalapaArray(responseXalapa);
                const responseVeracruz = await getStoresVeracruzApi();
                setVeracruzArray(responseVeracruz);
                const responseCordoba = await getStoresCordobaApi();
                setcordobaArray(responseCordoba);
            })()
            loadCotizacion();
        }, [],
        )
    )

    useEffect(() => {
        if (reloadCotizacion) {
            loadCotizacion();
            setReloadCotizacion(false);
        }
    }, [reloadCotizacion])

    if (size(cotizacion) > 0) {
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
                            Mi cotización <Icon name="list-alt" size={40} color="white" />
                        </Text>
                    </View>
                </Header>

                <ScrollView>
                    <CotizacionList
                        cotizacion={cotizacion}
                        products={products}
                        setProducts={setProducts}
                        setReloadCotizacion={setReloadCotizacion}
                    />


                    <View>
                        <Text>{'\n'}</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', }}  > 1 - Selecciona una ciudad: </Text>
                        <Picker selectedValue={selected} onValueChange={(text) => setSelected(text)} >
                            {
                                map(citys, (ciudad) => (
                                    <Picker.Item label={ciudad.nombreciudad} value={ciudad.nombreciudad} />
                                ))
                            }
                        </Picker>

                        <Text style={{ fontSize: 25, fontWeight: 'bold', }}  > 2 - Selecciona una sucursal: </Text>
                        {selected !== ''
                            ? llenarSucursales(selected)
                            : llenarSucursales('Xalapa')}

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                                color={'#29b6f6'}
                                fontSize={50}
                            />
                            <Text style={{ fontSize: 25, fontWeight: 'bold', }}  > 3 - Selecciona un medio: </Text>
                        </View>
                    </View>

                    {
                        checked
                            ? <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center' }} >
                                    <Button transparent
                                        onPress={sendMail}
                                        style={{ height: 60, width: '95%', justifyContent: 'center', alignItems: 'center' }} >
                                        <Icon active name="envelope" style={{ color: '#db4a39', fontSize: 50 }} />
                                    </Button>
                                </View>

                                <View style={{ width: '40%', }} >
                                    <Button transparent onPress={() => {
                                        Linking.openURL('whatsapp://send?text=' +
                                            'Hola, me pongo en contacto desde su AppMovil para solicitar informes de lo siguiente: ' +
                                            `${'\n'}` +
                                            `${'\n'}` +
                                            ArrayCovertToString() +
                                            `${'\n'}` +
                                            `${'\n'}` +
                                            'Quedo pendiente de su respuesta, Saludos.' +
                                            '&phone=52' +
                                            '2831105687')
                                    }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                                        <Icon active name="whatsapp" style={{ color: '#00bb2d', fontSize: 50 }} />
                                    </Button>
                                </View>
                            </View>
                            : <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                                <Text> Selecciona solicitar informes... </Text>
                            </View>
                    }

                </ScrollView>

            </View >
        )
    } else {
        return (
            <>
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
                            Mi cotización <Icon name="list-alt" size={40} color="white" />
                        </Text>
                    </View>
                </Header>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
                    <Image source={require('../Recursos/Imagenes/logored.png')} style={{ width: 200, height: 200 }} />
                    <Text> {'\n'} </Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#29b6f6' }} > Agrega algo para cotizar...</Text>
                </View>
            </>
        )

    }

}

const styles = StyleSheet.create({
    headerPos: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#29B6F6",
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});