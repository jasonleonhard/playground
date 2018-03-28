import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, Accelerometer } from 'expo';
import { Icon } from 'native-base'

export default class Accel extends Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" style={{ color: tintColor }} />
      )
  }

  state = {
    accelerometerData: { x: 0, y: 0, z: 0 }
  };

  componentWillUnmount() {
    this._unsubscribeFromAccelerometer();
  }

  componentDidMount() {
    this._subscribeToAccelerometer();
  }

  _subscribeToAccelerometer = () => {
    this._acceleroMeterSubscription = Accelerometer.addListener(accelerometerData =>
      this.setState({ accelerometerData })
    );
  };

  _unsubscribeFromAccelerometer = () => {
    this._acceleroMeterSubscription && this._acceleroMeterSubscription.remove();
    this._acceleroMeterSubscription = null;
  };

  render() {
    return (
      <View style={styles.container}>


        <Text>
          Accelerometer:
          x = {this.state.accelerometerData.x.toFixed(2)}{', '}
          y = {this.state.accelerometerData.y.toFixed(2)}{', '}
          z = {this.state.accelerometerData.z.toFixed(2)}
        </Text>

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
