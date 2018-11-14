import { createBottomTabNavigator } from 'react-navigation';
import Home from 'Home';
import CallApela from 'CallApela';

export default createBottomTabNavigator({
  Catalogue: Home,
  Appeler: CallApela,
});
