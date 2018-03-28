import React, { Component } from "react";
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Alert, Button } from "react-native";
import { Icon } from 'native-base'

export default class FetchMovieData extends Component {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-film" style={{ color: tintColor }} />
      )
  }
    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }

    componentDidMount(){
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){

          });
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    render(){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
}
