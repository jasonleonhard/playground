// fails
// import React, { Component } from "react";
// import { StyleSheet, Text, View} from "react-native";
// import { Button, Icon } from 'native-base';
//
// // import { three } from 'three'; // nope
// // import ExpoTHREE, { THREE } from 'expo-three';
// // import Expo, { createTHREEViewClass } from 'expo';
// // const THREE = require('three');
// // const THREEView = createTHREEViewClass(THREE);
//
// // const renderer = ExpoTHREE.renderer({
// //   gl,
// // });
//
// class Trois extends Component {
//     componentDidMount() {
//       // this.scene = new THREE.Scene();
//       // this.camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
//       // this.geometry = new THREE.BoxGeometry(1, 1, 1);
//       // this.material = new THREE.MeshBasicMaterial({ color: 'purple' });
//       // this.cube = new THREE.Mesh(this.geometry, this.material);
//       // this.scene.add(this.cube);
//     }
//
//     render() {
//         return (
//           <View></View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white'
//     }
// });
//
// export default Trois;

////////////////////////////////////////////////////////
// fails
import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import { Button, Icon } from 'native-base';

import { three } from 'three'; // nope
import ExpoTHREE, { THREE } from 'expo-three';
import Expo, { createTHREEViewClass } from 'expo';
// const THREE = require('three');
// const THREEView = createTHREEViewClass(THREE);

// const renderer = ExpoTHREE.renderer({
  // gl,
  // <ThreeView></ThreeView>
// });

class Trois extends Component {
    componentDidMount() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
      this.geometry = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshBasicMaterial({ color: 'purple' });
      this.cube = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.cube);
    }

    render() {
        return (
          <View></View>
          // <ThreeView></ThreeView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Trois;
