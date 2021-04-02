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
            sucursal:'Americas',
            calle:'Av. Americas #113',
            colonia:'Aguacatal',
            cp:'91133',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 18:00 hrs',
            celular: '2281381224',
            correo:'sucursalamericas@katisailuminacionled.com',
            telefono:'2288159422',
            foto: require('../Recursos/Imagenes/americas.jpeg'),
          },
          {
            sucursal:'Atenas',
            calle:'Av. Atenas Veracruzanas #132B',
            colonia:'Revolución',
            cp:'91100',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 18:00 hrs',
            celular: '2283543134',
            correo:'sucursalatenas@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/atenas.jpeg'),
          },
          {
            sucursal:'Caram',
            calle:'Av. Antonio Chedraui Caram #6',
            colonia:'Sebastian Lerdo de Tejada',
            cp:'91180',
            horario_LV:'9:00 hrs - 20:00 hrs',
            horarioSab: '9:00 hrs - 18:00 hrs',
            celular: '2282661873',
            correo:'sucursalcristal@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/descarga.png'),
          },
          {
            sucursal:'Cumbres',
            calle:'Paseo de los Alpes #54',
            colonia:'Fraccionamiento Cumbres',
            cp:'91193',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2287778306',
            correo:'',
            telefono:'sucursalcumbres@katisailuminacionled.com',
            foto: require('../Recursos/Imagenes/logo.png'),
          },
          {
            sucursal:'Presidentes',
            calle:'Circuito presidentes #73 (5 y 6)',
            colonia:'Emiliano Zapata',
            cp:'91093',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 18:00 hrs',
            celular: '2284976302',
            correo:'sucursalpresidentes@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/presidentes.jpeg'),
          },
          {
            sucursal:'Remates',
            calle:'Av. 20 de Noviembre #595',
            colonia:'Agua Santa',
            cp:'91045',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 18:00 hrs',
            celular: '2283208329',
            correo:'sucursalremates@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/logo.png'),
          },
          {
            sucursal:'Ruiz Cortines',
            calle:'Av. Adolfo Ruiz Cortines s/n',
            colonia:'Tamborrel',
            cp:'91050',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 18:00 hrs',
            celular: '2282570833',
            correo:'sucursalruiz@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/ruiz.jpeg'),
          },
        ],
        veracruz:[
          {
            sucursal:'Allende',
            calle:'Av. Allende #2493',
            colonia:'Centro',
            cp:'91700',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2294225052',
            correo:'sucursalallende@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/allende.jpeg'),
          },
          {
            sucursal:'Dorado',
            calle:'M Aleman #28',
            colonia:'Centro (Boca del Rio)',
            cp:'94290',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2294121581',
            correo:'sucursaldorado@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/dorado.jpeg'),
          },
          {
            sucursal:'Ejercito',
            calle:'Av. Ejercito Mexicano #2026',
            colonia:'Primero de Mayo',
            cp:'91757',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2291433173',
            correo:'sucursalejercito@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/ejercito.jpeg'),
          },
          {
            sucursal:'Negrete',
            calle:'AV. Gral. Negrete #869 A',
            colonia:'Zaragoza',
            cp:'91910',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2294651643',
            correo:'sucursalnegrete@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/negrete.jpeg'),
          },
        ],
        cordoba:[
          {
            sucursal:'Cordoba',
            calle:'Calle 12 #306 Int. B',
            colonia:'San José',
            cp:'94560',
            horario_LV:'9:00 hrs - 19:00 hrs',
            horarioSab:'9:00 hrs - 16:00 hrs',
            celular: '2717403371',
            correo:'sucursalcordoba@katisailuminacionled.com',
            telefono:'',
            foto: require('../Recursos/Imagenes/logo.png'),
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
          <Container >
              <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom' >
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
              <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom' >
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
      case 'Cordoba': {
        return(
          <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />} tabBarPosition='bottom' > 
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