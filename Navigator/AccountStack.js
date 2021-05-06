import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../Vistas/account/Account';
import CambiarNombre from '../Vistas/account/CambiarNombre';
import CambiarEmail from '../Vistas/account/CambiarEmail';

export default function AccountStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#29b6f6' },
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
        </Stack.Navigator>
    )
}
