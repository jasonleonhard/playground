import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View } from 'react-native';
import { Icon } from 'native-base'

export default class Bananas extends Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pause" style={{ color: tintColor }} />
      )
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image style={styles.img1} source={pic} />
        <Image style={styles.img2} source={pic} />
        <Image style={styles.img1} source={pic} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // justifyContent: 'center'
  },
  img1: {
    flex: 1,
    // justifyContent: 'center'
  },
  img2: {
    flex: 2,
    // justifyContent: 'center'
  },
})
