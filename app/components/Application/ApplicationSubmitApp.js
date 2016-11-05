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

class ApplicationSubmitApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Text style={styles.step}>
        Ready to submit!
        </Text>
        <Text style={styles.dotpoints}>
        * Your name is XXX {"\n\n"}
        * You want to work in XXX {"\n\n"}
        * You are over 21 years old {"\n\n"}
        * You have a SSN and allowed to work in the U.S. {"\n\n"}
        * Your background check is successful {"\n\n"}
        * You have a 4 door car less than 10 years old {"\n\n"}
        * You have 2+ years clean driving record {"\n\n"}
        * Your contact number is (415) 796-1838
        </Text>

        <SubmitApplicationButton />

      </View>
    );
  }
}

class SubmitApplicationButton extends Component {

  render() {
    return (
      <Link to={'/application-keep-applying'} style={{ height: 70 }}>
        <View style={styles.SubmitApplicationButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white',fontWeight:'bold'}}
         >
          SUBMIT APPLICATION
         </Text>
       </View>
     </Link>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  step: {
    alignSelf:'center',
    fontWeight:'bold',
  },
  dotpoints: {
    fontSize:12,
    padding: 10,
    color: '#333333',
    marginTop:20,
    marginBottom: 5,
    alignSelf:'center',
  },
  SubmitApplicationButtonContainer: {
    margin:10,
    marginTop:160,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});

export default withRouter(ApplicationSubmitApp);
