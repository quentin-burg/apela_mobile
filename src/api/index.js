// url : https://apela-backend.herokuapp.com/products

/**
 * Structure de données Product:
 *  ID
 *  Description
 *  ImageURL
 *  Price
 *  Quantity
 */

export const fetchProducts = () =>
  fetch('https://apela-backend.herokuapp.com/products').then(res => res.json());
