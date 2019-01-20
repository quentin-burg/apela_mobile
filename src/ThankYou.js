import React from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
    };
  }

  checkEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(text)) {
      this.setState({ email: text, isEmailValid: false });
    } else {
      this.setState({ email: text, isEmailValid: true });
    }
  }
  render() {
    return (
      <View
        style={{
          padding: 15,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            flex: 1,
            height: 150,
            width: 150,
            resizeMode: 'contain',
          }}
          source={require('assets/logo_icon.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          Notre service n'est pas encore disponible :-(
        </Text>
        <Text style={{ textAlign: 'center', color: 'black' }}>
          Merci beaucoup d'avoir téléchargé notre application et d'avoir passé
          commande !
        </Text>
        <Text
          style={{ textAlign: 'center', color: 'black', marginVertical: 30 }}
        >
          Soyez les premiers à profiter d'Apéla le jour de sa sortie ! Pour
          cela, inscrivez votre email et profitez de 10% de remise sur votre
          première commande le code inscrit dans votre email. A bientôt.
        </Text>
        <TextInput
          mode="flat"
          label="Email"
          value={this.state.email}
          onChangeText={text => this.checkEmail(text)}
          placeholder="apéla@gmail.com"
          textContentType="emailAddress"
          style={{ width: 80 + '%', backgroundColor: 'white' }}
          underlineColor="#FBB03B"
        />
        {this.state.isEmailValid ? (
          <Text style={{ color: 'green', marginBottom: 20 }}>Email valide</Text>
        ) : (
          <Text style={{ color: 'red', marginBottom: 20 }}>Email invalide</Text>
        )}
        <Button
          icon={{ name: 'envelope', type: 'font-awesome', color: 'black' }}
          // TODO add a route to backend to send a email with a promo code
          onPress={() => console.log('Pressed')}
          title="Merci !"
          buttonStyle={{
            paddingRight: 5,
            backgroundColor: '#FBB03B',
            borderRadius: 15,
          }}
          color="black"
        />
      </View>
    );
  }
}

export default ThankYou;
