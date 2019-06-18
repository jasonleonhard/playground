# FAILS: This expo project used to work
  # TODO: upgrade expo cli
    # https://blog.expo.io/expo-sdk-v32-0-0-is-now-available-6b78f92a6c52
      # and
    # https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough/

  # have not been able to fix, had lots of cool examples
  # looks like this project used the old version of expo
  # called
    # exp
  # not
    # exp-cli
  # trying
    # npm i -g exp
    # exp --version # needs to be at least v26.0.0
    # npm i
    # exp start -c
    # npm install -g expo-cli
    # expo start
  # nothing is working even
    # expo build

# react-native-scripts: command not found
  # rm -rf node_modules
  # npm install -g create-react-app
  # npm i
  # yarn add react-native-scripts
  # yarn
  # yarn start
  # expo start
  # expo-cli start

  # after installing react-native-scripts I got the message how to upgrade finally!
            # Upgrading your project to use Expo CLI:

            # Make these changes to package.json:
            # 1) Replace 'react-native-scripts' with 'expo' in the 'scripts' config.
            #   Example:
            #     "scripts": {
            #       "start": "expo start",
            #       "eject": "expo eject",
            #       "android": "expo start --android",
            #       "ios": "expo start --ios",
            #       "test": "jest"
            #     }
            # 2) Remove react-native-scripts from devDependencies.

            # That's all! Expo CLI will install automatically when you run `npm start`.

            # Starting project at /Users/Agency/code/JS/react-native/playground
            # Expo DevTools is running at http://localhost:19002
            # Opening DevTools in the browser... (press shift-d to disable)
            # Starting Metro Bundler on port 19001.
            # Metro Bundler ready.
  # npm i
  # npm audit fix
  # expo start
  # expo-cli start
  # npm run ios


# brew update
# brew install watchman



# react-scripts build ??????????????

# //////////////////////////////////////////////////////////////////////////////
# project starts with unsure programmer layout ideas YT
# //////////////////////////////////////////////////////////////////////////////
# MainScreen /AppTabNavigator
#     HomeTab # pass in likes
#         CardComponent * ? # awesomesauce
# //////////////////////////////////////////////////////////////////////////////
# TODO
#     SearchTab
#     AddMediaTab
#     LikesTab
#     ProfileTab
# //////////////////////////////////////////////////////////////////////////////
# TouchableOpacity
# //////////////////////////////////////////////////////////////////////////////
# http://snack.expo.io/
# //////////////////////////////////////////////////////////////////////////////
# webgl three.js rendered in react native by expo in this case LikesTab
# https://github.com/expo/expo-three#example-13
    # maybe
        # https://docs.expo.io/versions/latest/sdk/gl-view.html
        # https://threejs.org/docs/#manual/introduction/Creating-a-scene
        # https://github.com/mrdoob/three.js/
            # og project but web based so must think react native and change code
        # https://blog.expo.io/introducing-expo-ar-mobile-augmented-reality-with-javascript-powered-by-arkit-b0d5a02ff23
            # would be cool to do this if I had a more modern iphone

    # other
        # react native for web!!!
            # https://github.com/necolas/react-native-web
            # https://glitch.com/edit/#!/react-native?path=README.md:1:0
            # https://necolas.github.io/react-native-web/storybook/?selectedKind=Components&selectedStory=ActivityIndicator&full=0&addons=0&stories=1&panelRight=0
        # playlist
            # https://www.youtube.com/watch?v=X52b-8y2Hf4&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR
    # not these
        # https://www.youtube.com/watch?v=uFrAZfPW9JY&t=2117s
three.js
yarn add three expo-three
    "expo-three": "^2.2.2-alpha.1",
    "three": "^0.91.0"
yarn add expo-graphics

// import { three } from 'three'; // nope
import { createTHREEViewClass } from 'expo';
const THREE = require('three');
// const THREEView = createTHREEV iewClass(THREE);



# //////////////////////////////////////////////////////////////////////////////
# // Mounting Lifecycle
constructor(props) {}
# // This is the first method called when a component is instantiated. The first parameter is the initial props that we're provided during instantiation. This is where you typically initialize this.state.

