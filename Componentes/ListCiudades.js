import React from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab, ScrollableTab } from 'native-base';
import { map } from 'lodash';

import Sucursal from '../Vistas/Sucursal';
import { colorMarca, tabSeleccionado, textTabInactivo } from '../utils/colores';

export default function ListCiudades(props) {

    const { citys } = props;

    return (

        <Tabs renderTabBar={() => <ScrollableTab backgroundColor={colorMarca} />}
            locked='true'
            tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
            {map(citys, (city) => (
                <Tab heading={city.nombreciudad} key={city._id}
                    tabStyle={{ backgroundColor: colorMarca }}
                    textStyle={{ color: textTabInactivo, fontWeight: 'bold', }}
                    activeTabStyle={{ backgroundColor: tabSeleccionado, }}
                >

                    <Sucursal op={city.nombreciudad} />

                </Tab>
            ))}
        </Tabs>

    )
}
