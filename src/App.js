import React from 'react';
import Home from 'Home';
import { GlobalProvider } from 'store/GlobalProvider';

import { fetchProducts } from 'api';

console.disableYellowBox = true;

const App = () => {
  console.log(fetchProducts());
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
};

export default App;
