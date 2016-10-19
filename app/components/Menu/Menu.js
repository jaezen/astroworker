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



export class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.innerBlock]}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.image} />
            <Text style={styles.userName}>User Name</Text>
          </View>
        <Link
          to="/profile-settings"
          activeStyle={styles.tabsActiveStyle}
          style={styles.tabLink}
          underlayColor="transparent"
        >
          <Text style={styles.tabLinkText}>PROFILE SETTINGS</Text>
        </Link>
        <Link
          to="/notifications"
          activeStyle={styles.tabsActiveStyle}
          style={styles.tabLink}
          underlayColor="transparent"
        >
          <Text style={styles.tabLinkText}>NOTIFICATIONS</Text>
        </Link>
        <Link
          to="/about"
          activeStyle={styles.tabsActiveStyle}
          style={styles.tabLink}
          underlayColor="transparent"
        >
          <Text style={styles.tabLinkText}>ABOUT</Text>
        </Link>
        <Link
          to="/city-prompt"
          activeStyle={styles.tabsActiveStyle}
          style={styles.tabLink}
          underlayColor="transparent"
        >
          <Text style={styles.tabLinkText}>SIGN OUT</Text>
        </Link>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  innerBlock: {
    width: 375,
    height: 100,
    marginRight:20,
    backgroundColor:'#DFE0E4',
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
  tabLinkText: {
    fontSize: 16,
  },
  tabsActiveStyle: {
    backgroundColor: 'yellow',
  }
});

export default withRouter(Menu);
