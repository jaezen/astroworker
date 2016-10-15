import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
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



export class ProfileSettings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.innerBlock]}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.image} />
            <Text style={styles.userName}>PROFILE SETTINGS</Text>
          </View>
          <Text>First Name</Text>
        <SaveButton />
      </View>
    );
  }
}

class SaveButton extends Component {

  render() {
    return (
      <Link to={'/application-uber-car'} style={{ height: 70 }}>
        <View style={styles.SaveButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white', fontWeight:'bold'}}
         >
          SAVE
         </Text>
       </View>
     </Link>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFE0E4',
    flex: 1,
  },
  innerBlock: {
    width: 375,
    height: 100,
    marginRight:20,
    backgroundColor:'gray',
    padding: 20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  image: {
    height:50,
    width:50,
  },
  userName: {
    paddingLeft:20,
    fontSize:16,
  },
  tabLink: {
    paddingLeft: 20,
    marginTop:20,
  },
  tabsActiveStyle: {
    backgroundColor: 'yellow',
  },
  SaveButtonContainer: {
    margin:10,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});

export default withRouter(ProfileSettings);
