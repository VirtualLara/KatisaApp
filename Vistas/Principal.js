import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Container, Header, Content, Footer, Button} from 'native-base';

import Carousel from '../Componentes/Carousel.js';
import CardNotica from '../Componentes/CardNotica.js';

import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Principal extends React.Component {
    render(){
        return(
            

           <Container style = {styles.content} >

                <Header style = {styles.header} >
                    <Button style={{ backgroundColor: '#29B6F6' }} onPress = { ()=>this.props.navigation.openDrawer() }>
                        <Icon name="home" size={35} color='white' padding='5' margin= '5' />
                    </Button>
                    <Text style = {styles.textHeader} >
                    {/* <Icon name="info" size={35} color='white' />  */}  ¡Promociones y más! </Text>
                </Header>
                
                <View style = {styles.contentCarousel}>
                    <Carousel/>
                </View>
               
                <Header style = {styles.header} >
                        <Text style = {styles.textHeader} >
                        <Icon name="list-ul" size={35} color='white' />   Noticias Katisa </Text>
                </Header>
                
                <View style = {styles.contentBody}>
                    <CardNotica/>
                </View>

                <Footer style = {styles.header} >
                    <Text style = {styles.textFooter} > ¡Los expertos en iluminación! </Text>
                </Footer>

            </Container>

        )
    }
}

const styles = StyleSheet.create ({
    content: {
        flexDirection: 'column',
        flex: 1 ,
    },
    header: { 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29B6F6',
    },
    textHeader: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    contentCarousel: {
        flexDirection: 'column',
        height: 'auto',
    },
    contentBody: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textFooter: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})