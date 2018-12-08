import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';
import Article from 'Article';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';

const CartList = (props) => {
  // Utiliser reduce des Array
  getTotalPrice = (cart) => {
    totalPrice = 0.0;
    cart.forEach(function (articleInCart) {
      totalPrice += articleInCart.price * articleInCart.cartQuantity;
    });
    return totalPrice;
  }
  getNumberArticles = (cart) => {
    return cart.length;
  }

  return (
    <View>
      <ScrollView style={{ height: 90 + '%' }}>
        <GlobalConsumer>
          {({ cart }) => {
            console.log('cART', cart);
            if (cart.length === 0) {
              return (
                <Card
                  title='Panier vide ?'
                  icon={{ name: 'shopping-cart', type: 'font-awesome' }}>
                  <Button
                    onPress={() => props.navigation.navigate('Catalogue')}
                    backgroundColor='#9ad1b5'
                    buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Cliquer ici pour faire vos achats.' />
                </Card>)
            }
            return (
              <View>
                {cart.map(a => {
                  if (a.cartQuantity)
                    return <CartArticle article={a} key={a.id} />;
                })}
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Text style={{ marginRight: 15, marginLeft: 5 }}>Total : {getTotalPrice(cart)} €</Text>
                  <Text>Articles : {getNumberArticles(cart)}</Text>
                </View>
              </View>
            );
          }}
        </GlobalConsumer>
      </ScrollView>
      <GlobalConsumer>
        {({ removeCart }) => {
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
                backgroundColor='#D1603D'
                icon={{ name: 'trash', type: 'font-awesome' }}
                buttonStyle={{ borderRadius: 5, marginLeft: 5, marginRight: 0, marginBottom: 0 }}
                onPress={removeCart}
              />
              <Button
                title="Commander"
                backgroundColor='#fbc02d'
                icon={{ name: 'phone', type: 'font-awesome' }}
                buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 5, marginBottom: 0 }}
                onPress={() => props.navigation.navigate('Appeler')}
              />
            </View>
          );
        }}
      </GlobalConsumer>
    </View>
  );
};

export default CartList;
