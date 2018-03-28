import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { Accelerometer } from 'expo';
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
  }
  onChange = (text) => {
    this.setState({ text });
  }
  onSave = async () => {
    const { text } = this.state;
    try {
      await AsyncStorage.setItem(key, text);
      Alert.alert('Saved', 'locally to device');
    } catch (error) {
      Alert.alert('Error', 'while saving data');
    }
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
  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
    });
  }
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }
  // JSON.stringify(dataObj)  saves object as string
  saveData = () => {
    let dataObj = {
      name: 'dataObjs.name is jason',
      data: 'dataObj.data is 42',
    }
    AsyncStorage.setItem('dataObj', JSON.stringify(dataObj));
  }
  // JSON.stringify(dataObj)  saves object as string
  displayData = async () => {
    try {
      let dataObj = await AsyncStorage.getItem('dataObj');
      alert(dataObj)  // { name: 'dataObj dataObj dataObj\' name',
                      //   data: 'dataObj dataObj dataObj',
                      // }
    // optionally parse
    let parsed = JSON.parse(dataObj)
    alert(parsed.name)
    } catch (error) {
      alert(error);
    }
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

  // // JSON.stringify(arr)  saves arr as string
  // saveData = () => {
  //   let dataArr = [1,2,3,4,11]
  //   AsyncStorage.setItem('dataArr', JSON.stringify(dataArr));
  // }
  // // JSON.stringify(arr)  saves arr as string
  // displayData = async () => {
  //   try {
  //     let dataArr = await AsyncStorage.getItem('dataArr');
  //     alert(dataArr) // [1,2,3,4,11]
  //
  //     // optionally parse
  //     let parsed = JSON.parse(dataArr)
  //     alert(parsed) // 1,2,3,4,11  // no []
  //     alert(parsed[2]) // 3
  //   }
  //   catch (error) {
  //     alert(error);
  //   }
  // }

  render() {
    let { x, y, z } = this.state.accelerometerData;
    const { storedValue, text } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sensor}>
          <Text style={styles.text}>Accelerometer:</Text>
          <Text style={styles.text}>x: {round(x)} y: {round(y)} z: {round(z)}</Text>

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
              <Text style={styles.text}>Click to display</Text>
            </TouchableOpacity>
          </View>

          {/* section idk */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onSave} style={styles.button}>
              <Text style={styles.text}>Click to onSave?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onLoad} style={styles.button}>
              <Text style={styles.text}>Click to onLoad?</Text>
            </TouchableOpacity>
          </View>
          <TextInput onChangeText={this.onChange}
                     value={text}
                     placeholder="placeholder text"
                     style={styles.input} />
         <Text style={styles.text}>{storedValue}</Text>
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
});
