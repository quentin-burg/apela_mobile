import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import ArticlesList from 'ArticlesList';
import CallApela from 'CallApela';
import CartList from 'CartList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalProvider } from 'store/GlobalProvider';

export default createBottomTabNavigator(
  {
    Catalogue: {
      screen: ArticlesList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" type="font-awesome" size={20} color={tintColor} />
        ),
      },
    },
    Panier: {
      screen: CartList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="cart-plus"
            type="font-awesome"
            size={20}
            color={tintColor}
          />
        ),
      },
    },
    Appeler: {
      screen: CallApela,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="phone" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: { fontSize: 13, color: '#fafafa', fontWeight: 'bold' },
      style: { backgroundColor: '#212121' },
      activeTintColor: '#ffee58',
      // activeBackgroundColor: '#e91e63',
    },
  }
);
