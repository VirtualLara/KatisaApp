import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../Vistas/account/Account';

export default function AccountStack() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                component={Account}
                options={{ title: 'Cuenta', headerShown: false }}
            />
        </Stack.Navigator>
    )
}
