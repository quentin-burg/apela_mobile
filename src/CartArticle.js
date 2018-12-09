// représente un article

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  backgroundColor: white;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  borderBottomColor: lightgrey;
  borderBottomWidth: 2;
  borderStyle: solid;
`;

const ImageContainer = styled.Image`
  width: 50;
  height: 50;
  margin-vertical: 5;
  margin-right: 30;
  margin-left: 10;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Quantity = styled.Text`
  paddingVertical: 5;
  paddingHorizontal: 5;
  backgroundColor: #FBB03B;
  color: black;
  border-radius: 10;
  position: relative;
  right: 73;
`;

const IconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
class CartArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.article.cartQuantity,
    };
  }

  render() {
    const { article } = this.props;
    return (
      <Container>
        <ImageContainer source={{ uri: article.image_url }} />
        <TextContainer>
          <Text style={{ color: 'black' }}>{article.name}</Text>
          <Text style={{ color: 'black' }}>Prix : {article.price}€</Text>
        </TextContainer>
        <GlobalConsumer>
          {({ removeArt, updateQuantity }) => (
            <IconContainer>
              <Icon
              name="minus-square"
              onPress={() => updateQuantity(article, false)}
              type="font-awesome"
              color="black"
              size={30}
              />
              <Icon
                name="plus-square"
                onPress={() => updateQuantity(article, true)}
                type="font-awesome"
                color="black"
                size={30}
              />
            </IconContainer>
          )}
        </GlobalConsumer>
        {<Quantity>{article.cartQuantity}</Quantity>}
      </Container>
    );
  }
}

export default CartArticle;