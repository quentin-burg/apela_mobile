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
      quantity: 0,
      isAdd: false,
    };
    // this.add = this.add.bind(this);
    // this.remove = this.remove.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // add() {
  //   console.log('add');
  //   this.setState({
  //     quantity: this.state.quantity + 1,
  //   })
  // }

  // remove() {
  //   console.log('remove');
  //   if (this.state.quantity > 0) {
  //     this.setState({
  //       quantity: this.state.quantity - 1,
  //     })
  //   }
  // }

  handleAddToCart(addToCart, article) {
    addToCart(article, true);
    this.setState({ isAdd: true});
  }

  // Check this to use materail design : https://callstack.github.io/react-native-paper/index.html
  render() {
    // const imagePath = `assets/${article.image}`;
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
            <Quantity>{getQuantityByArticleId(article.id) || 0}</Quantity>
            {getQuantityByArticleId(article.id) !== 0 ?
            <IconContainer>
              <Icon name='plus-square' onPress={() => updateQuantity(article, true)} type='font-awesome' color='black' size={30} />
              <Icon name='minus-square' onPress={() => updateQuantity(article, false)} type='font-awesome' color='black' size={30} />
            </IconContainer> :
            <Button icon={{name: 'cart-arrow-down', type:'font-awesome'}} onPress={() => this.handleAddToCart(updateQuantity, article)} buttonStyle={{paddingRight: 5}}/>
          }
          </Container>
        )
      }
      </GlobalConsumer>


    );

  }
};

export default Article;

// <Icon name='cart-arrow-down' type='font-awesome' onPress={() => addToCart(article, this.state.quantity)} size={30} color='white' />
//               <Icon name='plus-square' onPress={this.add} type='font-awesome' color='white' size={20} />
//               <Icon name='minus-square' onPress={this.remove} type='font-awesome' color='white' size={20} />

//<Button title='' rightIcon={{name: 'cart-arrow-down', type: 'font-awesome', size: 20}} onPress={() => addToCart(article, this.state.quantity)} backgroundColor='black' />
// <IconContainer>
//
//             </IconContainer>

// { this.state.quantity ? <Quantity>{this.state.quantity}</Quantity> : null }

// <Text style={{ color: 'black' }}>{article.description}</Text>