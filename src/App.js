import React from 'react';
import Home from 'Home';
import { GlobalProvider } from 'store/GlobalProvider';

console.disableYellowBox = true;

const App = () => (
  <GlobalProvider>
    <Home />
  </GlobalProvider>
);

export default App;
