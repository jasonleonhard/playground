import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base'
// import Expo from 'expo';
import * as Expo from "expo"
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';

class ExperimentTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    }

    render() {
      return (
        <Expo.GLView
          style={{ flex: 1 }}
          onContextCreate={this._onGLContextCreate}
        />
      );
    }

    _onGLContextCreate = async (gl) => {
      // Do graphics stuff here!
    }

  // old /////////////////////////////////////////////////////////////
  // render() {
  //     return (
  //       <Expo.GLView
  //         style={{ flex: 1 }}
  //         onContextCreate={this._onGLContextCreate}
  //       />
  //     );
  //   }

  // _onGLContextCreate = async gl => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     gl.drawingBufferWidth / gl.drawingBufferHeight,
  //     0.1,
  //     1000
  //   );
  //
  //   const renderer = ExpoTHREE.createRenderer({ gl });
  //   renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
  //   const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   const texture = await ExpoTHREE.loadAsync(
  //     require('../../assets/me.png')
  //   );
  //   const material = new THREE.MeshBasicMaterial({ map: texture });
  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);
  //   camera.position.z = 5;
  //
  //   const render = () => {
  //     requestAnimationFrame(render);
  //     cube.rotation.x += 0.07;
  //     cube.rotation.y += 0.04;
  //     renderer.render(scene, camera);
  //     gl.endFrameEXP();
  //   };
  //   render();
  // };
}

export default ExperimentTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
