import React from 'react';
import { View, Text } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';


// Doesn't work ... see Context
const CartList = () => (
	<GlobalConsumer>
		<View>
    { ({ cart }) => {
			console.log('cart', cart);
			if (cart.length === 0) {
				return <Text>Pas d'articles dans le panier</Text>
			}
      return cart.map(a => <CartArticle article={a} key={a.id} />)}}
		</View>
  </GlobalConsumer>
);

export default CartList;