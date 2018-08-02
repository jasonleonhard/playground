import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { Accelerometer } from 'expo';
import { Icon } from 'native-base'

import ChartView from 'react-native-highcharts';
// npm install react-native-highcharts --save

export default class AccelerometerSensor extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-pulse" style={{ color: tintColor }} />
      )
  }

  render() {
      var Highcharts='Highcharts';
      var conf={
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {

                          // set up the updating of the chart each second
                          var series = this.series[0];
                          setInterval(function () {
                              var x = (new Date()).getTime(), // current time
                                  y = Math.random();
                              series.addPoint([x, y], true, true);
                          }, 1000);
                      }
                  }
              },
              title: {
                  text: 'Live Random Data'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 150
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
                              x: time + i * 1000,
                              y: Math.random()
                          });
                      }
                      return data;
                  }())
              }]
          };
      return (
        // <ChartView style={{height:300}} config={conf}></ChartView>
        // <ChartView style={{height:700}} config={conf}></ChartView>
        <ChartView style={styles.container} config={conf}></ChartView>
      );
  }
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
