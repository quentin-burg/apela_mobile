// représente un article

import React, { Component } from 'react';
import { Text, Image, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { GlobalConsumer } from 'store/GlobalProvider';

const Container = styled.View`
  backgroundColor: #f6f5ae;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  borderBottomColor: lightgrey;
  borderBottomWidth: 1;
  borderStyle: solid;
`;

const ImageContainer = styled.Image`
  width: 50;
  height: 50;
  margin-vertical: 5;
  margin-right: 30;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const IconContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Quantity = styled.Text`
  borderWidth: 1;
  borderStyle: solid;
  borderColor: red;
  paddingVertical: 3;
  paddingHorizontal: 3;
  backgroundColor: white;
`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.article.Quantity,
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {
    console.log('add');
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }

  remove() {
    console.log('remove');
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
      })
    }
  }

  render() {
    // const imagePath = `assets/${article.image}`;
    const { article } = this.props;
    const imagePath = article.ImageURL;
    console.log('imag', imagePath);
    return (
      <GlobalConsumer>
      {
        ({ addToCart, removeArt }) => (
          <Container>
            <ImageContainer source={require('assets/hibou.jpg')} />
            <TextContainer>
              <Text style={{ color: 'black' }}>{article.Name}</Text>
              <Text style={{ color: 'black' }}>{article.Description}</Text>
              <Text style={{ color: 'black' }}>Prix : {article.Price}€</Text>
            </TextContainer>
            <IconContainer>
              <Icon name='plus-square' onPress={this.add} type='font-awesome' color='black' size={20} />
              <Icon name='minus-square' onPress={this.remove} type='font-awesome' color='black' size={20} />
            </IconContainer>
            { this.state.quantity ? <Quantity>{this.state.quantity}</Quantity> : null }
            <Button title='Ajouter au panier' onPress={() => addToCart(article, this.state.quantity)} fontSize={10} backgroundColor='black' />
          </Container>
        )
      }
      </GlobalConsumer>


    );

  }
};

export default Article;