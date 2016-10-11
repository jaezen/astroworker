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
        <Text style={styles.step}>
        Step 5 of 5
        </Text>
        <Image source={require('../../images/thumbs-up.png')} style={styles.image} />
        <Text style={styles.heading}>
        Congratulations!
        </Text>
        <Text style={styles.dotpoints}>
        * Payment Accepted {"\n\n"}
        * Background Check Approved {"\n"}
        </Text>
      </View>
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
    marginTop: 20,
    alignSelf:'center',
  },
  dotpoints: {
    fontSize:12,
    padding: 10,
    color: '#333333',
    marginTop:5,
    marginBottom: 5,
    alignSelf:'center',
  },
});



export default withRouter(ApplicationBGCheckApproved);
