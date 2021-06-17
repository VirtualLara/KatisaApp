import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function FormularioPago(props) {

    const { products, direccionSeleccionada, totalPagar } = props;

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            console.log('pagando...')
            console.log(formData)
        }
    })

    return (
        <View style={styles.content} >
            <Text style={styles.title} >Forma de pago</Text>

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
                    <TextInput label='Mes' style={styles.inputDate}
                        keyboardType='numeric'
                        onChangeText={(text) => formik.setFieldValue('expo_month', text)}
                        value={formik.values.expo_month}
                        error={formik.errors.expo_month} />

                    <TextInput label='Año' style={styles.inputDate}
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

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ width: '90%' }} >
                    <Button mode='contained' contentStyle={styles.btnContent} labelStyle={styles.btnText}
                        onPress={formik.handleSubmit} >
                        Pagar (
                        <Text>  </Text>
                        <Text style={{ color: 'yellow' }} >Total:  {currencyFormat(totalPagar)}</Text>)
                    </Button>
                </View>
            </View>

        </View>
    )
}

function initialValues() {
    return {
        number: '',
        expo_month: '',
        exp_year: '',
        cvc: '',
        name: ''
    }
}

function validationSchema() {
    return {
        number: Yup.string().min(16, true).max(16, true).required(true),
        expo_month: Yup.string().min(2, true).max(2, true).required(true),
        exp_year: Yup.string().min(2, true).max(2, true).required(true),
        cvc: Yup.string().min(3, true).max(3, true).required(true),
        name: Yup.string().min(4, true).required(true),
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop: 40,
        marginBottom: 30,
    },
    title: {
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        width: '95%',
        margin: 5,
    },
    containerInputs: {
        flexDirection: 'row',
        width: '85%',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    containerFecha: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    inputDate: {
        width: 100,
        marginRight: 10,
    },
    inputCvc: {
        width: '40%'
    },
    btnContent: {
        paddingVertical: 4,
        //backgroundColor: '#00bb2d',
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: 'silver'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})