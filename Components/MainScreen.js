import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import SearchTab2 from './AppTabNavigator/SearchTab2'
import FetchMovieData from './AppTabNavigator/FetchMovieData'
import FetchMovieData2 from './AppTabNavigator/FetchMovieData2'
import DatePick from './AppTabNavigator/DatePick'
import ModalExample from './AppTabNavigator/ModalExample'
import FlexTab from './AppTabNavigator/FlexTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import ExperimentTab from './AppTabNavigator/ExperimentTab'
import TextInputExample from './AppTabNavigator/TextInputExample'
import PropPic from './AppTabNavigator/PropPic'
import AnimateApi from './AppTabNavigator/AnimateApi'
import Accel from './AppTabNavigator/Accel'
import Accel2 from './AppTabNavigator/Accel2'
import Accel3 from './AppTabNavigator/Accel3'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
        title: "Instagram",
        headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({
    Accel3: {
        screen: Accel3
    },
    Accel2: {
        screen: Accel2
    },
    Accel: {
        screen: Accel
    },
    AnimateApi: {
        screen: AnimateApi
    },
    PropPic: {
        screen: PropPic
    },
    ModalExample: {
        screen: ModalExample
    },
    DatePick: {
        screen: DatePick
    },
    FetchMovieData: {
        screen: FetchMovieData
    },
    FetchMovieData2: {
        screen: FetchMovieData2
    },
    SearchTab2: {
        screen: SearchTab2
    },
    SearchTab: {
        screen: SearchTab
    },
    FlexTab: {
        screen: FlexTab
    },
    TextInputExample: {
        screen: TextInputExample
    },
    HomeTab: { // ideally first but for dev not..
        screen: HomeTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    },
    ExperimentTab: {
        screen: ExperimentTab
    }
    }, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
