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

class ApplicationUberCar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    const handleYesButtonPress = () => {
      //alert('Yes Pressed');
      this.props.setHasCar('yes');
      this.props.router.push('/application-uber-driving-record');
    }

    const handleNoButtonPress = () => {
      this.props.setHasCar('no');
      this.props.router.push('/service-details-secondary');
    };

    return (
      <View style={styles.container}>
      <Text>
        Step 1 of 5
      </Text>
        <Text style={styles.question}>
          Do you have a 4 door car less than 10 years old?
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
         NO - I NEED A CAR
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

export default withRouter(ApplicationUberCar);
