import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Button, Badge } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";

export default function Search(props) {
  const { cantidad } = props;
  return (
    <View style={styles.contentSearch}>
      <Searchbar style={styles.searchStyle} />

      <View style={styles.viewBtn}>
        <Button info badge style={styles.btn}>
          <Badge warning>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              {cantidad}
            </Text>
          </Badge>
          <Icon name="cart-arrow-down" size={40} color="white" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#29b6f6",
  },
  searchStyle: {
    width: "60%",
    height: 50,
  },
  viewBtn: {
    width: "30%",
    height: 50,
  },
  btn: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
