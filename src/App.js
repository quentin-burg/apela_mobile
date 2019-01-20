import React from 'react';
import Home from 'Home';
import BottomTab from 'BottomTab';
import { GlobalProvider } from 'store/GlobalProvider';
import ApelaModule from 'modules/ApelaModule';
import { Platform } from 'react-native';

console.disableYellowBox = true;

const isAndroid = Platform.OS === 'android';

class App extends React.Component {
  componentDidMount() {
    isAndroid && ApelaModule.unsetWindowBackground();
  }
  componentWillUnmount() {
    isAndroid && ApelaModule.setWindowBackground();
  }
  render() {
    return (
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    );
  }
}

export default App;
