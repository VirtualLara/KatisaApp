import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Keyboard, Animated } from "react-native";
import { Button, Badge } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

import { Searchbar } from "react-native-paper";

export default function Search(props) {

  const { cantidad } = props;
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const onSearch = () => {
    closeSearch();

    navigation.push('SearchView', {
      search: searchQuery
    })
  }

  const closeSearch = () => {
    Keyboard.dismiss();
  }

  return (

    <View style={styles.contentSearch} >
      <Searchbar style={styles.searchStyle}
        placeholder='Escriba para filtrar'
        value={searchQuery}

        onChangeText={onChangeSearch}
        onSubmitEditing={onSearch} />

      <View style={styles.viewBtn}>
        <Button info badge style={styles.btn}>
          <Badge warning>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "white" }}>
              {cantidad}
            </Text>
          </Badge>
          <Icon name="cart-arrow-down" size={30} color="white" />
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
    width: "70%",
    height: 50,
  },
  viewBtn: {
    width: "25%",
    height: 50,
  },
  btn: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
