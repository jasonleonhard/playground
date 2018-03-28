// after
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base'
import Trois from '../Trois'

import Expo from 'expo';
// import React from 'react';
import * as THREE from 'three';
import ExpoTHREE from 'expo-three'; // 2.2.2-alpha.1

class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    }

  render() {
      // Create an `Expo.GLView` covering the whole screen, tell it to call our
      // `_onGLContextCreate` function once it's initialized.
      return (
        <Expo.GLView
          style={{ flex: 1 }}
          onContextCreate={this._onGLContextCreate}
        />
      );
    }

  // This is called by the `Expo.GLView` once it's initialized
  _onGLContextCreate = async gl => {
    // Based on https://threejs.org/docs/#manual/introduction/Creating-a-scene
    // In this case we instead use a texture for the material (because textures
    // are cool!). All differences from the normal THREE.js example are
    // indicated with a `NOTE:` comment.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );

    // NOTE: How to create an `Expo.GLView`-compatible THREE renderer
    const renderer = ExpoTHREE.createRenderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //  NOTE: How to create an Expo-compatible THREE texture
    const texture = await ExpoTHREE.loadAsync(
      // require('./assets/icons/app-icon.png')
      require('../../assets/me.png')
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const render = () => {
      requestAnimationFrame(render);

      cube.rotation.x += 0.07;
      cube.rotation.y += 0.04;

      renderer.render(scene, camera);

      // NOTE: At the end of each frame, notify `Expo.GLView` with the below
      gl.endFrameEXP();
    };
    render();
  };
}

export default LikesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

////////////////////////////////////////////////////////////////////////////////
//// before
// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { Icon } from 'native-base'
// import Trois from '../Trois'
//
// class LikesTab extends Component {
//     static navigationOptions = {
//         tabBarIcon: ({ tintColor }) => (
//             <Icon name="ios-heart" style={{ color: tintColor }} />
//         )
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>LikesTab</Text>
//                 <Trois/>
//             </View>
//         );
//     }
// }
// export default LikesTab;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
