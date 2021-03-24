import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Button, Header, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconKey from 'react-native-vector-icons/MaterialCommunityIcons';
import IconWorld from 'react-native-vector-icons/Fontisto';
import IconPass from 'react-native-vector-icons/EvilIcons';



export default class Login extends React.Component {
  render() {
    return (

        <Container  style={styles.container} >
            
            <Header style={styles.titulos}>
                <Text style={styles.textoHeader}> <Icon name="user-circle" size={35} color='white' />   Inicio de Sesión </Text>
            </Header>

            <Content>

                <View style={styles.containerImagen} >
                    <Image  style={styles.image}  source = {require('../Recursos/Imagenes/logo.png')}/>
                </View>

                <Form style={styles.form}>

                    <View>
                        <Text style={styles.Text1} > <Icon name="user" size={25} color='#01A9DB' />  Usuario </Text>
                    </View>
                    <Item>
                        <Input placeholder="Ingrese su Usuario" 
                                placeholderTextColor="#0B2161"
                                returnKeyType='go'
                                autoCorrect={false} />
                    </Item>

                    <Text> {"\n"} </Text>  

                    <View>
                        <Text style={styles.Text1} > <IconKey name="key" size={30} color='#01A9DB' />  Contraseña </Text>
                    </View>
                    <Item last>
                        <Input placeholder="Ingrese su Contraseña"
                                placeholderTextColor="#0B2161"
                                returnKeyType='go'
                                secureTextEntry //Vuelve el input tipo password
                                autoCorrect={false} />
                    </Item>

                </Form>

                <Text> {"\n"} </Text>   

                <View style={styles.botones} >
                    <View>
                        <Button rounded style= {styles.boton}  >
                            <Text style={styles.textboton} > <IconWorld name="world" size={35} color='white' />  Ingresar </Text>
                        </Button>
                    </View>

                    <Text> {"\n"} </Text>   
                    
                    <View>
                        <Button rounded style= {styles.boton} >
                            <Text style={styles.textboton} > <Icon name="user-plus" size={35} color='white' />  Registrarse </Text>
                        </Button>
                    </View>

                    <Text> {"\n"} </Text>   
                    
                </View>

            </Content>

            <Footer>
                <View>
                    <Button style= {styles.boton} transparent >
                        <Text style={styles.textbotonTrans} > <IconPass name="close-o" size={35} color='white' />  ¿Olvidaste tu contraseña? </Text>
                    </Button>
                </View>
            </Footer>

        </Container>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#F2F2F2'
    },
    titulos: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    containerImagen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '65%',
        height: 150,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text1: {
        fontSize: 25,
        color: '#01A9DB',
        fontWeight: 'bold',
    },
    botones: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    boton: {
        width: 300,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    textboton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    textbotonTrans: {
        fontSize: 20,
        fontWeight: 'bold',
        color:  'white',
    },
})