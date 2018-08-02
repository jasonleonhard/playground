import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base'
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class App extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-apple" style={{ color: tintColor }} />
      )
  }

  state = {
    animation: null,
  };

    componentWillMount() {
      this._playAnimation();
    }

    render() {
      return (
        <View style={styles.animationContainer}>
          {this.state.animation &&
            <Lottie
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                width: 400,
                height: 400,
                backgroundColor: '#eee',
              }}
              source={this.state.animation}
            />}
          <View style={styles.buttonContainer}>
          <Button
            title="Restart Animation"
            onPress={this._playAnimation}
          />
          </View>
        </View>
      );
    }

    _playAnimation = () => {
      if (!this.state.animation) {
        this._loadAnimationAsync();
      } else {
        this.animation.reset();
        this.animation.play();
      }
    };

    _loadAnimationAsync = async () => {
      let result = await fetch(
        'https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json'
      );

      this.setState(
        { animation: JSON.parse(result._bodyText) },
        this._playAnimation
      );
    };
  }

  const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });
