import { createBottomTabNavigator } from 'react-navigation';
import Home from 'Home';
import CallApela from 'CallApela';
// import {Icnon}

export default createBottomTabNavigator({
  Catalogue: Home,
  Commander: CallApela,
});