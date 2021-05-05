import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Inicio from '../Vistas/Inicio';
import Favorites from '../Vistas/Favorites';
import Cotizacion from '../Vistas/Cotizacion';
import AccountStack from '../Navigator/AccountStack';

export default function AppNavigation() {

    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    title: 'Inicio'
                }} />
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
