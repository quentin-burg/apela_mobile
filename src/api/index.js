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
  fetch('https://apela-backend.herokuapp.com/products').then(res => res.json());
