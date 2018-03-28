import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Button, Icon } from 'native-base';

class HeartToggler extends Component {
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
                    <Text>{this.state.counter}</Text>
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
    }
});

export default HeartToggler;
