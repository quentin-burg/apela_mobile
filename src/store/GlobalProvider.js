// Contexte global de l'application
// Permet d'avoir accès aux données par tous les composants

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import articles from 'fakeData/articles.json';


const GlobalContext = createContext({
  articles: [],
  cart: [],
});

export class GlobalProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: articles,
      // cart = [{articleId : id, quantity: 3}]
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
  }

  // TODO : do function to add, remove, update into the state /!\ immutable function when you update the state
  // Quand on ajoute pour la premiere fois un article il est dans la liste une iteration apres ce qu'il devrait
  addToCart = (articleId, newQuantity) => {
    let isInCart = false;
    this.state.cart.forEach(a => a.articleId === articleId ? isInCart = true : null);
    if (isInCart) {
      const cartArticles = this.state.cart;
      cartArticles.map(a => a.articleId === articleId ? a.quantity = newQuantity : null);
      this.setState({
        cart: cartArticles,
      })
    } else {
      this.setState({
        cart : [...this.state.cart, { articleId, quantity: newQuantity}],
      })
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        articles: this.state.articles,
        addToCart: this.addToCart,
        cart: this.state.cart,
        // ... fill here useful functions to manage store
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.object,
};


export const GlobalConsumer = GlobalContext.Consumer;

// export const GlobalConsumer = () => (
//   <GlobalContext.Consumer value={{...this.state}} />
// );

// export class GlobalConsumer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <GlobalContext.Consumer value={{...this.state}}>{this.props.children}</GlobalContext.Consumer>
//     )
//   }
// }