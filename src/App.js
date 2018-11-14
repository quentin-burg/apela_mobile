import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import Home from 'Home';
import CallApela from 'CallApela';
import Icon from 'react-native-vector-icons/FontAwesome';

export default createBottomTabNavigator(
  {
    Catalogue: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={28} color={tintColor} />
        ),
      },
    },
    Appeler: {
      screen: CallApela,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="phone" size={28} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: { fontSize: 15, color: '#d1603d', fontWeight: 'bold' },
      style: { backgroundColor: '#f6f5ae' },
      activeTintColor: '#e91e63',
      // activeBackgroundColor: '#e91e63',
    },
  }
);
