import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Spinner } from "native-base";

import StatusBarMy from "../Componentes/StatusBarMy";


export default class RenderApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      dataArray: [],
    };
  }

  componentDidMount() {
    return fetch("http://192.168.100.26:4030/api/existencias/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchExist(cve) {
    let articulo = this.state.dataSource.find(
      (element) => (element.CVE_ART = cve)
    );
    let existencia = articulo.EXIST;
    return existencia;
  }

  existeFoto(cve) {
    if (fs.existsSync(`../Recursos/fotos${cve}.jpg`)) {
      console.log("El archivo EXISTE!");
    } else {
      console.log("El archivo NO EXISTE!");
    }
  }

  renderExist() {
    return this.state.dataSource.map((Item, key) => {
      return (
        <View
          key={key}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "30%",
              borderColor: "black",
              borderWidth: 0.5,
              height: 70,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {this.existeFoto(Item.CVE_ART)}
              {/* {console.log("'" + `${this.foto(Item.CVE_ART)}` + "'")} */}
              {/* {this.llenarSrreglo(Item.CVE_ART)} */}
            </View>
            <View style={{ width: "100%", height: "25%" }}>
              <Text style={{ textAlign: "center" }}>{Item.CVE_ART}</Text>
            </View>
          </View>
          <View
            style={{
              width: "55%",
              borderColor: "black",
              borderWidth: 0.5,
              height: 70,
            }}
          >
            <Text>{Item.DESCR}</Text>
          </View>
          <View
            style={{
              width: "15%",
              borderColor: "black",
              borderWidth: 0.5,
              height: 70,
            }}
          >
            <Text style={{ textAlign: "center" }}>{Item.EXIST}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner color="blue" />
          <Text>Obteniedo datos...</Text>
        </View>
      );
    } else {
      return (
        <View>
          <StatusBarMy />

          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "30%",
                  borderColor: "black",
                  borderWidth: 0.5,
                  height: 37,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  CLAVE
                </Text>
              </View>
              <View
                style={{
                  width: "55%",
                  borderColor: "black",
                  borderWidth: 0.5,
                  height: 37,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  DESCRIPCION
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  borderColor: "black",
                  borderWidth: 0.5,
                  height: 37,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  EXIST
                </Text>
              </View>
            </View>
            <ScrollView>{this.renderExist()}</ScrollView>
            {console.log(this.searchExist(3400064))}
          </View>
        </View>
      );
    }
  }
}
