import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { Accelerometer } from 'expo';

import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Icon } from 'native-base'

// AsyncStorage can only store strings so if you wish to work with objects you have to use stringify Json
// ios uses dict, android uses sqlite or other
const key = '@MyApp:key';
export default class AccelerometerSensor extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" style={{ color: tintColor }} />
      )
  }

  state = {
    accelerometerData: {},
    text: '',
    storedValue: '',
    xArr: [],
    yArr: [],
    zArr: [],
  }

  componentWillMount() {
    this.onLoad();
  }
  componentDidMount() {
    this._toggle();
  }
  onLoad = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      this.setState({storedValue});
    } catch (error) {
      Alert.alert('Error', 'while loading data');
    }
  if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }
  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }
  _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  }
  _normal = () => {
    Accelerometer.setUpdateInterval(500);
  }
  _fast = () => {
    Accelerometer.setUpdateInterval(16);
  }
  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
      this.setState({ accelerometerData });
    });
  }
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }
  // JSON.stringify(obj)  saves object as string
  saveData = () => {
    let obj = {
      data: this.state.accelerometerData,
    }
    AsyncStorage.setItem('obj', JSON.stringify(obj));
  }
  displayData = async () => {
    try {
      let obj = await AsyncStorage.getItem('obj');
      alert(obj) // { data: .... , x: ... }
      // let parsed = JSON.parse(obj)
    } catch (error) {
      alert(error);
    }
  }

  // different
  displayDataInline = async () => {
    try {
      let obj = await AsyncStorage.getItem('obj');
      let parsed = JSON.parse(obj)

      let xRounded = round(parsed.data.x)
      let xStr = JSON.stringify(xRounded)
      this.state.xArr.push(xRounded)
      this.state.xArr.push(', ')
      // alert(xRounded) // works

      let yRounded = round(parsed.data.y)
      let yStr = JSON.stringify(yRounded)
      this.state.yArr.push(yRounded)
      this.state.yArr.push(', ')
      // alert(yRounded) // works

      let zRounded = round(parsed.data.z)
      let zStr = JSON.stringify(zRounded)
      this.state.zArr.push(zRounded)
      this.state.zArr.push(', ')
      // alert(zRounded) // works
    } catch (error) {
      alert(error);
    }
  }

  render() {
    let { x, y, z } = this.state.accelerometerData;
    // alert(x); // over and over

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const { storedValue, text } = this.state;
    return (
      <View style={styles.container}>
          <AreaChart
              style={ { height: 200 } }
              data={ data }
              contentInset={ { top: 30, bottom: 30 } }
              curve={shape.curveNatural}
              svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          />

        <View style={styles.sensor}>
          <Text style={styles.text}>Accelerometer:</Text>
          {/* <Text style={styles.text}>x: {round(x)} y: {round(y)} z: {round(z)}</Text> */}
          <Text style={styles.text}>x: {round(x)}</Text>
          <Text style={styles.text}>y: {round(y)}</Text>
          <Text style={styles.text}>z: {round(z)}</Text>

          {/* section */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this._toggle} style={styles.button}>
              <Text style={styles.text}>Toggle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._slow} style={[styles.button]}>
              <Text style={styles.text}>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._normal} style={[styles.button]}>
              <Text style={styles.text}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._fast} style={styles.button}>
              <Text style={styles.text}>Fast</Text>
            </TouchableOpacity>
          </View>

          {/* section */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.saveData} style={styles.button}>
              <Text style={styles.text}>Click to save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.displayData} style={styles.button}>
              <Text style={styles.text}>Click to display alert</Text>
            </TouchableOpacity>
            {/* saved arr values section */}
            <TouchableOpacity onPress={this.displayDataInline} style={styles.button}>
              <Text style={styles.text}>Click to display inline</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.text}>Locally Saved Array Data</Text>
            <Text style={styles.bold}>xArr: </Text>
            <Text style={styles.text}>{this.state.xArr}</Text>
            <Text style={styles.bold}>yArr: </Text>
            <Text style={styles.text}>{this.state.yArr}</Text>
            <Text style={styles.bold}>zArr: </Text>
            <Text style={styles.text}>{this.state.zArr}</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // full size if not sharing
    backgroundColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36454F',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    color: '#eee',
  },
  text: {
    color: 'white',
  },
  input: {
    color: 'white',
    height: 100,
    borderRadius: 3,
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.5,
    shadowColor: '#36454F',
    shadowOpacity: 1.0,
    shadowOffset: {  width: 3,  height: 3,  },
  },
  bold: {
    fontWeight: 'bold',
  }
});
