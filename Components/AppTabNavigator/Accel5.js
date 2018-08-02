import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { Accelerometer } from 'expo';
import { Icon } from 'native-base'
import ChartView from 'react-native-chart-view'

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

  componentDidMount() {
    this._toggle();
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


  // ...
  render() {
      let { x, y, z } = this.state.accelerometerData;
      let { xx, yy, zz } = this.state.accelerometerData;

      var Highcharts='Highcharts';
      var conf={
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {
                        // og
                          // // set up the updating of the chart each second
                          // var series = this.series[0];
                          // setInterval(function () {
                          //     var x = (new Date()).getTime(), // current time
                          //         y = Math.random();
                          //     series.addPoint([x, y], true, true);
                          // }, 1000);

                          // mod
                          // set up the updating of the chart each second
                          var series = this.series[0];
                          setInterval(function () {
                              var x = (new Date()).getTime(), // current time
                                // between 1 and 0
                                  // y = Math.random();
                                  // y = Math.random();
                                  y = round(yy);
                                  // y = this.state.accelerometerData;
                                // between ?? and ??
                                  // y = y;
                                  // y = z;
                              series.addPoint([x, y], true, true);
                          // }, 1000); // 1 second until next data point plots
                        }, 3000); // 3 second until next data point plots
                      }
                  }
              },
              title: {
                  text: 'Live Random Data'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 150
                  // tickPixelInterval: 1000
              },
              yAxis: {
                  title: {
                      text: 'Value'
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  formatter: function () {
                      return '<b>' + this.series.name + '</b><br/>' +
                          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                          Highcharts.numberFormat(this.y, 2);
                  }
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Random data',
                  data: (function () {
                      // generate an array of random data
                      var data = [],
                          time = (new Date()).getTime(),
                          i;

                      for (i = -19; i <= 0; i += 1) {
                          data.push({
                              // og
                              // x: time + i * 1000,
                              // y: Math.random()

                              // mod
                              x: time + i * 3000,
                              // x: x,
                              y: round(yy),
                          });
                      }
                      return data;
                  }())
              }]
          };
    // chart ends


    // let { x, y, z } = this.state.accelerometerData;
    // alert(x); // over and over


    // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    const { storedValue, text } = this.state;
    return (
      <View style={styles.container}>
        {/* fake data */}
        <ChartView style={styles.graph} config={conf}></ChartView>

        <View style={styles.sensor}>
          <Text style={styles.text}>Accelerometer:</Text>
          <Text style={styles.text}>x: {round(x)} y: {round(y)} z: {round(z)}</Text>
          {/* <Text style={styles.text}>x: {round(x)}</Text>
          <Text style={styles.text}>y: {round(y)}</Text>
          <Text style={styles.text}>z: {round(z)}</Text>

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

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.saveData} style={styles.button}>
              <Text style={styles.text}>Click to save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.displayData} style={styles.button}>
              <Text style={styles.text}>Click to display alert</Text>
            </TouchableOpacity> */}
            {/* saved arr values section */}
          {/* </View> */}
          {/* <TouchableOpacity>
            <Text style={styles.text}>Locally Saved Array Data</Text>
            <Text style={styles.bold}>xArr: </Text>
            <Text style={styles.text}>{this.state.xArr}</Text>
            <Text style={styles.bold}>yArr: </Text>
            <Text style={styles.text}>{this.state.yArr}</Text>
            <Text style={styles.bold}>zArr: </Text>
            <Text style={styles.text}>{this.state.zArr}</Text>
          </TouchableOpacity> */}
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
  graph: {
    flex: 1, // full size if not sharing
    // height: 300,

    // backgroundColor: 'red',
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
