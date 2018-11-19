// List view pour render les articles

import React from 'react';
import { View, ScrollView } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Article from 'Article';
import { Button } from 'react-native-elements'

// import articles from 'fakeData/articles.json';

const ArticlesList = () => (
  <GlobalConsumer>
    {({articles}) => {
      console.log(articles);
      return articles.map(a => <Article article={a} key={a.id} />)}}
  </GlobalConsumer>
);

export default ArticlesList;
