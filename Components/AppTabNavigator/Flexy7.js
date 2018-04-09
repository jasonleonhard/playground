import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from 'native-base'

// export default class AlignItemsBasics extends Component {
export default class Flexy extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-apple" style={{ color: tintColor }} />
      )
  }

  bingo() {
    console.log('bingo')
  }
  bingo2() {
    console.log('2')
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
          </View>
        </View>




        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white"/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.eighttall}>
          <View style={[styles.row, styles.f1]}>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.powderblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.skyblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.steelblue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="white" />
              </View>
            </View>
            <View style={[styles.eigthwide]}>
              <View style={[styles.blue, styles.f1, styles.jcsa]}>
                <Button onPress={this.bingo} title="X" color="steelblue"/>
              </View>
            </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
  quartertall: {
    height: "25%"
  },
  eighttall: {
    height: "12.5%"
  },

  halfwide: {
    width: "50%"
  },
  quarterwide: {
    width: "25%"
  },
  eigthwide: {
    width: "12.5%"
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

  f1: { flex: '1' },
  f2: { flex: '2' },
  f3: { flex: '3' },
  f4: { flex: '4' },
  f5: { flex: '5' },

  df: { display: 'flex' },

  row: {
    flexDirection: 'row'
  },
  col: {
    flexDirection: 'column'
  },

  jcsa: {
    justifyContent: 'space-around'
  },
  col: {
    flexDirection: 'column'
  },

  fiddyfiddy: {
    width: 50, height: 50
  },
  skyblue: { backgroundColor: 'skyblue' },
  steelblue: { backgroundColor: 'steelblue' },
  powderblue: { backgroundColor: 'powderblue' },
  blue: { backgroundColor: 'blue' },
  red: { backgroundColor: 'red' },

  //
  // back: {
  //   backgroundColor: 'powderblue'
  // }
  dingo: {
    backgroundColor: 'red !important'
  },
  btn: {
    backgroundColor: 'red !important',
    color: 'red !important'
  },
  whitetext: { color: 'white'}
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
