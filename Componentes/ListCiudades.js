import React from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab, Container } from 'native-base';
import { map } from 'lodash';

import Sucursal from '../Vistas/Sucursal';

export default function ListCiudades(props) {

    const { citys } = props;

    return (

        <Tabs locked='true' tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
            {map(citys, (city) => (
                <Tab heading={city.nombreciudad}
                    tabStyle={{ backgroundColor: '#29B6F6' }}
                    textStyle={{ color: 'black', fontWeight: 'bold', }}
                    activeTabStyle={{ backgroundColor: '#0288D1', }}
                >

                    <Sucursal op={city.nombreciudad} />

                </Tab>
            ))}
        </Tabs>


    )
}
