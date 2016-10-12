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
  Image,
} from 'react-native';

class ApplicationBGCheckApproved extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Image source={require('../../images/awkward-face.png')} style={styles.image} />
        <Text style={styles.heading}>
        Sorry!
        </Text>
        <Text style={styles.notification}>
          You do not qualify to work because you must be at least 18 years old SSN.{"\n\n"}
          Please come back when you are 18 years old. 
        </Text>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems:'center',
    backgroundColor: '#fff',
  },
  image: {
    width:200,
    height:200,
    alignSelf:'center',
  },
  heading: {
    fontWeight:'bold',
    fontSize:15,
    padding:5,
    marginTop: 5,
  },
  notification: {
    fontSize:12,
    paddingTop:5,
    paddingLeft:40,
    paddingRight:40,
  },
});



export default withRouter(ApplicationBGCheckApproved);
