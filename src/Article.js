// représente un article

import React, { Component } from 'react';
import { Text, Image, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { GlobalConsumer } from 'store/GlobalProvider';

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

const IconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Quantity = styled.Text`
  paddingVertical: 5;
  paddingHorizontal: 5;
  backgroundColor: #FBB03B;
  color: black;
  border-radius: 10;
  position: relative;
  left: 73;

`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      isAdd: false,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(addToCart, article) {
    addToCart(article, true);
    this.setState({ isAdd: true});
  }

  // Check this to use materail design : https://callstack.github.io/react-native-paper/index.html
  render() {
    const { article } = this.props;
    const imagePath = article.image_url;
    return (
      <GlobalConsumer>
      {
        ({ updateQuantity, removeArt, getQuantityByArticleId }) => (
          <Container>
            <ImageContainer source={{uri : imagePath}} style={{width: 50, height: 50}}/>
            <TextContainer>
              <Text style={{ color: 'black' }}>{article.name}</Text>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{article.price}€</Text>
            </TextContainer>
            {getQuantityByArticleId(article.id) ? <Quantity>{getQuantityByArticleId(article.id) || 0 }</Quantity> : null}
            {getQuantityByArticleId(article.id) !== 0 ?
              <IconContainer>
              <Icon name='minus-square' onPress={() => updateQuantity(article, false)} type='font-awesome' color='black' size={30} />
              <Icon name='plus-square' onPress={() => updateQuantity(article, true)} type='font-awesome' color='black' size={30} />
            </IconContainer> :
            <Button icon={{name: 'cart-arrow-down', type:'font-awesome', color: 'black'}} onPress={() => this.handleAddToCart(updateQuantity, article)} buttonStyle={{paddingRight: 5, backgroundColor:'#FBB03B', borderRadius: 15}}/>
          }
          </Container>
        )
      }
      </GlobalConsumer>


    );

  }
};

export default Article;
