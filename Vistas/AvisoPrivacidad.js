import React, { useState, useCallback } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { List } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { map, size } from 'lodash';

import StatusBarMy from '../Componentes/StatusBarMy';
import { getPoliticasApi } from '../api/politicas';
import { getAvisoApi } from '../api/avisos';

export default function AvisoPrivacidad() {

    const navigation = useNavigation();
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    const [politicas, setPoliticas] = useState(null);
    const [avisos, setAvisos] = useState(null);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const responsePolitica = await getPoliticasApi();
                setPoliticas(responsePolitica);
                const responseAviso = await getAvisoApi();
                setAvisos(responseAviso);
            })()
        }, [])
    )

    return (

        <View style={{ flex: 1 }} >

            <StatusBarMy backgroundColor="#29b6f6" />

            <View style={styles.header}>
                <Icon
                    name="bars"
                    style={{ fontWeight: "bold", color: "#fff", fontSize: 40, color: "#1F618D", }}
                    onPress={() => navigation.openDrawer()}
                />

                <Text style={styles.textHeader}>
                    Aviso y Políticas {" "}
                </Text>

                <Icon
                    name="eye-slash"
                    style={{ fontWeight: "bold", color: "#fff", fontSize: 40 }}
                />
            </View>

            <ScrollView>
                <List.Subheader style={styles.titleAcordeon} >Aviso de Privacidad</List.Subheader>
                {map(avisos, (aviso) => (
                    <List.Accordion title={aviso.titulo} key={aviso._id}>
                        <View style={styles.contentParrafos} >
                            <Text style={styles.parrafo} >{aviso.parrafo1} {'\n'}</Text>
                            <Text style={styles.parrafo} >{aviso.parrafo2} {'\n'}</Text>
                            <Text style={styles.parrafo} >{aviso.parrafo3} {'\n'}</Text>
                            <Text style={styles.parrafo} >{aviso.parrafo4} {'\n'}</Text>
                            <Text style={styles.parrafo} >{aviso.parrafo5} {'\n'}</Text>
                        </View>
                    </List.Accordion>
                ))}

                <List.Subheader style={styles.titleAcordeon} >Políticas de Compra</List.Subheader>
                {map(politicas, (politica) => (
                    <List.Accordion title={politica.titulo} key={politica._id}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={styles.parrafo} >{politica.parrafo1} {'\n'}</Text>
                            <Text style={styles.parrafo} >{politica.parrafo2} {'\n'}</Text>
                            <Text style={styles.parrafo} >{politica.parrafo3} {'\n'}</Text>
                            <Text style={styles.parrafo} >{politica.parrafo4} {'\n'}</Text>
                            <Text style={styles.parrafo} >{politica.parrafo5} {'\n'}</Text>
                        </View>
                    </List.Accordion>
                ))}
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    content: {
        flexDirection: "column",
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#29B6F6",
        height: "8%",
    },
    textHeader: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        height: "auto",
    },
    titleAcordeon: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentParrafos: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    parrafo: {
        width: '90%',
        textAlign: 'justify'
    }
});