componentWillMount(){}
# // Called directly after the constructor. Nothing has been rendered at this point.

render() {}
# // The only mandatory stage of the lifecycle, this method must return another component

componentDidMount() {}
# // Called after render completes. At this point the content rendered by this component is visible in the view.

# // Updating Lifecycle
componentWillReceiveProps(nextProps) {}
# // The first method called when a component is about to update. You have access to the next props the component will render with. You can also call setState() here, so that the state is reflected in this lifecycle's render.

shouldComponentUpdate(nextProps, nextState) {}
# // Here you can decide to manually disable the rest of the lifecycle from happening by returning false, or true to continue the lifecycle.

componentWillUpdate(nextProps, nextState) {}
# // Called directly before rendering happens again.

render()
# // Re-renders the element returned from this method with the new props and state.

componentDidUpdate() {}
# // The updated UI is now in visible on the phone. This method can be used to do any post-render computation, such as operations on this.refs.
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# simple example Chat component from react-native-gifted-chat
# https://github.com/FaridSafi/react-native-gifted-chat
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# qr reader not visible...
# i am using local lan
"exp start --lan"
# or use iOS camera can capture the QR code too!
# prompt me to open Expo ('exp://192.168.1.120:19000') .....
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# looks like this is web only bc react-DOM was required
# attempting https://github.com/emilmork/react-rt-chart
# so.... another lib
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
npm install react-native-chart-view --save

# had issues at this point... so uninstalled expo and reinstallled
npm install exp --global # just command line....

# app download on this page
https://docs.expo.io/versions/latest/introduction/installation.html

open /Applications/Expo\ XDE.app

# solution? https://github.com/react-community/create-react-native-app/issues/169
# Found that "Command Line Tools" was not selected in the Xcode settings.
# After selecting, it worked for me. Open your
# xcode -> Preferences -> Locations - > Command Line tools
# turned out I needed to install xcode components

# ?
rm -rf  ~/.expo/ios-simulator-app-cache/*
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# charting live random data in RN works great!
# https://github.com/TradingPal/react-native-highcharts
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
lottie airbnb animation
https://docs.expo.io/versions/latest/sdk/lottie.html
# /////////////////////
options
http://docs.nativebase.io/Components.html#inline-label-headref

# /////////////////////
# awesome.... not only sqlite... but also tons of other good expo stuff
# https://docs.expo.io/versions/latest/sdk/sqlite
    # https://github.com/expo/sqlite-example/blob/master/App.js
    # Components/AppTabNavigator/SqliteExample.js mine

# including http://www.reactnativeexpress.com/component_api


# google vision api????
    # https://expo.io/@nikki/google-vision-expo-test
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# https://facebook.github.io/react-native/docs/tutorial.html

# View - https://facebook.github.io/react-native/releases/0.23/docs/view.html
# Text - https://facebook.github.io/react-native/releases/0.23/docs/text.html
# TextInput - https://facebook.github.io/react-native/releases/0.23/docs/textinput.html
# Image - https://facebook.github.io/react-native/releases/0.23/docs/image.html
# ScrollView - https://facebook.github.io/react-native/releases/0.23/docs/scrollview.html
# //////////////////////////////////////////////////////////////////////////////
# doren suggests for images checking out
    # ImageViewer react-native-image-zoom-viewer
# //////////////////////////////////////////////////////////////////////////////
# purpose.py origionally
your going about it wrong
instead
describe it and why we care
tests care
high to low

mobile real time data graphing and computation
  yes
    react native
    graphing|charting
    real time
  possibly
    real time
      websockets
    animation
      webgl
      d3
    state management
      redux
      mobx
    db
      psql
      mongo
      graphql
    chat

deep dive charting
  displays a nice chart
    plot 1 data point
      every second append next data point
      possibly full page refresh if react
    intend to start with time or instance and x
    ending with x,y,z
# //////////////////////////////////////////////////////////////////////////////
