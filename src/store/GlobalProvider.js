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
      articles: [],
      // cart = [{articleId : id, quantity: 3}]
      cart: [],
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeArt = this.removeArt.bind(this);
  }

  componentDidMount() {
    fetchProducts().then(results => {
      this.setState({ articles: results });
    });
  }

  // TODO : do function to add, remove, update into the state /!\ immutable function when you update the state
  // Quand on ajoute pour la premiere fois un article il est dans la liste une iteration apres ce qu'il devrait
  updateQuantity = (article, isAdd = true) => {
    let isInCart = false;
    this.state.cart.forEach(a =>
      a.id === article.id ? (isInCart = true) : null
    );
    if (isInCart) {
      const cartArticles = this.state.cart;
      cartArticles.map(a =>
        a.id === article.id
          ? isAdd
            ? a.quantity++
            : a.quantity > 1
            ? a.quantity--
            : cartArticles.splice(this.state.cart.indexOf(a), 1)
          : null
      );
      this.setState({
        cart: cartArticles,
      });
    } else if (isAdd) {
      this.setState({
        cart: [...this.state.cart, { ...article, quantity: 1 }],
      });
    }
  };

  removeArt(articleId) {
    const articleToDel = this.state.cart.find(a => a.id === articleId);
    const temp = this.state.cart;
    temp.splice(this.state.cart.indexOf(articleToDel), 1);
    this.setState({
      cart: temp,
    });
  }

  getQuantityByArticleId = articleId => {
    const art = this.state.cart.find(a => a.id === articleId);
    return art && art.quantity ? art.quantity : 0;
  };

  removeCart = () => this.setState({ cart: [] });

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          updateQuantity: this.updateQuantity,
          removeArt: this.removeArt,
          getQuantityByArticleId: this.getQuantityByArticleId,
          removeCart: this.removeCart,
          // ... fill here useful functions to manage store
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.object,
};

export const GlobalConsumer = GlobalContext.Consumer;
