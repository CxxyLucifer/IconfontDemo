/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from './icon';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={'antDesign|left'} size={20} color={'red'}/>
        <Icon name={'fontAwesome|angle-left'} size={20} color={'red'}/>
        <Icon name={'fontAwesome|facebook'} size={20} color={'orange'}/>
        <Icon name={'myIcon|icon-back'} size={20} color={'red'}/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
