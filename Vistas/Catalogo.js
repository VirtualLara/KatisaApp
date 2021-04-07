import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Header, Button, Badge  } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";

import CardArticulo from '../Componentes/CardArticulo';
import StatusBarMy from '../Componentes/StatusBarMy';
import { Alert } from 'react-native';

export default class Catalogo extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>

                <Header hasTabs style={styles.headerPos}>

                    <StatusBarMy backgroundColor='#29B6F6' />

                    <Icon name="arrow-left" size={35} color="#1F618D" onPress={ () => this.props.navigation.openDrawer() } />
                    <Text>     {"\n"} </Text>
                    <View styles={styles.header}>
                        <Text style={styles.text}> Catalogo de articulos <Icon name="book" size={40} color="white"/> </Text>
                    </View>

                </Header>

                <Button info badge style={{ width: '100%', height: 70 }} >
                    <Badge warning>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white'}} > 5001 </Text> 
                    </Badge>
                    <Icon name="cart-arrow-down" size={50} color="white"/>
                    <Text style={{ fontWeight: 'bold', fontSize: 23, color: 'white'}} > Solictud de cotizacion. </Text>
                </Button>
                
                <ScrollView>
                    <CardArticulo/>
                    <CardArticulo/>
                    <CardArticulo/>
                    <CardArticulo/>

                    <Text>
                        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    </Text>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerPos: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#29B6F6",
    },
    header:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
    },
  });
  