import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { List, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import useAuth from "../../hooks/UseAuth";


export default function Menu() {

    const { logout } = useAuth();
    const logoutAccount = () => {
        Alert.alert(
            "Si contunua cerrara su sesión.",
            "¿Continuar...?",
            [
                {
                    tex: "NO",
                },
                {
                    tex: "SI",
                    onPress: logout
                },
            ],
            {
                cancelable: true,
            }
        );
    };

    const navigation = useNavigation();

    return (
        <>
            <List.Section>
                <List.Subheader> Mi cuenta </List.Subheader>
                <List.Item
                    title='Cambiar Nombre'
                    description='Cambiar el nombre de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='face' />}
                    onPress={() => navigation.navigate('CambiarNombre')}
                />
                <List.Item
                    title='Cambiar Email'
                    description='Cambiar el email de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='at' />}
                    onPress={() => navigation.navigate('CambiarEmail')}
                />
                <List.Item
                    title='Cambiar Nombre de Usuario'
                    description='Cambiar el nombre de usuario de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='sim' />}
                    onPress={() => navigation.navigate('CambiarUsuario')}
                />
                <List.Item
                    title='Cambiar Contraseña'
                    description='Cambiar la contraseña de tu cuenta'
                    left={(props) => <List.Icon{...props} icon='key' />}
                    onPress={() => navigation.navigate('CambiarContraseña')}
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
                    title='Mis Compras'
                    description='Listado de tus Compras'
                    left={(props) => <List.Icon{...props} icon='cart-plus' />}
                    onPress={() => console.log('Compras')}
                />
                <List.Item
                    title='Mis Cotizaciones'
                    description='Listado de tus cotizaciones'
                    left={(props) => <List.Icon{...props} icon='clipboard-list' />}
                    onPress={() => console.log('Cotizaciones')}
                />
                <List.Item
                    title='Lista de Deseos'
                    description='Listado de artículos que te gustaron'
                    left={(props) => <List.Icon{...props} icon='heart' />}
                    onPress={() => navigation.navigate('Favorites')}
                />
                <List.Item
                    title='Cerrar Sesión'
                    description='Cerrar sesión para iniciar otra'
                    left={(props) => <List.Icon{...props} icon='logout' />}
                    onPress={() => logoutAccount()}
                />
            </List.Section>
        </>
    )
}

const styles = StyleSheet.create({

})