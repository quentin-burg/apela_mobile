// url : https://apela-backend.herokuapp.com/products

export const fetchProducts = () =>
  fetch('https://apela-backend.herokuapp.com/products')
    .then(res => res.json())
    .then(result => console.log(result));
