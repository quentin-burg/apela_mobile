// Contexte global de l'application
// Permet d'avoir accès aux données par tous les composants

import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext({
  articles: [],
});

class GlobalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.object,
};

export default GlobalProvider;
