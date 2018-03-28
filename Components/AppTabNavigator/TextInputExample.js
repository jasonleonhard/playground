import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// why does this break?
// import { Icon } from 'native-base'​;

class UselessTextInput extends Component {
  // why does this break?
  // static navigationOptions = {
  //     tabBarIcon: ({ tintColor }) => (
  //         <Icon name="ios-search" style={{ color: tintColor }} />
  //     )
  // }

  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

// export default class UselessTextInputMultiline extends Component {
export default class TextInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Multiline Placeholder.......................................................................................................................................................................',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}
