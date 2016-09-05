import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from 'react-native-button';

export default class Onboard_1 extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleQuickStartButtonPress() {
    console.log('Quick Start Pressed');
    alert('Quick Start Pressed');
  }

  handleLoginButtonPress() {
    console.log('Login Pressed');
    alert('Login Pressed');
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          ASTRO WORKER
        </Text>

        <Text
          style={styles.instructions}
        >
          Get on-demand work
        </Text>

        <Button
         containerStyle={styles.quickStartButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={this.handleQuickStartButtonPress}
        >
         QUICK START
        </Button>

        <Button
         containerStyle={styles.loginButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={this.handleLoginButtonPress}
        >
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
  // It's important for maintainability and performance not to inline your styles in your render().
  quickStartButtonContainer: {
    padding: 10,
    height: 45,
    width: 300,
    overflow: 'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  loginButtonContainer: {
    padding:10,
    height:45,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue'
  },
});
