import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat';

export default class Example extends React.Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="person" style={{ color: tintColor }} />
      )
  }

  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Greetings!',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'Jason Leonhard',
            avatar: 'https://avatars0.githubusercontent.com/u/2337379?s=460&v=4',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        // user={{
        //   _id: 1,
        // }}
      />
    );
  }
}
