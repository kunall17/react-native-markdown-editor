import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { FullScreenEditor } from './lib/main';


export default class App extends Component {
  render() {
    return <FullScreenEditor />;
  }
}


AppRegistry.registerComponent('reactnativemarkdowneditor', () => App);
