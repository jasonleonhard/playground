import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.png')} />
                        <Body>
                            <Text>Jason </Text>
                            <Text note>March 18, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 40}}>
                    <Left>
                        {/* <Button transparent> */}
                            <HeartToggler></HeartToggler>
                        {/* </Button> */}
                        {/* <Button transparent> */}
                            <ChatToggler></ChatToggler>
                        {/* </Button> */}
                        {/* <Button transparent> */}
                            <SendToggler></SendToggler>
                        {/* </Button> */}
                        {/* <Button transparent> */}
                            <HeartToggler></HeartToggler>
                        {/* </Button> */}
                        <Trois/>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>
                                {this.state.user}
                            </Text>
                            <Text style={{ fontWeight: "500" }}>
                                {' ' + this.state.text}
                            </Text>
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
    }
});
