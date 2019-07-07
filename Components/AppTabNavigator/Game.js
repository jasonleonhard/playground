import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Files from './Files';
// import Expo from 'expo';
import * as Expo from "expo"
import { Group, Node, Sprite, SpriteView } from './GameKit';
import { THREE } from 'expo-three' // 2.1.1
import "expo-asset-utils"; // 0.0.0
import "three"; // Supported builtin module
import "react-native-console-time-polyfill"; // 0.0.6
import "text-encoding"; // 0.6.4
import "xmldom-qsa"; // 1.0.3
/* @(Evan Bacon)
  These are some global settings for the game
*/
const SPEED = 1.6;
const GRAVITY = 1100;
const FLAP = 320;
const SPAWN_RATE = 2600;
const OPENING = 120;
const GROUND_HEIGHT = 64;

export default class Game extends React.Component {
  scale = 1;
  pipes = new Group();
  deadPipeTops = [];
  deadPipeBottoms = [];

  gameStarted = false;
  gameOver = false;
  velocity = 0;

  state = {
    score: 0,
  };

  componentWillMount() {
    THREE.suppressExpoWarnings(true);
    /// Audio is currently broken in snack :/
    // this.setupAudio();
  }

  setupAudio = async () => {
    /* @(Evan Bacon)
      Here we define how audio should work in our app.
    */
    Expo.Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    /* @(Evan Bacon)
      Now we parse the preloaded audio assets and create a helper object for playing sounds.
    */
    this.audio = {};
    Object.keys(Files.audio).map(async key => {
      const res = Files.audio[key];
      const { sound } = await Expo.Audio.Sound.create(res);
      await sound.setStatusAsync({
        volume: 1,
      });
      this.audio[key] = async () => {
        try {
          await sound.setPositionAsync(0);
          await sound.playAsync();
        } catch (error) {
          console.warn('sound error', { error });
          // An error occurred!
        }
      };
    });
  };

  /// Sprites
  setupPlayer = async () => {
    const size = {
      width: 36 * this.scale,
      height: 26 * this.scale,
    };

    /* @(Evan Bacon)
      This is where we define the properties of our sprite sheet.
      We have an image that is 108x26, and this image has 3 birds on it.
      We divide the width by the number of sprites and in our case this gives us 36x26.
      Notice that we also define how many sprites there are vertically, horizontally, and in total.
      Finally we define the duration of each sprite frame.
    */
    const sprite = new Sprite();
    await sprite.setup({
      image: Files.sprites.bird,
      tilesHoriz: 3,
      tilesVert: 1,
      numTiles: 3,
      tileDispDuration: 75,
      size,
    });

    this.player = new Node({
      sprite,
    });
    this.scene.add(this.player);
  };

  setupGround = async () => {
    const { scene } = this;
    const size = {
      width: scene.size.width,
      height: scene.size.width * 0.333333333,
    };
    this.groundNode = new Group();

    /* @(Evan Bacon)
      Notice that we build two copies of the ground.
      This is because texture wrapping isn't supported yet (Canvas is required)
      Once one floor goes off screen we place it to the back and that creates our floor loop!
    */
    const node = await this.setupStaticNode({
      image: Files.sprites.ground,
      size,
      name: 'ground',
    });

    const nodeB = await this.setupStaticNode({
      image: Files.sprites.ground,
      size,
      name: 'ground',
    });
    nodeB.x = size.width;

    this.groundNode.add(node);
    this.groundNode.add(nodeB);

    this.groundNode.position.y =
      (scene.size.height + (size.height - GROUND_HEIGHT)) * -0.5;

    this.groundNode.top = this.groundNode.position.y + size.height / 2;

    this.groundNode.position.z = 0.01;
    scene.add(this.groundNode);
  };

  setupBackground = async () => {
    const { scene } = this;
    const { size } = scene;
    const bg = await this.setupStaticNode({
      image: Files.sprites.bg,
      size,
      name: 'bg',
    });

    scene.add(bg);
  };

  setupPipe = async ({ key, y }) => {
    const size = { width: 52, height: 320 };

    const tbs = {
      top: Files.sprites.pipe_top,
      bottom: Files.sprites.pipe_bottom,
    };
    const pipe = await this.setupStaticNode({
      image: tbs[key],
      size,
      name: key,
    });
    pipe.y = y;

    return pipe;
  };

  setupStaticNode = async ({ image, size, name, scale }) => {
    scale = scale || this.scale;
    // @(Evan Bacon): Initialize empty sprite element
    const sprite = new Sprite();

    // @(Evan Bacon): Setup static sprite
    await sprite.setup({
      image,
      size: {
        width: size.width * scale,
        height: size.height * scale,
      },
    });

    // @(Evan Bacon): Build node with sprite
    const node = new Node({
      sprite,
    });
    node.name = name;
    return node;
  };

  spawnPipe = async (openPos, flipped) => {
    let pipeY;
    if (flipped) {
      pipeY = Math.floor(openPos - OPENING / 2 - 320);
    } else {
      pipeY = Math.floor(openPos + OPENING / 2);
    }
    let pipeKey = flipped ? 'bottom' : 'top';
    let pipe;

    const end = this.scene.bounds.right + 26;
    if (this.deadPipeTops.length > 0 && pipeKey === 'top') {
      pipe = this.deadPipeTops.pop().revive();
      pipe.reset(end, pipeY);
    } else if (this.deadPipeBottoms.length > 0 && pipeKey === 'bottom') {
      pipe = this.deadPipeBottoms.pop().revive();
      pipe.reset(end, pipeY);
    } else {
      pipe = await this.setupPipe({
        scene: this.scene,
        y: pipeY,
        key: pipeKey,
      });
      pipe.x = end;

      this.pipes.add(pipe);
    }
    pipe.velocity = -SPEED;
    return pipe;
  };

