import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getMeApi, updateUserApi } from '../../api/user';
import UseAuth from '../../hooks/UseAuth';

export default function Cambiarnombre() {

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const { auth } = UseAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                if (response.name && response.lastname) {
                    await formik.setFieldValue('name', response.name)
                    await formik.setFieldValue('lastname', response.lastname)
                }
            })()
        }, [])
    );


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);

            try {
                await updateUserApi(auth, formData);
                navigation.goBack();
            } catch (error) {
                Alert.alert(
                    "Error al actualizar los datos.",
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
                setLoading(false);
            }

        }
    })

    return (
        <View style={styles.container}>
            <TextInput label='Nombre' style={styles.label}
                onChangeText={(text) => formik.setFieldValue('name', text)}
                value={formik.values.name}
                error={formik.errors.name} />

            <TextInput label='apellidos' style={styles.label}
                onChangeText={(text) => formik.setFieldValue('lastname', text)}
                value={formik.values.lastname}
                error={formik.errors.lastname} />

            <Button mode='contained' style={styles.button}
                onPress={formik.handleSubmit} loading={loading}> Guardar Cambios </Button>
        </View>
    )
}

function initialValues() {
    return {
        name: '',
        lastname: ''
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
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