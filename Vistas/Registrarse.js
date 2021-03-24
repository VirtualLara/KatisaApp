import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Footer, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconGenerales from 'react-native-vector-icons/FontAwesome5';
import IconPhone from 'react-native-vector-icons/Fontisto';
import IconCell from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Registrarse extends React.Component {
  render() {
    return (
      <Container>

        <Header style={styles.titulos}>
            <Text style={styles.textoHeader}> <Icon name="users" size={30} color='white' />   Registro Nuevos Usuarios </Text>
        </Header>

        <Content>

            <Form>

                <View style={styles.titulos}>
                    <Text style={styles.textoTitulos}> <IconGenerales name="user-tie" size={20} color='#01A9DB' />   Datos generales: </Text>
                </View>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-tag" size={20} color='#0B2161' />   Nombre (s) </Text>
                </View>
                <Item>
                    <Input placeholder="Nombre (s)"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-tag" size={20} color='#0B2161' />   Apellido paterno </Text>
                </View>
                <Item>
                    <Input placeholder="Apellido paterno"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-tag" size={20} color='#0B2161' />   Apellido materno </Text>
                </View>
                <Item>
                    <Input placeholder="Apellido materno"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>

                <View>
                    <Text style={styles.textos}> <IconPhone name="phone" size={20} color='#0B2161' />/<IconCell name="cellphone-android" size={20} color='#0B2161' />   Telefono o Celular </Text>
                </View>
                <Item>
                    <Input placeholder="Telefono / Celular"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>

                <View style={styles.titulos}>
                    <Text style={styles.textoTitulos}> <IconGenerales name="user-check" size={20} color='#01A9DB' />   Datos De Sesión: </Text>
                </View>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-alt" size={20} color='#0B2161' />   Usuario </Text>
                </View>
                <Item>
                    <Input placeholder="Ingrese su Usuario"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            autoCorrect={false}/>
                </Item>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-lock" size={20} color='#0B2161' />   Contraseña </Text>
                </View>
                <Item last>
                    <Input placeholder="Ingrese su Contraseña"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            secureTextEntry //Vuelve el input tipo password
                            autoCorrect={false} />
                </Item>

                <View>
                    <Text style={styles.textos}> <IconGenerales name="user-lock" size={20} color='#0B2161' />   Confirmar contraseña </Text>
                </View>
                <Item last>
                    <Input placeholder="Repita la Contraseña"
                            placeholderTextColor="#0B2161"
                            returnKeyType='go'
                            secureTextEntry //Vuelve el input tipo password
                            autoCorrect={false} />
                </Item>

            </Form>

            <View style = {styles.posicionBoton} >

                <Button rounded style = {styles.boton} >
                    <Text style = {styles.textboton} > Cancelar </Text>
                </Button>

                <Text> {"\n"} </Text>   
                <Text> {"\n"} </Text>   
                <Text> {"\n"} </Text>   
                <Text> {"\n"} </Text>
                <Text> {"\n"} </Text>   
                
                <Button rounded style = {styles.boton} >
                    <Text style = {styles.textboton} > Registrarse </Text>
                </Button>

            </View>

        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create ({
    textoHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    titulos: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoTitulos: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#01A9DB',
    },
    textos: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0B2161',
    },
    posicionBoton:{
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5, 
        justifyContent: 'center',
    },
    boton: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textboton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})