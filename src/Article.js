// représente un article

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
const Article = ({ article }) => {
  const imagePath = `assets/${article.image}`;
  return (
    <View style={{ backgroundColor: '#D1603D' }}>
      <Image
        style={{ width: 50, height: 50, margin: 5 }}
        source={require('assets/hibou.jpg')}
      />
      <Text>{article.name}</Text>
      <Text>{article.description}</Text>
      <Text>Prix : {article.price}€</Text>
    </View>
  );
};
export default Article;
