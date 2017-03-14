import React, {
  Component,
} from 'react';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Button from 'react-native-button';

class SSNPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

//{handleYesButtonPress} --> move back down to Return > View > Yes > onPress

  // incrementSsnCount(){
  //   this.setState({ssnCount: this.state.ssnCount+1});
  // }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``

    const handleYesButtonPress = () => {
        this.props.router.push('/worker-prompt');
        this.props.setHasSSN('yes');
    };

    const handleNoButtonPress = () => {
        this.props.router.push('/ssn-prompt-failed');
        this.props.setHasSSN('no');
    };

    return (
      <View style={styles.container}>
      <Text>
        Step 3 of 4
      </Text>
        <Text style={styles.question}>
          Do you have a Social Security Number and are legally able to work in the U.S.?
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
    height:45,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue'
  },
});

export default withRouter(SSNPrompt);
