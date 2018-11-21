import React from 'react';
import { ScrollView, Text } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';
import Article from 'Article';

const CartList = () => (
  <ScrollView>
    <GlobalConsumer>
      {({ cart }) => {
        if (cart.length === 0) {
          return <Text>Pas d'articles dans le panier</Text>;
        }
        return cart.map(a => <CartArticle article={a} key={a.id} />);
      }}
    </GlobalConsumer>
  </ScrollView>
);

export default CartList;
