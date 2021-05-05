import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';


import Inicio from '../Vistas/Inicio';
import Favorites from '../Vistas/Favorites';
import Cotizacion from '../Vistas/Cotizacion';
import AccountStack from '../Navigator/AccountStack';

export default function AppNavigation() {

    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator barStyle={styles.navigationStyle} screenOptions={({ route }) => ({
            tabBarIcon: (routeStatus) => {
                return setIcon(route, routeStatus);
            }
        })}>
            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    title: 'Favoritos'
                }} />
            <Tab.Screen
                name='Cotizacion'
                component={Cotizacion}
                options={{
                    title: 'Cotizacion'
                }} />
            <Tab.Screen
                name='Mi Perfil'
                component={AccountStack}
                options={{
                    title: 'Mi Perfil'
                }} />
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
        backgroundColor: '#29b6f6',
        color: "#fff",
    },
    icon: {
        fontSize: 20,
        color: '#fff'
    },
})