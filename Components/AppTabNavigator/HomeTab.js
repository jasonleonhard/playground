import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Content, Icon } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                  <CardComponent imageSource="1" likes="121" />
                  <CardComponent imageSource="2" likes="42" />
                  <CardComponent imageSource="3" likes="69" />
                  <CardComponent imageSource="4" likes="49" />
                  <CardComponent imageSource="5" likes="42" />
                  <CardComponent imageSource="6" likes="22" />
                  <CardComponent imageSource="7" likes="73" />
                  <CardComponent imageSource="8" likes="42" />
                  <CardComponent imageSource="9" likes="241" />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
