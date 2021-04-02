import React, { Component } from 'react';
import { Image, Alert, View, StyleSheet, Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, 
         Text, Button, Icon, Left, Body, Right } from 'native-base';
import email from 'react-native-email';

export default class CardSucursal extends Component {

    constructor(props){
        super(props)

        this.state={
            datos:{
                sucursal:'',
                calle:'',
                colonia:'',
                cp:'',
                horario_LV:'',
                horarioSab:'',
                celular:'',
                correo:'',
                telefono:'',
                foto:'',
            }
        }
    }
    
    
    render() {

        return (

            <Container>

                <Content>
                    <Card>

                        <CardItem>
                            <Left>
                            <Thumbnail source={{uri: 'https://http2.mlstatic.com/foco-led-60w-philips-806lm-4-pack-D_NQ_NP_905862-MLM27120133365_042018-F.jpg'}} />
                            <Body>
                                <Text>Sucursal:</Text>
                                <Text note> {this.props.sucursal} </Text>
                            </Body>
                            </Left>
                        </CardItem>

                        <CardItem cardBody>
                            <Image source= { this.props.foto }
                                            style={{height: 200, width: null, flex: 1, resizeMode: 'cover'}}/>
                        </CardItem>

                        <CardItem style={{ display: 'flex', flexDirection: 'row' }} >

                            <View style={{ width: '35%', }} >
                                <Button transparent onPress = { () => { Linking.openURL('whatsapp://send?text=' + 'Hola, me pongo en contacto desde su AppMovil para lo siguiente: ' + '&phone=52' + this.props.celular ) } }                                   
                                        style={{ display:'flex' , flexDirection: 'column', alignItems: 'center',  }} >
                                    <Icon active name="logo-whatsapp" style={{ backgroundColor: 'white', color: '#00bb2d', }} />
                                    <Text style={{ color: '#00bb2d' }} >WhatsApp</Text>                         
                                </Button>
                            </View>

                            <View style={{ width: '33%', }} >
                                <Button transparent onPress = { () => {Alert.alert('me aplastaste son telefono')} } 
                                        style={{ display:'flex' , flexDirection: 'column', alignItems: 'center', }} >
                                    <Icon active name="md-phone-portrait" style={{ color: '#0088cc' }} />
                                    <Text style={{ color: '#0088cc' }} >Telefono</Text>
                                </Button>
                            </View>

                            <View style={{ width: '32%', }} >
                                <Button transparent onPress = { 
                                    () => {
                                            const to = [ this.props.correo ] // string or array of email addresses
                                            email(to, {
                                                    // Optional additional arguments
                                                    cc: ['katisa760917@gmail.com'], // string or array of email addresses
                                                    bcc: 'virtual_lara@hotmail.com', // string or array of email addresses
                                                    subject: 'Consulta desde AppMovil',
                                                    body: 'Hola, me pongo en contacto con ustedes desde su AppMovil, para lo siguiente: '
                                                }).catch(console.error) 
                                            }
                                }
                                        style={{ display:'flex' , flexDirection: 'column', alignItems: 'center', }} >
                                    <Icon active name="mail" style={{ color: '#db4a39' }} />
                                    <Text style={{ color: '#db4a39' }} >Correo</Text>
                                </Button>
                            </View>

                        </CardItem>

                    </Card>
                </Content>

                <View>

                    <View>
                        <Text style={styles.direccion} > Direccion: </Text>
                    </View>

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

                    <View>
                        <Text style={styles.direccion} > Horarios: </Text>
                    </View>

                    <View style={styles.contenido} >   
                        <View style={styles.etiqueta} >
                            <Text style={styles.textEtiqueta} > L-V:</Text>
                        </View>
                        <View style={styles.dato} >
                            <Text style={styles.textDato} > {this.props.horario_LV} </Text>
                        </View>
                    </View>

                    <View style={styles.contenido} >   
                        <View style={styles.etiqueta} >
                            <Text style={styles.textEtiqueta} >Sábado:</Text>
                        </View>
                        <View style={styles.dato} >
                            <Text style={styles.textDato} > {this.props.horarioSab} </Text>
                        </View>
                    </View>

                </View>
    
            </Container>

    );
  }
}

const styles = StyleSheet.create({
    maquetacion:{
        flexDirection: 'column',
    },
    contenido:{
        flexDirection: 'row'
    },
    etiqueta:{
        flex: .6,
    },
    dato:{
        flex: 2,
    },
    direccion:{
        fontWeight: 'bold',
        fontSize: 20,
        color:'#08298A',
    },
    textEtiqueta:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0174DF',
    },
    textDato:{
        fontSize: 18,
        fontWeight: 'normal',
    },
})