// représente un article

import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #f6f5ae;
  flex: 1;
  flex-direction: row;
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

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
const Article = ({ article }) => {
  // const imagePath = `assets/${article.image}`;
  return (
    <Container>
      <ImageContainer source={require('assets/hibou.jpg')} />
      <TextContainer>
        <Text style={{ color: 'black' }}>{article.name}</Text>
        <Text style={{ color: 'black' }}>{article.description}</Text>
        <Text style={{ color: 'black' }}>Prix : {article.price}€</Text>
      </TextContainer>
    </Container>
  );
};
export default Article;
