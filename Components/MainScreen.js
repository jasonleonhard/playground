import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
// import HomeTab from './AppTabNavigator/HomeTab'
// import SearchTab from './AppTabNavigator/SearchTab'
// import SearchTab2 from './AppTabNavigator/SearchTab2'
// import FetchMovieData from './AppTabNavigator/FetchMovieData'
// import FetchMovieData2 from './AppTabNavigator/FetchMovieData2'
// import DatePick from './AppTabNavigator/DatePick'
// import ModalExample from './AppTabNavigator/ModalExample'
// import FlexTab from './AppTabNavigator/FlexTab'
// import AddMediaTab from './AppTabNavigator/AddMediaTab'
// import LikesTab from './AppTabNavigator/LikesTab'
// import ProfileTab from './AppTabNavigator/ProfileTab'
// import ExperimentTab from './AppTabNavigator/ExperimentTab'
// import TextInputExample from './AppTabNavigator/TextInputExample'
// import PropPic from './AppTabNavigator/PropPic'
// import AnimateApi from './AppTabNavigator/AnimateApi'
// import Accel from './AppTabNavigator/Accel'
// import Accel2 from './AppTabNavigator/Accel2'
// import Accel3 from './AppTabNavigator/Accel3'
// import Accel4 from './AppTabNavigator/Accel4'
// import Accel5 from './AppTabNavigator/Accel5'
// import RandData from './AppTabNavigator/RandData'
// import RandDataC3 from './AppTabNavigator/RandDataC3'
import DragMe from './AppTabNavigator/DragMe'
import Pedometer from './AppTabNavigator/Pedometer'
import MultiCounter from './AppTabNavigator/MultiCounter'
import SqliteExample from './AppTabNavigator/SqliteExample'
import MapViewExample from './AppTabNavigator/MapViewExample'
import Lottie from './AppTabNavigator/Lottie'
import Lottie2 from './AppTabNavigator/Lottie2'

import Blank from './AppTabNavigator/Blank'
import Flexy from './AppTabNavigator/Flexy'
import Flexy2 from './AppTabNavigator/Flexy2'
import Flexy3 from './AppTabNavigator/Flexy3'
import Flexy4 from './AppTabNavigator/Flexy4'
import Flexy5 from './AppTabNavigator/Flexy5'
import Flexy6 from './AppTabNavigator/Flexy6'
import Flexy7 from './AppTabNavigator/Flexy7'
import Flexy8 from './AppTabNavigator/Flexy8'

import ListThumbnailNativeBase from './AppTabNavigator/ListThumbnailNativeBase'
// import ListThumbnailNativeBase2 from './AppTabNavigator/ListThumbnailNativeBase2'

// import ChartSvg from './AppTabNavigator/ChartSvg'
// import Chat from './AppTabNavigator/Chat'
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
  Flexy8: {
      screen: Flexy8
  },
  Flexy7: {
      screen: Flexy7
  },
  Flexy6: {
      screen: Flexy6
  },
  Flexy5: {
      screen: Flexy5
  },
  Flexy4: {
      screen: Flexy4
  },
  Flexy3: {
      screen: Flexy3
  },
  Flexy2: {
      screen: Flexy2
  },
  Flexy: {
      screen: Flexy
  },
  Blank: {
      screen: Blank
  },
  Pedometer: {
      screen: Pedometer
  },
  DragMe: {
      screen: DragMe
  },
  MultiCounter: {
      screen: MultiCounter
  },
  SqliteExample: {
      screen: SqliteExample
  },
  ListThumbnailNativeBase: {
      screen: ListThumbnailNativeBase
  },
  // ListThumbnailNativeBase2: {
  //     screen: ListThumbnailNativeBase2
  // },
  // MapViewExample: {
  //     screen: MapViewExample
  // },
  // Lottie2: {
  //     screen: Lottie2
  // },
  // Lottie: {
  //     screen: Lottie
  // },


    // RandDataC3: {
    //     screen: RandDataC3
    // },
    //

    // Accel5: {
    //     screen: Accel5
    // },
    // RandData: {
    //     screen: RandData
    // },
    // Accel4: {
    //     screen: Accel4
    // },
    // ChartSvg: {
    //     screen: ChartSvg
    // },
    // Accel3: {
    //     screen: Accel3
    // },
    // Accel2: {
    //     screen: Accel2
    // },
    // Accel: {
    //     screen: Accel
    // },
    // Chat: {
    //     screen: Chat
    // },
    // AnimateApi: {
    //     screen: AnimateApi
    // },
    // PropPic: {
    //     screen: PropPic
    // },
    // ModalExample: {
    //     screen: ModalExample
    // },
    // DatePick: {
    //     screen: DatePick
    // },
    // FetchMovieData: {
    //     screen: FetchMovieData
    // },
    // FetchMovieData2: {
    //     screen: FetchMovieData2
    // },
    // SearchTab2: {
    //     screen: SearchTab2
    // },
    // SearchTab: {
    //     screen: SearchTab
    // },
    // FlexTab: {
    //     screen: FlexTab
    // },
    // TextInputExample: {
    //     screen: TextInputExample
    // },
    // HomeTab: { // ideally first but for dev not..
    //     screen: HomeTab
    // },
    // AddMediaTab: {
    //     screen: AddMediaTab
    // },
    // LikesTab: {
    //     screen: LikesTab
    // },
    // ProfileTab: {
    //     screen: ProfileTab
    // },
    // ExperimentTab: {
    //     screen: ExperimentTab
    // }
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
