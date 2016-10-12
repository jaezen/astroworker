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

class ApplicationUberDrivingRecordFailed extends Component {
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
          You do not qualify to drive with Uber because.{"\n\n"}
          you need a clean driving record of more than 2 years
        </Text>
        <SeeOptionsButton />
      </View>
    );
  }
}

class SeeOptionsButton extends Component {

  render() {
    return (
      <Link to={'/results'} style={{ height: 70 }}>
        <View style={styles.SeeOptionsButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white',fontWeight:'bold'}}
         >
          SEE OPTIONS
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
  SeeOptionsButtonContainer: {
    marginTop:40,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});



export default withRouter(ApplicationUberDrivingRecordFailed);
