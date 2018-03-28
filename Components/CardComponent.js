import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View} from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import api from '../api';
import ChatToggler from './ChatToggler';
import HeartToggler from './HeartToggler';
import SendToggler from './SendToggler';
import Trois from './Trois';

class CardComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: [],
        text: [],
        counter: 1,
        tf: 0,
      }
    }

    componentWillMount(){ // componentDidMount() {
      api.getData().then((res) => {
        this.setState({
          user: res.text.substring(0,10),
          text: res.text.substring(0,300)
        })
      }).catch(error => console.log(error))
    }

    onPress = () => {
      this.setState({
        counter: this.state.counter+1
      })
    }

    render() {
        const images = {
            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.jpg'),
            "4": require('../assets/feed_images/4.jpg'),
            "5": require('../assets/feed_images/5.jpg'),
            "6": require('../assets/feed_images/6.jpg'),
            "7": require('../assets/feed_images/7.jpg'),
            "8": require('../assets/feed_images/8.jpg'),
            "9": require('../assets/feed_images/9.jpg'),
            "10": require('../assets/feed_images/10.jpg')
        }

        var dateFormat = require('dateformat');
        var now = new Date();
        // var today = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        var today = dateFormat(now, "dddd, mmmm dS, yyyy");

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail style={styles.frame} source={require('../assets/me.png')} />
                        <Body>
                            <Text>Jason </Text>
                            {/* <Text note>March 18, 2018</Text> */}
                            <Text style={styles.date} note>{today}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                  {/* <TouchableHighlight
                          style={styles.button}
                          onPress={this.onPress}
                         >
                    <Text> Touch Here {this.state.counter} </Text>
                  </TouchableHighlight> */}
                  <Image source={images[this.props.imageSource]} style={styles.imgFlex} />
                </CardItem>
                <CardItem style={styles.h40}>
                    <Left>
                        <HeartToggler></HeartToggler>
                        <ChatToggler></ChatToggler>
                        <SendToggler></SendToggler>
                        <HeartToggler></HeartToggler>
                        <Trois/>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={styles.fw900}>{this.state.user}</Text>
                            <Text style={styles.fw500}>{' ' + this.state.text}</Text>
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    date: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'grey',
        fontSize: '11%',
    },
    counter: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // color: 'grey',
        // fontSize: '10%',
    },
    h40: {
      height: 40,
    },
    fw900: {
      fontWeight: "900",
    },
    fw500: {
      fontWeight: "500",
      fontSize: 13,
    },
    imgFlex: {
      height: 200,
      width: null,
      flex: 1,
      // borderRadius: 4,
      // borderWidth: 4.5,
      // borderColor: '#d6d7da',
    },
    rad: {
      borderRadius: 4,
      borderWidth: 44.5,
      // borderColor: '#d6d7da',
      borderColor: 'red',
    },
    frame: {
      // borderRadius: 4,
      borderWidth: 1,
      borderColor: '#d6d7da',
    }
});
