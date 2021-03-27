import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';

const cards = [
  {
    text: 'a',
    name: 'a',
    info: 'a',
    image: require('../Recursos/Imagenes/logo.png'),
  },
  {
    text: 'Suspencion de labores',
    name: 'Semana Santa',
    info: 'Por festejo de semana santa se suspenden labores los proximos dias 1 y 2 de abril del presente año.'+
    'Reanudando labores el dia 3 de abril en todas nuestras sucursales como de costumbre',
    image: require('../Recursos/Imagenes/logo.png'),
  },
  {
    text: 'Apertura Nueva Sucursal',
    name: 'Xalapa Nueva',
    info: 'Te invitamos a que visites nuestra nueva sucursal ubicada en la calle: esta calle, de la colonia: esta colonia',
    image: require('../Recursos/Imagenes/logo.png'),
  },
  {
    text: 'Otra Notica Mas',
    name: 'Semana Santa',
    info: 'Por festejo de semana santa se suspenden labores los proximos dias 1 y 2 de abril del presente año.',
    image: require('../Recursos/Imagenes/logo.png'),
  },
  {
    text: 'Nueva Linea de Lamparas Decorativas',
    name: 'Nueva Marca',
    info: 'Por festejo de semana santa se suspenden labores los proximos dias 1 y 2 de abril del presente año.',
    image: require('../Recursos/Imagenes/logo.png'),
  },
];

export default class CardNotica extends Component {

  render() {

    return (

      <Container tyle={{ height: '100%' }}>
          
            <View style={{ height: '80%' }}>

                <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        dataSource={cards}
                            renderEmpty={ () =>
                            <View style={{ alignSelf: "center" }} >
                                <Text>Over</Text>
                            </View>
                        }

                        renderItem={item =>
                                
                            <Card style={{ height:260 }}>
                                
                                <View style={{ height: '30%', backgroundColor: 'blue'  }}> 
                                    <CardItem  style={{ height: '100%'}} >
                                        <Left>
                                            <Thumbnail source={item.image} />
                                            <Body>
                                                <Text>{item.text}</Text>
                                                <Text note> {item.name} </Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </View>

                                <View style={{ height: '70%', backgroundColor: 'blue'  }}>
                                    <CardItem cardBody 
                                                style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center',  }}>
                                        <Text style={{ padding: 5, margin:5 , height: '100%', width: '100%', textAlign: 'justify', backgroundColor: 'silver' }} > 
                                            {item.info}
                                        </Text>
                                    </CardItem>
                                 </View>

                                </Card>
                           
                        }
                        
                />

            </View>

            <View style={{ height: '20%', flexDirection: "row", flex: 1, position: "absolute", 
                    bottom: 5, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                
                <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()} style={{ backgroundColor: '#039BE5', }} >
                    <Icon name="arrow-back" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />
                    <Text> Anterior </Text>
                </Button>
                
                <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()} style={{ backgroundColor: '#039BE5', }} >
                    <Text> Siguiente </Text>
                    <Icon name="arrow-forward" style={{ fontWeight: 'bold', color: '#fff', fontSize: 40 }} />
                </Button>
            </View>

      </Container>
    );
  }
}