import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';
import Article from 'Article';
import { Button } from 'react-native-elements';

// TODO : button clear all doesn't work

const CartList = () => (
  <View>
    <ScrollView>
      <GlobalConsumer>
        {({ cart }) => {
          if (cart.length === 0) {
            return <Text>Pas d'articles dans le panier</Text>;
          }
          return cart.map(a => {
            if (a.quantity) return <CartArticle article={a} key={a.ID} />
          });

        }}
      </GlobalConsumer>
    </ScrollView>
    <GlobalConsumer>
      { ({removeCart}) => {
        <Button title='Retirer tous les articles' icon={{name:'trash'}} onPress={removeCart} />
      }}
    </GlobalConsumer>
  </View>
);

export default CartList;


