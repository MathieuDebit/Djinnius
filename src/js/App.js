/**
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

var HelloWorld = NativeModules.HelloWorld;

export default class Djinnius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: null,
    }
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    try {
      let init = await HelloWorld.init();

      this.setState({ init });
    } catch (e) {
      console.error(e);
    }
  }

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

        {
          this.state.init &&
          <Text style={styles.content}>
             {this.state.init}
          </Text>
        }
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
