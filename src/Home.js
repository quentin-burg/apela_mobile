import { createStackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import ArticlesList from 'ArticlesList';
import CallApela from 'CallApela';
import CartList from 'CartList';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomTab from 'BottomTab';
import ThankYou from 'ThankYou';

const Routes = createStackNavigator(
  {
    Root: BottomTab,
    ThankYou: ThankYou,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ThankYou',
    cardStyle: {
      backgroundColor: '#FFFFFF',
    },
  }
);
export default Routes;
