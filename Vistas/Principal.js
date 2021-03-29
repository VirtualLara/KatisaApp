import React, {Component} from 'react';
import { StyleSheet, Alert } from 'react-native'
import { Icon, Container, Header, Footer, Button,View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Content, } from 'native-base';

import Carousel from '../Componentes/Carousel.js';
import { ScrollView } from 'react-native-gesture-handler';

//import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Principal extends React.Component {

    constructor(props){
        super(props);
    
        this.state={
        }
    }

    render(){
        return(
            

           <Container style = {styles.content} >

                <Header style = {styles.header} >
                    <Button style={{ backgroundColor: '#29B6F6' }} onPress = { ()=>this.props.navigation.openDrawer() }>
                        <Icon name="menu" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />
                    </Button>
                    <Text style = {styles.textHeader} > ¡Promociones y más! </Text>
                </Header>
                
                <View style = {styles.contentCarousel}>
                    <Carousel/>
                </View>
               
                <Header style = {styles.header} >
                        <Text style = {styles.textHeader} >
                        <Icon name="list" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />   Noticias Katisa </Text>
                </Header>
                
                <View style = {styles.contentBody}>
                    
                    <View style={{ height: '85%',  }}>

                        <View  style={{ height: '30%' }}>
                            <CardItem style={{ height: '100%' }} >
                                <Left>
                                    <Thumbnail source={ require('../Recursos/Imagenes/logo.png') } />
                                    <Body>
                                    <Text> { } </Text>
                                    <Text note> { } </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </View>

                        <CardItem style={{ height: '70%' }}>

                            <ScrollView>

                            <Text style={{ width:'100%', textAlign: 'justify', padding: 15, 
                                    backgroundColor: '#EBF5FB' }} > { } </Text>

                            </ScrollView>

                        </CardItem>

                    </View>

                    <View style={{ height: '15%', flexDirection: "row", justifyContent: 'space-around',
                            alignItems: 'center', }}>
                
                        <Button iconLeft onPress={() => { Alert.alert('hola')}} 
                                style={{ backgroundColor: '#039BE5', }} >
                            <Icon name="arrow-back" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 14 }}> Anterior </Text>
                        </Button>
                            
                        <Button iconRight onPress={() => { Alert.alert('hola')}} 
                                style={{ backgroundColor: '#039BE5', }} >
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 14 }}> Siguiente </Text>
                            <Icon name="arrow-forward" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />
                        </Button>
                        
                    </View>

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
        height: 'auto',
    },
    textHeader: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        height: 'auto',
    },
    contentCarousel: {
        height: 'auto',
    },
    contentBody: {
        flex: 1,
        height: 'auto',
        justifyContent: 'center',
        
    },
    textFooter: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})