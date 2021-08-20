import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from './BookDonateScreen';
import BookRequestScreen from './BookRequestScreen';



export const BottomTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("./request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
