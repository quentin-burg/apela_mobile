import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import Home from 'Home';
import CallApela from 'CallApela';
import CartList from 'CartList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalProvider } from 'store/GlobalProvider';

console.disableYellowBox = true;


// To access to the store (improve that)
const CartListProvider = () => (
  <GlobalProvider>
    <CartList />
  </GlobalProvider>
);

const HomeProvider = () => (
  <GlobalProvider>
    <Home />
  </GlobalProvider>
);

// TODO : add here GlobalProvider if we want to access to store in all tabs
export default createBottomTabNavigator(
  {
    Catalogue: {
      screen: HomeProvider,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="th-large" size={28} color={tintColor} />
        ),
      },
    },
    Panier: {
      screen: CartListProvider,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cart-plus" type="font-awesome" size={28} color={tintColor} />
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
