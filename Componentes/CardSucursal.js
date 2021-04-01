import React, { Component } from 'react';
import { Image, Alert, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, 
         Text, Button, Icon, Left, Body, Right } from 'native-base';

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
                            <Image source= { require( '../Recursos/Imagenes/logo.png' ) }
                                            style={{height: 200, width: null, flex: 1, resizeMode: 'contain'}}/>
                        </CardItem>

                        <CardItem style={{ display: 'flex', flexDirection: 'row' }} >

                            <View style={{ width: '35%', }} >
                                <Button transparent onPress = { () => {Alert.alert('me aplastaste soy whatsapp')} } 
                                        style={{ display:'flex' , flexDirection: 'column' }} >
                                    <Icon active name="logo-whatsapp" />
                                    <Text >WhatsApp</Text>                         
                                </Button>
                            </View>

                            <View style={{ width: '33%', }} >
                                <Button transparent onPress = { () => {Alert.alert('me aplastaste son telefono')} } 
                                        style={{ display:'flex' , flexDirection: 'column' }} >
                                    <Icon active name="md-phone-portrait" style={{ backgroundColor: '' }} />
                                    <Text>Telefono</Text>
                                </Button>
                            </View>

                            <View style={{ width: '32%', }} >
                                <Button transparent onPress = { () => {Alert.alert('me aplastaste soy correo')} } 
                                        style={{ display:'flex' , flexDirection: 'column' }} >
                                    <Icon active name="mail" />
                                    <Text>Correo</Text>
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