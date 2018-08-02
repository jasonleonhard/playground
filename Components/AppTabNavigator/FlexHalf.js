import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'

// export default class AlignItemsBasics extends Component {
export default class Flexy extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-apple" style={{ color: tintColor }} />
      )
  }

  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      // <View style={styles.container}>
      <View style={[styles.whole, styles.column]}>
        <View style={styles.halftall}>
          {/* 3 colors tall, but not flexing */}
          <View>
            <View style={[styles.thirdtall, styles.powderblue]} />
            <View style={[styles.thirdtall, styles.skyblue]} />
            <View style={[styles.thirdtall, styles.steelblue]} />
          </View>

          <View style={[styles.column]}>
            <View style={[styles.thirdtall, styles.powderblue]} />
            <View style={[styles.thirdtall, styles.skyblue]} />
            <View style={[styles.thirdtall, styles.steelblue]} />
          </View>
        </View>


        <View style={styles.halftall}>
          {/* 3 colors tall, but not flexing */}
          <View>
            <View style={[styles.thirdtall, styles.powderblue]} />
            <View style={[styles.thirdtall, styles.skyblue]} />
            <View style={[styles.thirdtall, styles.steelblue]} />
          </View>

          <View style={[styles.column]}>
            <View style={[styles.thirdtall, styles.powderblue]} />
            <View style={[styles.thirdtall, styles.skyblue]} />
            <View style={[styles.thirdtall, styles.steelblue]} />
          </View>
        </View>

      </View>
    );
  }

}

// const =
const styles = StyleSheet.create({
  whole: {
    // display: "flex",
  },
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank: {

  },
  // container2: {
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
  halftall: {
    height: "50%"
  },
  halfwide: {
    width: "50%"
  },
  width50: {
    width: 50,
  },
  height50: {
    height: 50,
  },


  thirdtall: {
    height: "33.33%"
  },
  thirdwide: {
    width: "33.33%"
  },


  f1: {
    flex: '1'
  },
  df: {
    display: 'flex'
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },
  fiddyfiddy: {
    width: 50, height: 50
  },
  skyblue: {
    backgroundColor: 'skyblue'
  },
  steelblue: {
    backgroundColor: 'steelblue'
  },
  powderblue: {
    backgroundColor: 'powderblue'
  },
  //
  // back: {
  //   backgroundColor: 'powderblue'
  // }
  dingo: {
    backgroundColor: 'red'
  }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
