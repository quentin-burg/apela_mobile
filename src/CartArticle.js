// représente un article

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const Quantity = styled.Text`
  borderWidth: 1;
  borderStyle: solid;
  borderColor: red;
  paddingVertical: 3;
  paddingHorizontal: 3;
  backgroundColor: white;
`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
class CartArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
    this.remove = this.remove.bind(this);
  }

  remove() {
    console.log('remove');
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  }

  render() {
    const { article } = this.props;
    return (
      <Container>
        <ImageContainer source={require('assets/hibou.jpg')} />
        <TextContainer>
          <Text style={{ color: 'black' }}>{article.name}</Text>
          <Text style={{ color: 'black' }}>{article.description}</Text>
          <Text style={{ color: 'black' }}>Prix : {article.price}€</Text>
        </TextContainer>
        <GlobalConsumer>
          {({ removeArt }) => (
            <Icon
              name="minus-square"
              onPress={() => removeArt(article.id)}
              type="font-awesome"
              color="black"
              size={20}
            />
          )}
        </GlobalConsumer>
        <Quantity>{this.state.quantity}</Quantity>
      </Container>
    );
  }
}

export default CartArticle;
