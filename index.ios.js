import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { MarkdownEditor } from './lib/main';


export default class App extends Component {
  render() {
    return <MarkdownEditor />;
  }
}


AppRegistry.registerComponent('reactnativemarkdowneditor', () => App);
