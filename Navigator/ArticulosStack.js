import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Catalogo from '../Vistas/Catalogo';
import ArticuloDetalles from '../Componentes/ArticuloDetalles';


const Stack = createStackNavigator();

export default function ArticulosStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#29b6f6' },
                cardStyle: { backgroundColor: '#fff' }
            }}>
            <Stack.Screen
                name='Catalogo'
                component={Catalogo}
                options={{ title: 'Catalogo', headerShown: false }}
            />
            <Stack.Screen
                name='ArticuloDetalles'
                component={ArticuloDetalles}
                options={{ title: 'Detalles del Articulo' }}
            />
        </Stack.Navigator>
    )
}
