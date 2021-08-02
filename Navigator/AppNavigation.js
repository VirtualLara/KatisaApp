import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


import Inicio from '../Vistas/Inicio';
import Favorites from '../Vistas/Favorites';
import Cotizacion from '../Vistas/Cotizacion';
import Carrito from '../Vistas/Carrito';
import AccountStack from '../Navigator/AccountStack';
import { colorMarca, tabFavoritos, tabCotizaciones, tabCarrito, tabPerfil } from '../utils/colores';

export default function AppNavigation() {

    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator activeColor="#fff" barStyle={styles.navigationStyle}
            initialRouteName='Inicio'
            screenOptions={({ route }) => ({
                tabBarIcon: (routeStatus) => {
                    return setIcon(route, routeStatus);
                }
            })}>
            <Tab.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    title: 'FAVORITOS',
                    tabBarColor: tabCotizaciones
                }}
            />
            <Tab.Screen
                name='Cotizacion'
                component={Cotizacion}
                options={{
                    title: 'COTIZACION',
                    tabBarColor: tabFavoritos
                }}
            />
            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    title: 'INICIO',
                    tabBarColor: colorMarca,
                }}
            />
            <Tab.Screen
                name='Carrito'
                component={Carrito}
                options={{
                    title: 'CARRITO',
                    tabBarColor: tabFavoritos
                }}
            />
            <Tab.Screen
                name='Mi Perfil'
                component={AccountStack}
                options={{
                    title: 'MI PERFIL',
                    tabBarColor: tabCotizaciones
                }}
            />
        </Tab.Navigator>
    )
}

function setIcon(route, routeStatus) {
    let iconName = "";

    switch (route.name) {
        case 'Inicio':
            iconName = "home"
            break;
        case 'Favorites':
            iconName = "heart"
            break;
        case 'Carrito':
            iconName = "cart-plus"
            break;
        case 'Cotizacion':
            iconName = "list"
            break;
        case 'Mi Perfil':
            iconName = "user"
            break;

        default:
            break;
    }
    return <AwesomeIcon name={iconName} style={styles.icon} />
}

const styles = StyleSheet.create({
    navigationStyle: {
        backgroundColor: colorMarca,
        color: "#fff",
    },
    icon: {
        fontSize: 23,
        color: '#fff'
    },
})