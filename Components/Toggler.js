import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Button, Icon } from 'native-base';
// import { View, Text, StyleSheet } from "react-native";
// import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
// import { Container, Content, Icon } from 'native-base'
// import CardComponent from '../CardComponent'

class Toggler extends Component {
    constructor(props){
      super(props);
      this.state = {
        counter: 0,
        tf: 0,
      }
    }

    dingo = () => {
      if (this.state.tf == 0) {
        this.setState({counter: this.state.counter+1})
        this.setState({tf: this.state.tf+1})
      }
      if (this.state.tf == 1) {
        this.setState({counter: this.state.counter-1})
        this.setState({tf: this.state.tf-1})
      }
    }

    render() {
        return (
          <Button transparent>
              <TouchableOpacity onPress={this.dingo.bind(this)} >
                  <Icon name="ios-heart-outline" style={{color: 'grey'}}>
                    <Text style={styles.shrink}>{this.state.counter}</Text>
                  </Icon>
              </TouchableOpacity>
          </Button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    shrink: {
      fontSize: 11,
    }
});

export default Toggler;
