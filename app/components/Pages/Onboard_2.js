import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Onboard_1 extends Component {
  render() {
    return (
      <Text>AstroWorker</Text>
      <Text>Get on-demand work</Text>
      <button type="button">QUICK START</button>
      <button type="button">LOG-IN</button>
    );
  }
}

AppRegistry.registerComponent('AstroWorker', () => AstroWorker);
