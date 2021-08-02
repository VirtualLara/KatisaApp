import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../Vistas/account/Account';
import CambiarNombre from '../Vistas/account/CambiarNombre';
import CambiarEmail from '../Vistas/account/CambiarEmail';
import CambiarUsuario from '../Vistas/account/CambiarUsuario';
import CambiarContraseña from '../Vistas/account/CambiarContraseña';
import Direcciones from '../Vistas/account/Direcciones';
import AgregarDireccion from '../Vistas/account/AgregarDireccion';
import Compras from '../Vistas/account/Compras';

import { colorMarca } from '../utils/colores';

export default function AccountStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: colorMarca },
                cardStyle: { backgroundColor: '#fff' }
            }}>
            <Stack.Screen
                name='Account'
                component={Account}
                options={{ title: 'Cuenta', headerShown: false }}
            />
            <Stack.Screen
                name='CambiarNombre'
                component={CambiarNombre}
                options={{ title: 'Cambiar Nombre y Apellidos' }}
            />
            <Stack.Screen
                name='CambiarEmail'
                component={CambiarEmail}
                options={{ title: 'Cambiar Correo Electrónico' }}
            />
            <Stack.Screen
                name='CambiarUsuario'
                component={CambiarUsuario}
                options={{ title: 'Cambiar teléfono de Usuario' }}
            />
            <Stack.Screen
                name='CambiarContraseña'
                component={CambiarContraseña}
                options={{ title: 'Cambiar contraseña' }}
            />
            <Stack.Screen
                name='Direcciones'
                component={Direcciones}
                options={{ title: 'Mis Direccion de Envío' }}
            />
            <Stack.Screen
                name='AgregarDireccion'
                component={AgregarDireccion}
                options={{ title: 'Agregar Dirección' }}
            />
            <Stack.Screen
                name='Compras'
                component={Compras}
                options={{ title: 'Mis Compras Katisa' }}
            />
        </Stack.Navigator>
    )
}