  spawnPipes = () => {
    this.pipes.forEachAlive(pipe => {
      //@(Evan Bacon) If any pipes are off screen then we want to flag them as "dead" so we can recycle them!
      if (pipe.size && pipe.x + pipe.size.width < this.scene.bounds.left) {
        if (pipe.name === 'top') {
          this.deadPipeTops.push(pipe.kill());
        }
        if (pipe.name === 'bottom') {
          this.deadPipeBottoms.push(pipe.kill());
        }
      }
    });

    //@(Evan Bacon) Get a random spot for the center of the two pipes.
    const pipeY =
      this.scene.size.height / 2 +
      (Math.random() - 0.5) * this.scene.size.height * 0.2;
    //@(Evan Bacon) Spawn both pipes around this point.
    this.spawnPipe(pipeY);
    this.spawnPipe(pipeY, true);
  };

  tap = () => {
    // @(Evan Bacon) on the first tap we start the game
    if (!this.gameStarted) {
      this.gameStarted = true;
      // @(Evan Bacon) here we build a timer to spawn pipes
      this.pillarInterval = setInterval(this.spawnPipes, SPAWN_RATE);
    }

    if (!this.gameOver) {
      // @(Evan Bacon) These are in-game taps for making the bird flap
      this.velocity = FLAP;
      // this.audio.wing();
    } else {
      // @(Evan Bacon) This is an end-game tap to reset the game
      this.reset();
    }
  };

  //@(Evan Bacon) Update the state with the new score so our React component knows to update... Then play cool noise!
  addScore = () => {
    this.setState({ score: this.state.score + 1 });
    // this.audio.point();
  };

  //@(Evan Bacon) stop the pipe spawning and play that fresh slapping sound.
  setGameOver = () => {
    this.gameOver = true;

    clearInterval(this.pillarInterval);

    // this.audio.hit();
  };

  //@(Evan Bacon) This is the clean state before each game.
  reset = () => {
    this.gameStarted = false;
    this.gameOver = false;
    this.setState({ score: 0 });

    this.player.reset(this.scene.size.width * -0.3, 0);
    this.player.angle = 0;
    this.pipes.removeAll();
  };

  onSetup = async ({ scene }) => {
    this.scene = scene;
    this.scene.add(this.pipes);
    await this.setupBackground();
    await this.setupGround();
    await this.setupPlayer();

    this.reset();
  };

  updateGame = delta => {
    if (this.gameStarted) {
      this.velocity -= GRAVITY * delta;
      const target = this.groundNode.top;

      if (!this.gameOver) {
        const playerBox = new THREE.Box3().setFromObject(this.player);

        //@(Evan Bacon) Here we iterate over all of the active pipes and move them to the left.
        this.pipes.forEachAlive(pipe => {
          pipe.x += pipe.velocity;
          const pipeBox = new THREE.Box3().setFromObject(pipe);

          //@(Evan Bacon) We check if the user collided with any of the pipes.
          if (pipeBox.intersectsBox(playerBox)) {
            this.setGameOver();
          }

          //@(Evan Bacon) We check to see if a user has passed a pipe, if so then we update the score!
          if (
            pipe.name === 'bottom' &&
            !pipe.passed &&
            pipe.x < this.player.x
          ) {
            pipe.passed = true;
            this.addScore();
          }
        });

        //@(Evan Bacon) Here we set the player rotation (in radians). Notice how we clamp it with min/max.
        this.player.angle = Math.min(
          Math.PI / 4,
          Math.max(-Math.PI / 2, (FLAP + this.velocity) / FLAP)
        );

        //@(Evan Bacon) Check to see if the user's y position is lower than the floor, if so then we end the game.
        if (this.player.y <= target) {
          this.setGameOver();
        }
        //@(Evan Bacon) Update the player sprite animation.
        this.player.update(delta);
      }

      //@(Evan Bacon) If the game is over than let the player continue to fall until they hit the floor.
      if (this.player.y <= target) {
        this.player.angle = -Math.PI / 2;
        this.player.y = target;
        this.velocity = 0;
      } else {
        this.player.y += this.velocity * delta;
      }
    } else {
      //@(Evan Bacon) This is the dope bobbing bird animation before we start. Notice the cool use of Math.cos
      this.player.update(delta);
      this.player.y = 8 * Math.cos(Date.now() / 200);
      this.player.angle = 0;
    }

    if (!this.gameOver) {
      //@(Evan Bacon) This is where we do the floor looping animation
      this.groundNode.children.map((node, index) => {
        node.x -= SPEED;
        //@(Evan Bacon) If the floor component is off screen then get the next item and move it behind that.
        if (node.x < this.scene.size.width * -1) {
          let nextIndex = index + 1;
          if (nextIndex === this.groundNode.children.length) {
            nextIndex = 0;
          }
          const nextNode = this.groundNode.children[nextIndex];
          node.x = nextNode.x + this.scene.size.width - 1.55;
        }
      });
    }
  };

  renderScore = () => (
    <Text
      style={{
        textAlign: 'center',
        fontSize: 64,
        position: 'absolute',
        left: 0,
        right: 0,
        color: 'white',
        top: 64,
        backgroundColor: 'transparent',
      }}>
      {this.state.score}
    </Text>
  );

  render() {
    //@(Evan Bacon) This is a dope SpriteView based on SpriteKit that surfaces touches, render, and setup!
    return (
      <View style={StyleSheet.absoluteFill}>
        <SpriteView
          touchDown={() => this.tap()}
          touchMoved={() => {}}
          touchUp={() => {}}
          update={this.updateGame}
          onSetup={this.onSetup}
        />
        {this.renderScore()}
      </View>
    );
  }
}
