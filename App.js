import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// screens

import Calls from './src/Screens/Calls';
import Chats from './src/Screens/Chats';
import Contacts from './src/Screens/Contacts';
import { styles } from './src/Config/styles';

const Tabs = createAppContainer(createMaterialTopTabNavigator({
  Calls,
  Chats,
  Contacts
}, {
  initialRouteName: 'Chats',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#6a9a94',
    style: {
      backgroundColor: '#075E54',
    },
    indicatorStyle: {
      backgroundColor: '#fff',
      elevation: 2,
      height: 3,
    },
    labelStyle: {
      fontWeight: 'bold'
    }
  },
}))

export default function App() {
    return (
        <View style={styles.container}>

          <View style={styles.header}>
              <Text style={styles.headerTitle}>WhatsDev</Text>
          </View>

          <Tabs />
        </View> 
    )
}