import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
                await formik.setFieldValue("email", response.email);
            })()
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);

            try {
                const response = await updateUserApi(auth, formData);
                if (response.statusCode) throw Alert.alert(
                    "Este correo ya esta registrado.",
                    "Ingrese otro correo.",
                    [
                        {
                            tex: "SI",
                        },
                    ],
                    {
                        cancelable: true,
                    }
                );;
                navigation.goBack();
            } catch (error) {
                formik.setFieldError("email", true)
                setLoading(false);
            }
        }
    })

    return (
        <View style={styles.container} >

            <TextInput label="Email" style={styles.label}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                value={formik.values.email}
                error={formik.errors.email} />

            <Button mode="contained" style={styles.button}
                onPress={formik.handleSubmit} loading={loading} > Guardar Cambios </Button>
        </View>
    )
}

function initialValues() {
    return {
        email: "",
    }
}

function validationSchema() {
    return {
        email: Yup.string().email(true).required(true),
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