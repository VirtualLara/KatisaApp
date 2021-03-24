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
            datos:[
                    {sucursal:'',
                    calle:'',
                    colonia:'',
                    cp:'',
                    horario:'',
                    celular:'',
                    correo:'',
                    telefono:'',
                    },
                    {sucursal:'',
                    calle:'',
                    colonia:'',
                    cp:'',
                    horario:'',
                    celular:'',
                    correo:'',
                    telefono:'',
                    },
            ],
        }
    }

    renderizarCiudades(){
        return this.state.ciudades.map((Item, Index) => {
            return (
                <Tab key={Index} heading={Item.ciudad}  Index={Index} >
                    <Sucursal opc={Item.ciudad}/>
                </Tab>          
            )
        }) 
    }

  render() {
    return (
      <Container >
        <Header hasTabs style={styles.headerPos}> 
            <View styles={styles.header} >
                <Text style={styles.text} > <Icon name="map-marker-alt" size={30} color='white' /> Ubica nuestras sucursales </Text>
            </View>
        </Header>
        <Tabs locked='true' /* onChangeTab={ ( {i}  ) => { 
                                                let valIntIndex = parseInt(i);
                                                let valCityArray = Object.values( this.state.ciudades[valIntIndex] );
                                                this.setState({ valorCiudad: valCityArray  });
                                            }                                       
                                        } */ >

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
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
})