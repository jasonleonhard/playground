import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'

export default class Blank extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-apple" style={{ color: tintColor }} />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Blank</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
