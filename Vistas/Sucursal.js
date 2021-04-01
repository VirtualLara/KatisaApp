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
          foto: '',
      },
      ciudad:{
        xalapa:[
          {
            sucursal:'Caram',
            calle:'Av. antonio Chedraui Caram #6',
            colonia:'Sebastian Lerdo de Tejada',
            cp:'91180',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab: '9:00 hrs - 18:00 hrs',
            celular: '2282661873',
            correo:'sucursalcristal@katisailuminacionled.com',
            telefono:'2281518476',
            foto: '../Recursos/Imagenes/descarga.png',
          },
          {
            sucursal:'dos',
            calle:'dos',
            colonia:'dos',
            cp:'dos',
            horario_LV:'',
            horarioSab:'',
            celular: 'dos',
            correo:'dos',
            telefono:'dos',
            foto: '',
          },
        ],
        veracruz:[
          {
            sucursal:'Ver1',
            calle:'Ver1',
            colonia:'Ver1',
            cp:'Ver1',
            horario_LV:'',
            horarioSab:'',
            celular: 'Ver1',
            correo:'Ver1',
            telefono:'Ver1',
            foto: '',
          },
        ],
        cordoba:[
          {
            sucursal:'Cordoba',
            calle:'Cordoba',
            colonia:'Cordoba',
            cp:'Cordoba',
            horario_LV:'',
            horarioSab:'',
            celular: 'Cordoba',
            correo:'Cordoba',
            telefono:'Cordoba',
            foto: '',
          },
        ],
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
                { this.state.ciudad.xalapa.map((Item) => {
                      return (
                          <Tab heading={ Item.sucursal } >
                              <CardSucursal 
                                sucursal = { Item.sucursal }
                                calle = { Item.calle }
                                colonia = { Item.colonia }
                                cp = { Item.cp }
                                horario_LV = { Item.horario_LV }
                                horarioSab = { Item.horarioSab }
                                celular = { Item.celular }
                                correo = { Item.correo }
                                telefono = { Item.telefono }
                                foto = { Item.foto }
                                />
                          </Tab>          
                      )
                  }) 
                }
              </Tabs>
            </Container>
        )
        break;
      }      
      case 'Veracruz':{
        return(
          <Container>
              <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
                { this.state.ciudad.veracruz.map((Item) => {
                      return (
                        <Tab heading={ Item.sucursal } >
                        <CardSucursal 
                          sucursal = { Item.sucursal }
                          calle = { Item.calle }
                          colonia = { Item.colonia }
                          cp = { Item.cp }
                          horario_LV = { Item.horario_LV }
                          horarioSab = { Item.horarioSab }
                          celular = { Item.celular }
                          correo = { Item.correo }
                          telefono = { Item.telefono }
                          />
                    </Tab>         
                      )
                  }) 
                }
              </Tabs>
            </Container>
        )
        break;
      }
      case 'Cordoba': {
        return(
          <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
              { this.state.ciudad.cordoba.map((Item) => {
                    return (
                      <Tab heading={ Item.sucursal } >
                      <CardSucursal 
                        sucursal = { Item.sucursal }
                        calle = { Item.calle }
                        colonia = { Item.colonia }
                        cp = { Item.cp }
                        horario_LV = { Item.horario_LV }
                        horarioSab = { Item.horarioSab }
                        celular = { Item.celular }
                        correo = { Item.correo }
                        telefono = { Item.telefono }
                        />
                  </Tab>         
                    )
                }) 
              } 
            </Tabs>
          </Container>
        )
      break;
      }
      default: {        
        return(
          <Container>
              <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom'>
                { this.state.ciudad.xalapa.map((Item) => {
                      return (
                        <Tab heading={ Item.sucursal } >
                          <CardSucursal 
                            sucursal = { Item.sucursal }
                            calle = { Item.calle }
                            colonia = { Item.colonia }
                            cp = { Item.cp }
                            horario_LV = { Item.horario_LV }
                            horarioSab = { Item.horarioSab }
                            celular = { Item.celular }
                            correo = { Item.correo }
                            telefono = { Item.telefono }
                            />
                        </Tab>         
                      )
                  }) 
                }
              </Tabs>
            </Container>
        )
        break;
      }
    }
}
  render() {
    return (
      this.llenarSucursales(this.props.opc)
    )
  }
}