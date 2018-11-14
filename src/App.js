import { createBottomTabNavigator } from 'react-navigation';
import Home from 'Home';
import CallApela from 'CallApela';

export default createBottomTabNavigator({
  Home,
  Call: CallApela,
});
