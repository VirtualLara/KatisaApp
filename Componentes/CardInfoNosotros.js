import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import { API_URL } from '../utils/constants';

export default function CardInfoNosotros(props) {
  const {
    image,
    title,
    subtitle,
    parrafo1,
    parrafo2,
    parrafo3,
    parrafo4,
    parrafo5,
  } = props;

  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri: `${API_URL}${image}`
            }}
          />
          <Body>
            <Text> {title} </Text>
            <Text note> {subtitle} </Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem>
        <Body>
          {/* <Image
                      source={{ uri: "Image URL" }}
                      style={{ height: 200, width: 200, flex: 1 }}
                    /> */}
          <Text style={styles.parrafo}> {parrafo1} </Text>
          <Text style={styles.parrafo}> {parrafo2} </Text>
          <Text style={styles.parrafo}> {parrafo3} </Text>
          <Text style={styles.parrafo}> {parrafo4} </Text>
          <Text style={styles.parrafo}> {parrafo5} </Text>
        </Body>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  parrafo: {
    textAlign: "justify",
  },
});
