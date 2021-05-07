import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';

import { updateUserApi } from '../../api/user';
import UseAuth from '../../hooks/UseAuth';

export default function CambiarContraseña() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigation();
    const { auth, logout } = UseAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationScheme()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await updateUserApi(auth, formData)
                if (response.statusCode) throw Alert.alert(
                    "Error al intentar cambiar la contraseña.",
                    "Intente nuevamente.",
                    [
                        {
                            tex: "SI",
                        },
                    ],
                    {
                        cancelable: true,
                    }
                );
                logout();
            } catch (error) {
                Toast.show(error, {
                    positiion: Toast.positiion.CENTER
                })
                setLoading(false);
            }

        }
    });

    return (
        <View style={styles.container} >

            <TextInput label="Nueva contraseña" style={styles.label}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
                secureTextEntry />

            <TextInput label="Repetir Nueva Contraseña" style={styles.label}
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
                secureTextEntry />

            <Button mode="contained" style={styles.button}
                onPress={formik.handleSubmit} loading={loading} > Guardar Cambios </Button>
        </View>
    )
}

function initialValues() {
    return {
        password: '',
        repeatPassword: '',
    }
}

function validationScheme() {
    return {
        password: Yup.string().min(4, true).required(true),
        repeatPassword: Yup.string().min(4, true).oneOf([Yup.ref('password')], true).required(true),
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        width: "100%",
        marginTop: 20,
    },
    button: {
        width: "100%",
        marginTop: 20,
        height: 50,
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
    }
})