// List view pour render les articles

import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Article from 'Article';

class ArticlesList extends React.Component {
  render() {
    return (
      <ScrollView>
        <GlobalConsumer>
          {({ articles, getQuantityByArticleId }) => articles ? articles.map(a => <Article article={a} key={a.ID} />) : <ActivityIndicator size="large" color="#0000ff" />
          }
        </GlobalConsumer>
      </ScrollView>
    );
  }
}

export default ArticlesList;
