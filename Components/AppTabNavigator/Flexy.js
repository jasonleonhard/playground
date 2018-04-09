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
      <View style={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

        <View style={{width: "100%", height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: "100%", height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: "100%", height: 50, backgroundColor: 'steelblue'}} />

        {/* <View style={styles.container2}> */}
          <View style={{width: "33%", height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: "33%", height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: "33%", height: 50, backgroundColor: 'steelblue'}} />
        {/* </View> */}

        {/* // Try setting `flexDirection` to `column`. */}
         {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
         <View style={{flexDirection: 'row'}}>
           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
         </View>

         <View style={{flexDirection: 'row'}}>
           <View style={{width: "33.33%", height: 50, backgroundColor: 'powderblue'}} />
           <View style={{width: "33.33%", height: 50, backgroundColor: 'skyblue'}} />
           <View style={{width: "33.33%", height: 50, backgroundColor: 'steelblue'}} />
         </View>

         {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
         <View style={{flexDirection: 'row'}}>
           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
         </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
