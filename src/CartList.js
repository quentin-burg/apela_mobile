import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import CartArticle from 'CartArticle';
import Article from 'Article';
import { Button, Card } from 'react-native-elements';
import call from 'react-native-phone-call';

const CartList = () => {
  // Note Louis : pour faire cette fonction tu peux utiliser reduce des Array
  getTotalPrice = cart => 10;
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
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Cliquer ici pour faire vos achats.' />
                </Card>)
            }
            return (
              <View>
                {cart.map(a => {
                  if (a.cartQuantity)
                    return <CartArticle article={a} key={a.id} />;
                })}
                <Text>Total : {getTotalPrice(cart)} €</Text>
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
                title="Retirer tous les articles"
                icon={{ name: 'trash', type: 'font-awesome' }}
                onPress={removeCart}
              />
              <Button
                title="Commander"
                icon={{ name: 'phone', type: 'font-awesome' }}
                onPress={() =>
                  call({ number: '0808080808', prompt: false }).catch(
                    console.error
                  )
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
