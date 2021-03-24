import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class CarruselImagenes extends Component {
    constructor(props){
        super(props)
        this.carrouselIntevalo=this.carrouselIntevalo.bind(this);

        this.state={
            imagenes:[
            {url:'http://mlm-s1-p.mlstatic.com/606212-MLM27899225148_082018-O.jpg'},
            {url:'https://www.ecoglowled.cl/wp-content/uploads/2018/09/LUMINARIA-PUBLICA-BRISA-100W.jpg'},
            {url:'https://www.tirasdeledbaratas.com/4878-large_default/lampara-dicroica-led-gu10-120%C2%BA-smd2835-6w-480-l%C3%BAmenes.jpg'},
            {url:'https://http2.mlstatic.com/D_NP_838359-MLM27366666611_052018-Q.jpg'},  
            {url:'http://luxzone.mx/wp-content/uploads/2019/01/tubo-lampara-led-t8-de-120cm-con-base-envio-oferta-D_NQ_NP_723915-MLM25337444665_022017-F.jpg'},
            {url:'https://i.ytimg.com/vi/PXSui58KyP0/maxresdefault.jpg'},          
        ],

        posicionActual:0,
        }
    }

    componentDidMount(){ 
            this.carrouselIntevalo()
    }

    carrouselIntevalo (){
        setInterval(() => {
            this.setState({
                posicionActual: this.state.posicionActual === this.state.imagenes.length ? 0 : this.state.posicionActual+1 
            })
        }, 3000);
    }

    render(){
        return(
            <View style={styles.contenedor}>
                <Slideshow dataSource={this.state.imagenes} ovelay={true}
                    position={this.state.posicionActual} 
                    onPositionChanged={position => this.setState({ posicionActual:position})}
                    height={290}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    contenedor:{
        flex:1,
        height: '100%',
    },
})