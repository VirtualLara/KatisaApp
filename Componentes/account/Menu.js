import React from 'react';
import { StyleSheet } from 'react-native';
import { List, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

    const navigation = useNavigation();

    return (
        <>
            <List.Section>
                <List.Subheader> Mi cuenta </List.Subheader>
                <List.Item
                    title='Cambiar Nombre'
                    description='Cambiar el nombre de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='face' />}
                    onPress={() => console.log('Cambiar nombre')}
                />
                <List.Item
                    title='Cambiar Email'
                    description='Cambiar el email de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='at' />}
                    onPress={() => console.log('Cambiar email')}
                />
                <List.Item
                    title='Cambiar Nombre de Usuario'
                    description='Cambiar el nombre de usuario de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='sim' />}
                    onPress={() => console.log('Cambiar nombre de usuario')}
                />
                <List.Item
                    title='Cambiar Contraseña'
                    description='Cambiar la contraseña de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='key' />}
                    onPress={() => console.log('Cambiar contraeña')}
                />
                <List.Item
                    title='Mis Direcciones'
                    description='Administra tus direcciones de envío'
                    left={(props) => <List.Icon{...props} icon='map' />}
                    onPress={() => console.log('Cambiar direcciones')}
                />
            </List.Section>

            <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item
                    title='Cotizaciones'
                    description='Listado de tus cotizaciones'
                    left={(props) => <List.Icon{...props} icon='clipboard-list' />}
                    onPress={() => console.log('Cotizaciones')}
                />
                <List.Item
                    title='Lista de Deseos'
                    description='Listado de articulos que te gustaron'
                    left={(props) => <List.Icon{...props} icon='heart' />}
                    onPress={() => navigation.navigate('Favorites')}
                />
                <List.Item
                    title='Cerrar Sesión'
                    description='Cerrar sesión para iniciar otra'
                    left={(props) => <List.Icon{...props} icon='logout' />}
                    onPress={() => console.log('Cerrar sesión')}
                />
            </List.Section>
        </>
    )
}

const styles = StyleSheet.create({

})