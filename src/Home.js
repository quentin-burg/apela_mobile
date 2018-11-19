import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArticlesList from 'ArticlesList';

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ArticlesList />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
