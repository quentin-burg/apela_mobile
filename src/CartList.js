import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';
import Article from 'Article';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';
import { sendOrder } from 'api';
import _ from 'lodash';
import ThankYou from './ThankYou';

const CartList = props => {
  getTotalPrice = cart => {
    totalPrice = 0.0;
    cart.forEach(function(articleInCart) {
      totalPrice += articleInCart.price * articleInCart.quantity;
    });
    return totalPrice.toFixed(2);
  };

  getNumberArticles = cart => {
    return cart.length;
  };
  return (
    <View>
      <ScrollView style={{ height: 90 + '%' }}>
        <GlobalConsumer>
          {({ cart }) => {
            if (cart.length === 0) {
              return (
                <Card
                  title="Panier vide ?"
                  icon={{ name: 'shopping-cart', type: 'font-awesome' }}
                >
                  <Button
                    onPress={() => props.navigation.navigate('Catalogue')}
                    backgroundColor="#9ad1b5"
                    buttonStyle={{
                      borderRadius: 5,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                    }}
                    title="Cliquer ici pour faire vos achats."
                    color="black"
                  />
                </Card>
              );
            }
            return (
              <View>
                {cart.map(a => {
                  if (a.quantity) return <CartArticle article={a} key={a.id} />;
                })}
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{ marginRight: 15, marginLeft: 5 }}>
                    Total : {getTotalPrice(cart)} €
                  </Text>
                  <Text>Articles : {getNumberArticles(cart)}</Text>
                </View>
              </View>
            );
          }}
        </GlobalConsumer>
      </ScrollView>
      <GlobalConsumer>
        {({ removeCart, cart }) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Button
                title="Vider le panier"
                backgroundColor="#D1603D"
                color="black"
                icon={{ name: 'trash', type: 'font-awesome', color: 'black' }}
                buttonStyle={{
                  borderRadius: 5,
                  marginLeft: 5,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                onPress={removeCart}
              />
              <Button
                title="Commander"
                backgroundColor="#fbc02d"
                color="black"
                icon={{ name: 'phone', type: 'font-awesome', color: 'black' }}
                buttonStyle={{
                  borderRadius: 5,
                  marginLeft: 0,
                  marginRight: 5,
                  marginBottom: 0,
                }}
                onPress={
                  () => props.navigation.navigate('ThankYou')
                  // sendOrder({
                  //   products: cart.map(p => {
                  //     return { ..._.omit(p, 'id'), product_id: p.id };
                  //   }),
                  //   // TODO : remove that when we have authentication
                  //   userId: '2233dc4d-53a9-42e0-902d-27eaa61cc6bb',
                  //   // TODO : traiter l'erreur "empty cart"
                  // }).catch(console.error);
                }
              />
            </View>
          );
        }}
      </GlobalConsumer>
    </View>
  );
};

export default CartList;
