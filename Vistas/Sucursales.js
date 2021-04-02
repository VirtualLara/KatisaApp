import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Container, Header, Content, Tab, Tabs, TabHeading, ScrollableTab, Item } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Sucursal from './Sucursal'

export default class TabsExample extends Component {

    constructor(props){
        super(props);

        this.state={
            ciudades:[
                {ciudad:'Xalapa'},
                {ciudad:'Veracruz'},
                {ciudad:'Cordoba'},
            ],
        }
    }

    renderizarCiudades(){
        return this.state.ciudades.map((Item, Index) => {
            return (
                <Tab key={Index} heading={Item.ciudad}  Index={Index} >
                    <Sucursal opc={Item.ciudad}  />
                </Tab>          
            )
        }) 
    }

  render() {
    return (
      <Container >

        <Header hasTabs style={styles.headerPos}> 
            <View styles={styles.header} >
                <Text style={styles.text} > 
                    <Icon name="map-marker-alt" size={30} color='white' /> 
                    Ubica nuestras sucursales </Text>
            </View>
        </Header>

        <Tabs locked='true'>
            { this.renderizarCiudades ( this.state.valorCiudad ) }
        </Tabs>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    headerPos:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29B6F6',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
})