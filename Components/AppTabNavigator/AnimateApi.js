import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base'

class FadeInView extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" style={{ color: tintColor }} />
      )
  }

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <FadeInView style={styles.fadeInView}> */}
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={styles.text}>Fading in</Text>
        </FadeInView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

    // flex: 1,
    // display: 'flex',
    // justifyContent: 'center'
  },
  // // did not work
  // fadeInView: {
  //   width: 250,
  //   height: 50,
  //   backgroundColor: 'blue',
  // },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  }

})
