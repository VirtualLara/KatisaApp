import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Icon, Accordion, } from "native-base";


const dataArray = [
  { title: "Te ofrecemos:", content: "Todo tipo de iluminación con tecnologia LED, sinonimo de durabilidad, calidad y ahorro." },
  { title: "Nuestras categorias:", content: "Reflectores, Tubos, Focos, Lamparas de sobreponer, Lamparas Slim, Colgantes, Arbotantes, y muchos productos mas." },
  { title: "Donde nos encuentras:", content: "Actualmente estamos presentes en las ciudades de Xalapa, Veracruz y Cordoba. Ubicanos en la seccion sucursales en nuestro menu." },
  { title: "Garantia:", content: "Somos distribuidores directos de marcas que respaldamos con garantia que van desde uno y hasta cinco años" },
  { title: "Distribuimos:", content: "Somo una empresa comprometida con el ahorro y cuidao del medio ambiente, por eso, ofrecemos articulos grantizados, al mejor precio del mercado por ser distribuidores directos de marcas como TECNOLITE" },
  { title: "Siguenos:", content: "Enterate de todas nuestras promociones, y articulos de nuevos, en nuestra redes sociales." },
];

export default class CatAcordeon extends React.Component {

    _renderHeader(item, expanded) {
        return (
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", 
            alignItems: "center" , backgroundColor: "silver" }}>
            <Text style={{ fontWeight: "bold" }}> {" * "} {item.title} </Text>

            {expanded
                ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }


    _renderContent(item) {
        return (
            <Text style={{ backgroundColor: "lightblue", padding: 10, fontStyle: "italic", }} > {item.content} </Text>
        );
    }


    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </Content>
            </Container>
        );
    }
    }
<br/>