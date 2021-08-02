import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, TextInput, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { addNewDireccionApi, getDireccionApi, updateDireccionApi } from '../../api/direcciones';
import useAuth from '../../hooks/UseAuth';
import { colorMarca } from '../../utils/colores';

export default function AgregarDireccion(props) {

    const { route: { params } } = props;
    const { auth } = useAuth();
    const [cargando, setCargando] = useState(false);
    const [cargaInfo, setCargainfo] = useState(false);
    const [condicion, setCondicion] = useState(false)
    const [newDireccion, setNewDireccion] = useState(true)
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            if (params?.idDireccion) {
                setNewDireccion(false)
                setCargainfo(true);
                setCondicion(true)
                navigation.setOptions({ title: 'Actualizar Dirección' })
                const response = await getDireccionApi(auth, params.idDireccion)
                await formik.setFieldValue('_id', response._id);
                await formik.setFieldValue('titulo', response.titulo);
                await formik.setFieldValue('nombreapellido', response.nombreapellido);
                await formik.setFieldValue('callenumero', response.callenumero);
                await formik.setFieldValue('colonia', response.colonia);
                await formik.setFieldValue('codigopostal', (response.codigopostal).toString());
                await formik.setFieldValue('ciudad', response.ciudad);
                await formik.setFieldValue('localidadmunicipio', response.localidadmunicipio);
                await formik.setFieldValue('estado', response.estado);
                await formik.setFieldValue('telefono', (response.telefono).toString());
                await formik.setFieldValue('celular', (response.celular).toString());
                await formik.setFieldValue('referenciasdomicilio', response.referenciasdomicilio);
                setCargainfo(false);
            }
        })()
    }, [params])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setCargando(true);
            try {
                if (newDireccion) await addNewDireccionApi(auth, formData)
                else await updateDireccionApi(auth, formData)
                navigation.goBack()
            } catch (error) {
                console.log(error)
                setCargando(false);
            }
        }
    })

    if (!cargaInfo) {
        return (
            <View style={styles.content}  >
                <KeyboardAwareScrollView >

                    <Text style={{ fontSize: 18, fontWeight: 'bold' }} >{condicion ? 'Actualizar Domicilio' : 'Nuevo Domicilio'} </Text>
                    <Text style={{ fontSize: 14, fontWeight: 'normal' }} >Todos los campos son obligatorios... </Text>
                    <View >
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('titulo', text)}
                            value={formik.values.titulo}
                            error={formik.errors.titulo} label='Titulo:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('nombreapellido', text)}
                            value={formik.values.nombreapellido}
                            error={formik.errors.nombreapellido} label='Recibe:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('callenumero', text)}
                            value={formik.values.callenumero}
                            error={formik.errors.callenumero} label='Calle y Número:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('colonia', text)}
                            value={formik.values.colonia}
                            error={formik.errors.colonia} label='Colonia:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('codigopostal', text)}
                            value={formik.values.codigopostal}
                            error={formik.errors.codigopostal} label='Código Postal:' keyboardType='number-pad' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('ciudad', text)}
                            value={formik.values.ciudad}
                            error={formik.errors.ciudad} label='Ciudad:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('localidadmunicipio', text)}
                            value={formik.values.localidadmunicipio}
                            error={formik.errors.localidadmunicipio} label='Localidad o Município:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('estado', text)}
                            value={formik.values.estado}
                            error={formik.errors.estado} label='Estado:' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('telefono', text)}
                            value={formik.values.telefono}
                            error={formik.errors.telefono} label='Teléfono:' keyboardType='number-pad' />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={(text) => formik.setFieldValue('celular', text)}
                            value={formik.values.celular}
                            error={formik.errors.celular} label='Celular:' keyboardType='number-pad' />
                        <TextInput style={{ height: 60, marginTop: 10, height: 130, }}
                            multiline={true}
                            numberOfLines={15}
                            onChangeText={(text) => formik.setFieldValue('referenciasdomicilio', text)}
                            value={formik.values.referenciasdomicilio}
                            error={formik.errors.referenciasdomicilio} label='Referencias de Ubicación:' />
                    </View>

                    <View style={styles.contentBtnGuardar}>
                        <Button
                            mode='contained'
                            style={styles.btnGuardar}
                            onPress={formik.handleSubmit}
                            loading={cargando}
                        >
                            <Text style={styles.textBtn} >{condicion ? 'Guardar cambios' : 'Guardar Dirección'}</Text>
                        </Button>
                    </View>

                </KeyboardAwareScrollView>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={colorMarca} size={75} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colorMarca }} > Obteniendo información...</Text>
            </View>
        )
    }
}

function initialValues() {
    return {
        titulo: '',
        nombreapellido: '',
        callenumero: '',
        colonia: '',
        codigopostal: '',
        ciudad: '',
        localidadmunicipio: '',
        estado: '',
        telefono: '',
        celular: '',
        referenciasdomicilio: '',
    }
}

function validationSchema() {
    return {
        titulo: Yup.string().required(),
        nombreapellido: Yup.string().required(),
        callenumero: Yup.string().required(),
        colonia: Yup.string().required(),
        codigopostal: Yup.number().min(10000).max(99999).required(),
        ciudad: Yup.string().required(),
        localidadmunicipio: Yup.string().required(),
        estado: Yup.string().required(),
        telefono: Yup.number().min(1000000000).max(9999999999).required(),
        celular: Yup.number().min(1000000000).max(9999999999).required(),
        referenciasdomicilio: Yup.string().required(),
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    textInputStyle: {
        height: 60,
        marginTop: 10,
    },
    contentBtnGuardar: {
        paddingTop: 20,
    },
    btnGuardar: {
        backgroundColor: colorMarca,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})