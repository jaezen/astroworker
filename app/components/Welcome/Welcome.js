import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';


import Button from 'react-native-button';



class Welcome extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    console.log('Hello World!')

    const handleQuickStartButtonPress = () => {
      this.props.router.push('/city-prompt');
    }

    const handleLoginButtonPress = () => {
      this.props.router.push('/login-mobile-no');
    };

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          ASTRO {"\n"}
          WORKER
        </Text>

        <Text
          style={styles.instructions}
        >
          Get on-demand work
        </Text>

        <Button
         containerStyle={styles.quickStartButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={handleQuickStartButtonPress}
        >
         QUICK START
        </Button>

        <Button
         containerStyle={styles.loginButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={handleLoginButtonPress}
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
    color:'blue',
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent:'center',
    marginTop:100,
    padding: 20,
    backgroundColor: 'white'
  },
  instructions: {
    fontSize:20,
    textAlign: 'center',
    padding: 60,
    color: '#333333',
    marginBottom: 20,
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

export default withRouter(Welcome);
