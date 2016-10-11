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

class ApplicationKeepApplying extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Image source={require('../../images/thumbs-up.png')} style={styles.image} />
        <Text style={styles.heading}>
        Congratulations!
        </Text>
        <Text style={styles.notification}>
          You have successfully applied to work with Uber!
        </Text>
        <Text style={styles.heading}>
        What happens next?
        </Text>
        <Text style={styles.notification}>
          You will receive a message by text message, notifying you if you have been approved or not.
        </Text>

        <KeepApplyingButton />

      </View>
    );
  }
}

class KeepApplyingButton extends Component {

  render() {
    return (
      <Link to={'/results'} style={{ height: 70 }}>
        <View style={styles.KeepApplyingButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white',fontWeight:'bold'}}
         >
          KEEP APPLYING
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
  KeepApplyingButtonContainer: {
    margin:10,
    marginTop:120,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});

export default withRouter(ApplicationKeepApplying);
