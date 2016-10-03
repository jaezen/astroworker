import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
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

class Application2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    const handleYesButtonPress = () => {
      alert('Yes Pressed');
    }

    const handleNoButtonPress = () => {
      console.log('Login Pressed');
      alert('No Pressed');
    };

    return (
      <View style={styles.container}>
      <Text>
        Step 2 of 5
      </Text>
        <Text style={styles.question}>
          Do you have 2+ years clean driving record?
        </Text>
        <Button
         containerStyle={styles.YesButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={handleYesButtonPress}
        >
         YES
        </Button>

        <Button
         containerStyle={styles.NoButtonContainer}
         style={{fontSize: 20, color: 'white'}}
         onPress={handleNoButtonPress}
        >
         NO
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
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    padding: 30,
    color: '#333333',
    marginBottom: 5,
  },
  YesButtonContainer: {
    padding: 10,
    height: 45,
    width: 300,
    overflow: 'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  NoButtonContainer: {
    padding:10,
    marginBottom:20,
    height:45,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue'
  },
});

export default withRouter(Application2);
