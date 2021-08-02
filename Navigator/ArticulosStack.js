import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Catalogo from '../Vistas/Catalogo';
import ArticuloDetalles from '../Componentes/ArticuloDetalles';
import SearchView from '../Vistas/SearchView';
import { colorMarca } from '../utils/colores';


const Stack = createStackNavigator();

export default function ArticulosStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: colorMarca },
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
                options={{ title: 'Detalles del artículo' }}
            />
            <Stack.Screen
                name='SearchView'
                component={SearchView}
                options={{ title: 'Resultados de la búsqueda...' }}
            />
        </Stack.Navigator>
    )
}
