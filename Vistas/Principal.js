import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Footer, } from 'native-base';

import Carousel from '../Componentes/Carousel.js';
import CatAcordeon from '../Componentes/CatAcordeon.js'

import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Principal extends React.Component {
    render(){
        return(

           <Container style = {styles.content} >

                <Header style = {styles.header} >
                    <Text style = {styles.textHeader} >
                    <Icon name="info" size={35} color='white' />   ¡Promociones y más! </Text>
                </Header>
                
                <View style = {styles.contentCarousel}>
                    <View style = {styles.carrousel} >
                        <Carousel/>
                    </View> 
                </View>
               
                <Header style = {styles.header} >
                        <Text style = {styles.textHeader} >
                        <Icon name="list-ul" size={35} color='white' />   ¡Noticias Katisa! </Text>
                </Header>
                
                <View style = {styles.contentBody}>
                    <CatAcordeon/>
                </View>

                <Footer style = {styles.header} >
                    <Text style = {styles.textFooter} > ¡Los expertos en iluminación! </Text>
                </Footer>

            </Container>

        )
    }
}

const styles = StyleSheet.create ({
    header: { 
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'column',
        flex: 9,
    },
    contentCarousel: {
        flexDirection: 'column',
        flex: 1,
    },
    carousel: {
        flex: 1,
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