# project starts with unsure programmer layout ideas YT

MainScreen /AppTabNavigator
    HomeTab # pass in likes
        CardComponent * ? # awesomesauce


TODO
    SearchTab
    AddMediaTab
    LikesTab
    ProfileTab




TouchableOpacity

http://snack.expo.io/

###############################
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



# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
# https://facebook.github.io/react-native/docs/tutorial.html

# View - https://facebook.github.io/react-native/releases/0.23/docs/view.html
# Text - https://facebook.github.io/react-native/releases/0.23/docs/text.html
# TextInput - https://facebook.github.io/react-native/releases/0.23/docs/textinput.html
# Image - https://facebook.github.io/react-native/releases/0.23/docs/image.html
# ScrollView - https://facebook.github.io/react-native/releases/0.23/docs/scrollview.html
#
#
#
