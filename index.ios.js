/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import Onboard_2 from '.app/components/Onboard_2.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

class AstroWorker extends Component {

  constructor(props, context) {
      super(props, context);
    }
    _handlePress() {
      console.log('Pressed!');
}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Text style={styles.welcome}>
          ASTRO WORKER
        </Text>
        <Text style={styles.instructions}>
        Get on-demand work
        </Text>
        <Button
     containerStyle={{padding:10, height:45, width: 300, overflow:'hidden', borderRadius:4, backgroundColor: 'blue', marginBottom: 10,}}
     style={{fontSize: 20, color: 'white'}}>
     QUICK START
        </Button>
        <Button
     containerStyle={{padding:10, height:45,width: 300, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
     style={{fontSize: 20, color: 'white'}}>
     LOG-IN
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',

    backgroundColor: 'white',
  },
  welcome: {
    fontFamily:'Helvetica',
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent:'center',
    padding: 70,
    backgroundColor: 'white'
  },
  instructions: {
    fontSize:20,
    textAlign: 'center',
    padding: 80,
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AstroWorker', () => AstroWorker);
