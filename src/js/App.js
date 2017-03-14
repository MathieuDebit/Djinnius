/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Djinnius extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Djinnius
        </Text>
        <Text style={styles.content}>
          React Native & C++ starter pack with Djinni tool
        </Text>
        <Text style={styles.content}>
           iOS & Android
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
