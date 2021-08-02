import React from 'react';
import { View, Text } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab } from "native-base";
import { map } from 'lodash';

import { API_URL } from '../utils/constants';
import CardSucursal from "../Componentes/CardSucursal";
import { colorMarca, tabSeleccionado, textTabInactivo } from '../utils/colores';


export default function ListSucursales(props) {

    const { xalapaArray, veracruzArray, cordobaArray, op } = props;

    return (
        <View style={{ flex: 1 }}>
            {llenarSucursales(op)}
        </View>
    )


    function llenarSucursales(op) {
        switch (op) {
            case 'Xalapa': {
                return (
                    <Container>
                        <Tabs renderTabBar={() => <ScrollableTab backgroundColor={colorMarca} />}
                            tabBarPosition='bottom'
                            tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                            {map(xalapaArray, (sucursal) => (
                                <Tab heading={sucursal.namesuc} key={sucursal._id}
                                    tabStyle={{ backgroundColor: colorMarca, }}
                                    textStyle={{ color: textTabInactivo, fontWeight: 'bold', }}
                                    activeTabStyle={{ backgroundColor: tabSeleccionado, }} >
                                    <CardSucursal
                                        sucursal={sucursal.namesuc}
                                        calle={sucursal.callesuc}
                                        colonia={sucursal.colsuc}
                                        cp={sucursal.cpsuc}
                                        horario_LV={sucursal.horainisuc + ":00 AM - " + sucursal.horafinsuc + ":00 PM"}
                                        horarioSab={sucursal.horainisuc + ":00 AM - " + sucursal.hracierresuc + ":00 PM"}
                                        celular={sucursal.celularsuc}
                                        correo={sucursal.correosuc}
                                        telefono={sucursal.telefonosuc}
                                        foto={`${API_URL}${sucursal.fotosuc.url}`}
                                        logo={`${API_URL}${sucursal.logo.url}`}
                                    />
                                </Tab>
                            ))}
                        </Tabs>
                    </Container>
                )
                break;

            }
            case 'Veracruz': {
                return (
                    <Container>
                        <Tabs renderTabBar={() => <ScrollableTab backgroundColor={colorMarca} />}
                            tabBarPosition='bottom'
                            tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                            {map(veracruzArray, (sucursal) => (
                                <Tab heading={sucursal.namesuc} key={sucursal._id}
                                    tabStyle={{ backgroundColor: colorMarca }}
                                    textStyle={{ color: textTabInactivo, fontWeight: 'bold', }}
                                    activeTabStyle={{ backgroundColor: tabSeleccionado, }} >
                                    <CardSucursal
                                        sucursal={sucursal.namesuc}
                                        calle={sucursal.callesuc}
                                        colonia={sucursal.colsuc}
                                        cp={sucursal.cpsuc}
                                        horario_LV={sucursal.horainisuc + ":00 AM - " + sucursal.horafinsuc + ":00 PM"}
                                        horarioSab={sucursal.horainisuc + ":00 AM - " + sucursal.hracierresuc + ":00 PM"}
                                        celular={sucursal.celularsuc}
                                        correo={sucursal.correosuc}
                                        telefono={sucursal.telefonosuc}
                                        foto={`${API_URL}${sucursal.fotosuc.url}`}
                                        logo={`${API_URL}${sucursal.logo.url}`}
                                    />
                                </Tab>
                            ))}
                        </Tabs>
                    </Container>
                )
                break;

            }
            case 'Cordoba': {
                return (
                    <Container>
                        <Tabs renderTabBar={() => <ScrollableTab backgroundColor={colorMarca} />}
                            tabBarPosition='bottom'
                            tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                            {map(cordobaArray, (sucursal) => (
                                <Tab heading={sucursal.namesuc} key={sucursal._id}
                                    tabStyle={{ backgroundColor: colorMarca }}
                                    textStyle={{ color: textTabInactivo, fontWeight: 'bold', }}
                                    activeTabStyle={{ backgroundColor: tabSeleccionado, }} >
                                    <CardSucursal
                                        sucursal={sucursal.namesuc}
                                        calle={sucursal.callesuc}
                                        colonia={sucursal.colsuc}
                                        cp={sucursal.cpsuc}
                                        horario_LV={sucursal.horainisuc + ":00 AM - " + sucursal.horafinsuc + ":00 PM"}
                                        horarioSab={sucursal.horainisuc + ":00 AM - " + sucursal.hracierresuc + ":00 PM"}
                                        celular={sucursal.celularsuc}
                                        correo={sucursal.correosuc}
                                        telefono={sucursal.telefonosuc}
                                        foto={`${API_URL}${sucursal.fotosuc.url}`}
                                        logo={`${API_URL}${sucursal.logo.url}`}
                                    />
                                </Tab>
                            ))}
                        </Tabs>
                    </Container>
                )
                break;

            }
        }
    }

}


