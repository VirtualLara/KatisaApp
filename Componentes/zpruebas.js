import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image, } from 'react-native';
import { convert } from 'react-native-html-to-pdf';



export default function zpruebas() {

    const [filePath, setFilePath] = useState('');

    const createPDF = async () => {
        const file = await convert({
            html: '<h1>PDF TEST</h1>',
            fileName: 'test',
            directory: 'Documents',
        })
        console.log(file.filePath);
        setFilePath(file.filePath);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Text style={styles.titleText}>
                PDF ReactNative Texto HTML
            </Text>

            <View style={styles.container}>
                <TouchableOpacity onPress={createPDF}>
                    <View>
                        <Image
                            //We are showing the Image from online
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
                            }}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.textStyle}>Create PDF</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.textStyle}>Path: {filePath}</Text>

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        fontSize: 18,
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    imageStyle: {
        width: 150,
        height: 150,
        margin: 5,
        resizeMode: 'stretch',
    },
})
