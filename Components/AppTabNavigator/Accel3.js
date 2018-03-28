import React from 'react';
import { StyleSheet, Text, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { Accelerometer } from 'expo';
import { Icon } from 'native-base'

// Asyncstorage can only store strings so if you wish to work with objects you have to use stringify Json
export default class AccelerometerSensor extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" style={{ color: tintColor }} />
      )
  }

  state = {
    accelerometerData: {},
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
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

  // // JSON.stringify(dataObj)  saves object as string
  // saveData = () => {
  //   let dataObj = {
  //     name: 'dataObjs.name is jason',
  //     data: 'dataObj.data is 42',
  //   }
  //   AsyncStorage.setItem('dataObj', JSON.stringify(dataObj));
  // }
  // // JSON.stringify(dataObj)  saves object as string
  // displayData = async () => {
  //   try {
  //     let dataObj = await AsyncStorage.getItem('dataObj');
  //     alert(dataObj)  // { name: 'dataObj dataObj dataObj\' name',
  //                     //   data: 'dataObj dataObj dataObj',
  //                     // }
  //   // optionally parse
  //   let parsed = JSON.parse(dataObj)
  //   alert(parsed.name)
  //   }
  //   catch (error) {
  //     alert(error);
  //   }
  // }

  // JSON.stringify(arr)  saves arr as string
  saveData = () => {
    let dataArr = [1,2,3,4,11]
    AsyncStorage.setItem('dataArr', JSON.stringify(dataArr));
  }
  // JSON.stringify(arr)  saves arr as string
  displayData = async () => {
    try {
      let dataArr = await AsyncStorage.getItem('dataArr');
      alert(dataArr) // [1,2,3,4,11]

      // optionally parse
      let parsed = JSON.parse(dataArr)
      alert(parsed) // 1,2,3,4,11  // no []
      alert(parsed[2]) // 3
    }
    catch (error) {
      alert(error);
    }
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    let { x, y, z } = this.state.accelerometerData;

    return (
      <View style={styles.sensor}>
        <Text>Accelerometer:</Text>
        <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._normal} style={[styles.button, styles.middleButton]}>
            <Text>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>

          {/* section */}
          <TouchableOpacity onPress={this.saveData} style={styles.button}>
            <Text>Click to save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.displayData} style={styles.button}>
            <Text>Click to display</Text>
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
    flex: 1
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
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
