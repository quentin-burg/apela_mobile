// List view pour render les articles

import React from 'react';
import { View, ScrollView } from 'react-native';
// import { GlobalContext } from 'store/GlobalProvider';
import Article from 'Article';
import articles from 'fakeData/articles.json';

// const ArticlesList = () => (
//   <GlobalContext.Consumer>
//     {value => value.articles.map(a => <Article article={a} />)}
//   </GlobalContext.Consumer>
// );

const ArticlesList = () => {
  console.log(articles);
  return (
    <ScrollView style={{ backgroundColor: '#D1603D', width: 100 + '%' }}>
      {articles.map(a => (
        <Article article={a} key={a.name} />
      ))}
    </ScrollView>
  );
};

export default ArticlesList;
