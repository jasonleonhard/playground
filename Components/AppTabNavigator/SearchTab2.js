import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { FlatList, ActivityIndicator, Text, View, StyleSheet, Alert, Button } from "react-native";
import { Icon } from 'native-base'
import { Constants, Video } from 'expo';

export default class Movie extends Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-film" style={{ color: tintColor }} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>bla</Text>

        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
