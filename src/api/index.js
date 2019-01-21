import _ from 'lodash';

// url : https://apela-backend.herokuapp.com/products

/**
 * Structure de données Product:
 *  id
 *  description
 *  image_url
 *  price
 *  Quantity
 */

export const fetchProducts = () =>
  fetch('https://apela-backend.herokuapp.com/products')
    .then(res => res.json())
    .then(products => products.map(p => _.omit(p, 'quantity')));

export const sendOrder = ({ products, userId }) => {
  if (products.length === 0) {
    return Promise.reject('Empty cart');
  }
  return fetch('https://apela-backend.herokuapp.com/orders', {
    method: 'POST',
    body: JSON.stringify({
      products,
      user_id: userId,
      postal_code: '59000',
      number: '45',
      street: 'rue Nationale',
      city: 'Lille',
    }),
  }).catch(console.error);
};
