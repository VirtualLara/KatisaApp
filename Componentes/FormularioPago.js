import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { size } from 'lodash';
import { useNavigation } from '@react-navigation/native';

import useAuth from '../hooks/UseAuth';
const stripe = require('stripe-client')(STRIPE_PUBLISHABLE_KEY);
import { STRIPE_PUBLISHABLE_KEY } from '../utils/constants';
import { pagoCarritoApi, deleteCarritoApi } from '../api/carrito';
import { colorMarca } from '../utils/colores';

export default function FormularioPago(props) {

    const navigation = useNavigation();
    const { products, direccionSeleccionada, totalPagar } = props;
    const { auth } = useAuth();
    const [loading, setLoading] = useState(false);

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const result = await stripe.createToken({ card: formData });

            if (result?.error) {
                setLoading(false);
                Alert.alert('Datos incorrectos, pago no realizado.')
            } else {
                const response = await pagoCarritoApi(
                    auth,
                    result.id,
                    products,
                    direccionSeleccionada
                );

                if (size(response) > 0) {
                    await deleteCarritoApi();
                    Alert.alert('Pago exitoso y aprobado',
                        'En breve nos ponemos en contacto con usted para coordinar su envío. Redireccionando a sus pedidos realizados.',
                        [
                            {
                                style: 'default',
                                text: 'Entendido',
                                onPress: navigation.navigate('AccountStack', { screen: 'Compras' })
                            }
                        ]
                    )

                } else {
                    Alert.alert('Error al realizar el pago',
                        'Por favor revise sus datos, así como la dirección de envío ya que es requerida',
                        [
                            {
                                style: 'default',
                                text: 'Entendido',
                            }
                        ]
                    )
                }
                setLoading(false)
            }
        }
    })

    return (
        <View style={styles.content} >
            <Text style={styles.title} >Forma de pago</Text>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }} >
                <View style={styles.contentCard} >

                    <TextInput label='Nombre de la tarjeta' style={styles.input}
                        onChangeText={(text) => formik.setFieldValue('name', text)}
                        value={formik.values.name}
                        error={formik.errors.name} />

                    <TextInput label='Numero de la tarjeta' style={styles.input}
                        keyboardType='numeric'
                        onChangeText={(text) => formik.setFieldValue('number', text)}
                        value={formik.values.number}
                        error={formik.errors.number} />

                    <View style={styles.containerInputs} >
                        <View style={styles.containerFecha} >
                            <TextInput label='Mes (MM)' style={styles.inputDate}
                                keyboardType='numeric'
                                onChangeText={(text) => formik.setFieldValue('exp_month', text)}
                                value={formik.values.exp_month}
                                error={formik.errors.exp_month} />

                            <TextInput label='Año (YY)' style={styles.inputDate}
                                keyboardType='numeric'
                                onChangeText={(text) => formik.setFieldValue('exp_year', text)}
                                value={formik.values.exp_year}
                                error={formik.errors.exp_year} />
                        </View>
                        <TextInput label='CW/CVC' style={styles.inputCvc}
                            keyboardType='numeric'
                            onChangeText={(text) => formik.setFieldValue('cvc', text)}
                            value={formik.values.cvc}
                            error={formik.errors.cvc} />
                    </View>


                </View>


                <View style={{ width: '90%', marginTop: 10, }} >
                    <Button mode='contained' contentStyle={styles.btnContent} labelStyle={styles.btnText}
                        onPress={!loading && formik.handleSubmit}
                        loading={loading}>
                        Pagar (
                        <Text>  </Text>
                        <Text style={{ color: '#fff' }} >Total:  {currencyFormat(totalPagar)}</Text>)
                    </Button>
                </View>
            </View>

        </View>
    )
}

function initialValues() {
    return {
        number: '',
        exp_month: '',
        exp_year: '',
        cvc: '',
        name: ''
    }
}

function validationSchema() {
    return {
        number: Yup.string().min(16, true).max(16, true).required(true),
        exp_month: Yup.string().min(2, true).max(2, true).required(true),
        exp_year: Yup.string().min(2, true).max(2, true).required(true),
        cvc: Yup.string().min(3, true).max(3, true).required(true),
        name: Yup.string().min(4, true).required(true),
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
    },
    contentCard: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: .5,
        borderColor: 'purple',
        //backgroundColor: '#283747',
        backgroundColor: '#2874A6',
        padding: 5,
    },
    title: {
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        width: '95%',
        margin: 5,
        height: 55,
    },
    containerInputs: {
        flexDirection: 'row',
        width: '95%',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerFecha: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    inputDate: {
        width: 100,
        marginRight: 10,
        height: 55,
    },
    inputCvc: {
        width: '30%',
        height: 55,
    },
    btnContent: {
        paddingVertical: 4,
        //backgroundColor: '#00bb2d',
        backgroundColor: colorMarca,
        borderWidth: 2,
        borderColor: '#2874A6',
        height: 70,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})