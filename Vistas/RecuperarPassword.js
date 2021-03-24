import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, FooterTab, Footer, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconSearch from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSend from 'react-native-vector-icons/AntDesign';
import IconCancel from 'react-native-vector-icons/MaterialCommunityIcons';



export default class RecuperarPassword extends React.Component {
  render() {
    return (
      <Container>

        <Header style={styles.titulos}>
            <Text style={styles.textoHeader}> <Icon name="user-shield" size={30} color='white' />   Recuperar Contraseña </Text>
        </Header>

        <Text> {"\n"} </Text> 

        <View style={styles.titulos} >
            <Image style={styles.imagen} source={require('../Recursos/Imagenes/descarga.png')} />
        </View>

        <Text> {"\n"} </Text> 

        <Content>

            <Form>

                <View style={styles.titulos}>
                    <Text style={styles.textoTitulos}> <IconSearch name="text" size={25} color='#01A9DB' />   Ingrese lo siguiente: </Text>
                </View>

                <Text> {"\n"} </Text>  
                
                <View>
                    <Text style={styles.textos}> <IconSearch name="email-edit" size={25} color='#0B2161' />   Correo electrónico </Text>
                </View>

                <Text> {"\n"} </Text> 

                <Item>
                    <Input placeholder="Correo electrónico"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>  

            </Form>

            <Text> {"\n"} </Text>

            <View style = {styles.posicionBoton} >
                
                <View>
                    <Button rounded style = {styles.boton} >
                        <Text style = {styles.textboton} > <IconSend name="enter" size={35} color='white' />  Enviar </Text>
                    </Button>
                </View>

                <Text> {"\n"} </Text>

                <View>
                    <Button rounded style = {styles.boton} >
                        <Text style = {styles.textboton} > <IconCancel name="cancel" size={35} color='ehite' />  Cancelar </Text>
                    </Button>
                </View>
                
            </View>

        </Content>
        
        <Footer style={styles.titulos} >
            <View>
                <Text style={styles.textfooter}> <IconCancel name="email-multiple" size={25} color='white' />  La contraseña se enviara por correo. </Text>
            </View>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create ({
    textoHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    titulos: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    acomodo: {
        width: '100%',
        height: 100,
    },
    imagen: {
        width: 120,
        height: 120,
    },
    textoTitulos: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#01A9DB',
    },
    textos: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0B2161',
    },
    posicionBoton:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    boton: {
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textboton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    textfooter: {
        textAlign: 'center', 
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
})