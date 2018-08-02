import { AppLoading } from 'expo';
import React from 'react';
import arrayFromObject from './utils/arrayFromObject';
import cacheAssetsAsync from './utils/cacheAssetsAsync';
import Files from './Files';
import Game from './Game';

import { Icon } from 'native-base'
/* @(Evan Bacon)
  This is the base class.
  Here we preload the assets and present the Game.
*/
export default class DragMe extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="logo-apple" style={{ color: tintColor }} />
      )
  }

  state = { assetsLoaded: false };

  componentWillMount() {
    this.loadAssetsAsync();
  }

  loadAssetsAsync = async () => {
    try {
      await cacheAssetsAsync({
        files: arrayFromObject(Files),
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: app.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ assetsLoaded: true });
    }
  };

  render() {
    return this.state.assetsLoaded ? <Game /> : <AppLoading />;
  }
}
