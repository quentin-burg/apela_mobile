// Contexte global de l'application
// Permet d'avoir accès aux données par tous les composants

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import articles from 'fakeData/articles.json';

import { fetchProducts } from 'api';

const GlobalContext = createContext();

export class GlobalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articles,
      // cart = [{articleId : id, quantity: 3}]
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeArt = this.removeArt.bind(this);
  }

  componentDidMount() {
    fetchProducts().then(results => {
      console.log(results);
      this.setState({ articles: results.products });
    });
  }

  // TODO : do function to add, remove, update into the state /!\ immutable function when you update the state
  // Quand on ajoute pour la premiere fois un article il est dans la liste une iteration apres ce qu'il devrait
  addToCart = (article, newQuantity) => {
    let isInCart = false;
    this.state.cart.forEach(a =>
      a.id === article.articleId ? (isInCart = true) : null
    );
    if (isInCart) {
      const cartArticles = this.state.cart;
      cartArticles.map(a =>
        a.id === article.articleId ? (a.quantity = newQuantity) : null
      );
      this.setState({
        cart: cartArticles,
      });
    } else {
      this.setState({
        cart: [...this.state.cart, { ...article, quantity: newQuantity }],
      });
    }
  };

  removeArt(articleId) {
    const temp = this.state.cart.slice(
      this.state.cart.find(a => a.id === articleId)
    );
    this.setState({
      cart: temp,
    });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeArt: this.removeArt,
          // ... fill here useful functions to manage store
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

//   render() {
//     console.log('th', this.state)
//     return (
//       <GlobalContext.Provider value={Object.assign({}, {...this.state, addToCart: this.addToCart})}>
//       {this.props.children}
//       </GlobalContext.Provider>
//       );
//     }
// }

GlobalProvider.propTypes = {
  children: PropTypes.object,
};

export const GlobalConsumer = GlobalContext.Consumer;
