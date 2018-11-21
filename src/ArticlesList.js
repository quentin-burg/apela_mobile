// List view pour render les articles

import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Article from 'Article';
import { Button } from 'react-native-elements';

class ArticlesList extends React.Component {
  render() {
    return (
      <ScrollView>
        <GlobalConsumer>
          {({ articles }) => articles ? articles.map(a => <Article article={a} key={a.ID} />) : <ActivityIndicator size="large" color="#0000ff" />
          }
        </GlobalConsumer>
      </ScrollView>
    );
  }
}

export default ArticlesList;
