import React, { Component } from 'react';
import { Image, View, StyleSheet, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import email from 'react-native-email';
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";

export default class CardSucursal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datos: {
                sucursal: '',
                calle: '',
                colonia: '',
                cp: '',
                horario_LV: '',
                horarioSab: '',
                celular: '',
                correo: '',
                telefono: '',
                foto: '',
                logo: '',
            }
        }
    }


    render() {

        return (

            <Container style={{ flex: 1 }}>

                <Content style={{ height: '70%' }} >
                    <Card>

                        <CardItem style={{ height: '20%' }} >
                            <Left>
                                <Thumbnail source={{ uri: this.props.logo }} />
                                <Body>
                                    <Text>Sucursal:</Text>
                                    <Text note> {this.props.sucursal} </Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <View style={{ height: '55%' }} >
                            <CardItem cardBody>
                                <ZoomImage
                                    resizeMode={'contain'}
                                    source={{ uri: this.props.foto }}
                                    imgStyle={{ height: 200, width: '100%', flex: 1, resizeMode: 'cover' }}
                                    style={{ height: 200, width: '100%', flex: 1, resizeMode: 'cover' }}
                                    duration={2000}
                                    enableScaling={false}
                                    easingFunc={Easing.ease}
                                />
                            </CardItem>
                        </View>

                        <CardItem style={{ display: 'flex', flexDirection: 'row', height: '20%' }} >

                            <View style={{ width: '35%', }} >
                                <Button transparent onPress={() => { Linking.openURL('whatsapp://send?text=' + 'Hola, me pongo en contacto desde su AppMovil para lo siguiente: ' + '&phone=52' + this.props.celular) }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                                    <Icon active name="logo-whatsapp" style={{ backgroundColor: 'white', color: '#00bb2d', fontSize: 40 }} />
                                    {/*  <Text style={{ color: '#00bb2d', }} >WhatsApp</Text> */}
                                </Button>
                            </View>

                            <View style={{ width: '33%', }} >
                                <Button transparent onPress={() => { Linking.openURL('tel:' + this.props.telefono) }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                                    <Icon active name="md-phone-portrait" style={{ color: '#0088cc', fontSize: 40 }} />
                                    {/* <Text style={{ color: '#0088cc' }} >Telefono</Text> */}
                                </Button>
                            </View>

                            <View style={{ width: '32%', }} >
                                <Button transparent onPress={
                                    () => {
                                        const to = [this.props.correo] // string or array of email addresses
                                        email(to, {
                                            // Optional additional arguments
                                            cc: ['katisa760917@gmail.com'], // string or array of email addresses
                                            bcc: 'virtual_lara@hotmail.com', // string or array of email addresses
                                            subject: 'Consulta desde AppMovil',
                                            body: 'Hola, me pongo en contacto con ustedes desde su AppMovil, para lo siguiente: '
                                        }).catch(console.error)
                                    }
                                }
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                                    <Icon active name="mail" style={{ color: '#db4a39', fontSize: 40 }} />
                                    {/* <Text style={{ color: '#db4a39' }} >Correo</Text> */}
                                </Button>
                            </View>

                        </CardItem>

                    </Card>
                </Content>

                <View style={{ height: '30%' }} >

                    {/*  <Text style={styles.direccion} > Direccion: </Text> */}

                    <View style={styles.contenido} >
                        <View style={styles.etiqueta} >
                            <Text style={styles.textEtiqueta} >Calle:</Text>
                        </View>
                        <View style={styles.dato} >
                            <Text style={styles.textDato} > {this.props.calle} </Text>
                        </View>
                    </View>

                    <View style={styles.contenido} >
                        <View style={styles.etiqueta} >
                            <Text style={styles.textEtiqueta} >Colonia:</Text>
                        </View>
                        <View style={styles.dato} >
                            <Text style={styles.textDato} > {this.props.colonia} </Text>
                        </View>
                    </View>

                    <View style={styles.contenido} >
                        <View style={styles.etiqueta} >
                            <Text style={styles.textEtiqueta} > C. P. : </Text>
                        </View>
                        <View style={styles.dato} >
                            <Text style={styles.textDato} > {this.props.cp} </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={styles.direccion} > Horarios: </Text>
                        </View>

                        <View style={{ width: '75%', }}  >
                            <View style={styles.contenido} >
                                <View style={styles.etiquetaHorario} >
                                    <Text style={styles.textEtiquetaHorario} > L-V:</Text>
                                </View>
                                <View style={styles.dato} >
                                    <Text style={styles.textDato} > {this.props.horario_LV} </Text>
                                </View>
                            </View>

                            <View style={styles.contenido} >
                                <View style={styles.etiquetaHorario} >
                                    <Text style={styles.textEtiquetaHorario} >Sábado:</Text>
                                </View>
                                <View style={styles.dato} >
                                    <Text style={styles.textDato} > {this.props.horarioSab} </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </Container>

        );
    }
}

const styles = StyleSheet.create({
    maquetacion: {
        flexDirection: 'column',
    },
    contenido: {
        flexDirection: 'row'
    },
    etiqueta: {
        flex: .6,
    },
    dato: {
        flex: 2,
    },
    direccion: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#08298A',
    },
    textEtiqueta: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0174DF',
    },
    textDato: {
        fontSize: 18,
        fontWeight: 'normal',
    },
    etiquetaHorario: {
        width: '25%',
    },
    textEtiquetaHorario: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0174DF',
    },
})