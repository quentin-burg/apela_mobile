// représente un article

import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  backgroundcolor: #d1603d;
`;

const ImageContainer = styled.Image`
  width: 50;
  height: 50;
  margin: 5;
`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
const Article = ({ article }) => {
  // const imagePath = `assets/${article.image}`;
  return (
    <Container>
      <ImageContainer source={require('assets/hibou.jpg')} />
      <Text>{article.name}</Text>
      <Text>{article.description}</Text>
      <Text>Prix : {article.price}€</Text>
    </Container>
  );
};
export default Article;
