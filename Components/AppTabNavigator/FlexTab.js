import React, { Component } from "react";
import { View, Text, StyleSheet,    Alert, Button } from "react-native";
import { Icon } from 'native-base'

class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-pulse" style={{ color: tintColor }} />
        )
    }

    constructor(props) {
      super(props);
      this.state = {
        flex1: 'This state can change!',
        flex2: 'Text data is malable!',
        flex3: 'When do you think this was written?',
        alert: 'You tapped the button!',
      };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                        <Text style={styles.content}>{this.state.flex1}</Text>
                    </View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                        <Text style={styles.content}>{this.state.flex2}</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                        <Text style={styles.content}>{this.state.flex3}</Text>
                    </View>
                </View>
                <Button
                  onPress={() => {
                    Alert.alert(this.state.alert);
                  }}
                  title="Press Me"
                />
            </View>
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
    }
});
