import React, { Component } from "react";
import { View, Text, StyleSheet,    Alert, Button } from "react-native";
import { Icon } from 'native-base'

class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                        <Text style={styles.content}>SearchTab</Text>
                    </View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                        <Text style={styles.content}>SearchTab</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                        <Text style={styles.content}>SearchTab</Text>
                    </View>
                </View>
                <Button
                  onPress={() => {
                    Alert.alert('You tapped the button!');
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
    }
});
