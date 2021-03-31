import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class CarruselImagenes extends Component {

    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            title: 'Title 1',
            caption: 'Caption 1',
            url: 'http://placeimg.com/640/480/any',
          }, {
            title: 'Title 2',
            caption: 'Caption 2',
            url: 'http://placeimg.com/520/480/any',
          }, {
            title: 'Title 3',
            caption: 'Caption 3',
            url: 'http://placeimg.com/940/480/any',
          },
        ],
      };
    }
   
    UNSAFE_componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }