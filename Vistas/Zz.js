<View style={styles.contentBody}>
  <View style={{ height: "85%" }}>
    <View style={{ height: "30%" }}>
      <CardItem style={{ height: "100%" }}>
        <Left>
          <Thumbnail source={require("../Recursos/Imagenes/logo.png")} />
          <Body>
            <Text> {this.state.noticia[this.state.numNoticia].tittle} </Text>
            <Text note>
              {" "}
              {this.state.noticia[this.state.numNoticia].tittle}{" "}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </View>

    <CardItem style={{ height: "70%" }}>
      <ScrollView>
        <Text style={styles.textNoticia}>
          {this.state.noticia[this.state.numNoticia].infoNoticia.parrafo1}{" "}
          {"\n"}
          {"\n"}
          {this.state.noticia[this.state.numNoticia].infoNoticia.parrafo2}{" "}
          {"\n"}
          {"\n"}
          {this.state.noticia[this.state.numNoticia].infoNoticia.parrafo3}{" "}
          {"\n"}
          {"\n"}
          {this.state.noticia[this.state.numNoticia].infoNoticia.parrafo4}{" "}
          {"\n"}
          {"\n"}
          {this.state.noticia[this.state.numNoticia].infoNoticia.parrafo5}{" "}
          {"\n"}
          {"\n"}
        </Text>
      </ScrollView>
    </CardItem>
  </View>

  <View
    style={{
      height: "15%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Button
      iconLeft
      onPress={() => {
        if (this.state.numNoticia !== 0) {
          this.setState({ numNoticia: this.state.numNoticia - 1 });
        } else {
          Alert.alert(
            "Estas en la primer noticia." + `\n` + "No hay mas para mostar..."
          );
        }
      }}
      style={styles.buttonArrow}
    >
      <Icon name="arrow-back" style={styles.iconArrow} />
      <Text style={styles.textButtonArrow}> Anterior </Text>
    </Button>

    <Button
      iconRight
      onPress={() => {
        if (this.state.numNoticia <= this.state.noticia.length - 2) {
          this.setState({ numNoticia: this.state.numNoticia + 1 });
        } else {
          Alert.alert(
            "Estas en la ultima noticia." + `\n` + "En breve publicaremos..."
          );
        }
      }}
      style={styles.buttonArrow}
    >
      <Text style={styles.textButtonArrow}> Siguiente </Text>
      <Icon name="arrow-forward" style={styles.iconArrow} />
    </Button>
  </View>
</View>;
