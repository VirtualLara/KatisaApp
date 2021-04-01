import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import CardSucursal from '../Componentes/CardSucursal';


/* export default class TabsScrollableExample extends Component { */
export default class Sucursal extends Component {

  constructor(props){
    super(props);
      this.state={
        datos:{
          sucursal:'',
          calle:'',
          colonia:'',
          cp:'',
          horario:'',
          celular:'',
          correo:'',
          telefono:'',
      },
      opc:''
      }
  }

  llenarSucursales(op){
    switch(op){
      case 'Xalapa':{
        return(
          <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
              <Tab heading="Americas">
                <CardSucursal sucursal={'Americas'} />
              </Tab>
              <Tab heading="Atenas">
                <CardSucursal sucursal={'Atenas'}/>
              </Tab>
              <Tab heading="Caram">
                <CardSucursal sucursal={'Caram'}/>
              </Tab>
              <Tab heading="Cumbres">
                <CardSucursal sucursal={'Cumbres'}/>
              </Tab>
              <Tab heading="Presidentes">
                <CardSucursal sucursal={'Presidentes'}/>
              </Tab>
              <Tab heading="Remates">
                <CardSucursal sucursal={'Remates'}/>
              </Tab>
              <Tab heading="Ruiz">
                <CardSucursal sucursal={'Ruiz'}/>
              </Tab>
            </Tabs>
          </Container>
        )
        break;
      }      
      case 'Veracruz':{
        return(
          <Container>
              <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
                <Tab heading="Allende">
                  <CardSucursal sucursal={'Allende'}/>
                </Tab>
                <Tab heading="Dorado">
                  <CardSucursal sucursal={'Dorado'}/>
                </Tab>
                <Tab heading="Ejercito">
                  <CardSucursal sucursal={'Ejercito'}/>
                </Tab>
                <Tab heading="Negrete">
                  <CardSucursal sucursal={'Negrete'}/>
                </Tab>
              </Tabs>
            </Container>
        )
        break;
      }
      case 'Cordoba': {
        return(
          <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
              <Tab heading="Calle 12">
                <CardSucursal sucursal={'Calle 12'}/>
              </Tab>
            </Tabs>
          </Container>
        )
      break;
      }
      default: {
        return(
          <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
              <Tab heading="Americas">
                <CardSucursal/>
              </Tab>
              <Tab heading="Atenas">
                <CardSucursal/>
              </Tab>
              <Tab heading="Caram">
                <CardSucursal/>
              </Tab>
              <Tab heading="Cumbres">
                <CardSucursal/>
              </Tab>
              <Tab heading="Presidentes">
                <CardSucursal/>
              </Tab>
              <Tab heading="Ruiz">
                <CardSucursal/>
              </Tab>
            </Tabs>
          </Container>
        )
      }
    }
}
  render() {
    return (
      this.llenarSucursales(this.props.opc)
    )
  }
}