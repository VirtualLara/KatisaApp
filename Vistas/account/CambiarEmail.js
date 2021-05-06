import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';

import { getMeApi, updateUserApi } from '../../api/user';
import UseAuth from '../../hooks/UseAuth';


export default function CambiarEmail() {

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const { auth } = UseAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                console.log(response);
                if (response.email) {
                    await formik.setFieldValue('email', response.email)
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
                Toast.show('Error al actualizar los datos.', {
                    position: Toast.positions.CENTER,
                })
                setLoading(false);
            }

        }
    })

    return (
        <View style={styles.container} >

            <TextInput label='Email' style={styles.label}
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.name}
                error={formik.errors.name} />

            <Button mode='contained' style={styles.button}
                onPress={formik.handleSubmit} loading={loading} > Guardar Cambios </Button>
        </View>
    )
}

function initialValues() {
    return {
        email: '',
    }
}

function validationSchema() {
    return {
        email: Yup.string().required(true),
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