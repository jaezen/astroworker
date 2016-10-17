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



export class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.innerBlock]}>
            <Text style={styles.menuTitle}>ABOUT</Text>
          </View>
          <Link
            to="/profile-settings"
            activeStyle={styles.tabsActiveStyle}
            style={styles.tabLink}
            underlayColor="transparent"
          >
            <Text style={styles.tabLinkText}>FAQ</Text>
          </Link>
          <Link
            to="/city-prompt"
            activeStyle={styles.tabsActiveStyle}
            style={styles.tabLink}
            underlayColor="transparent"
          >
            <Text style={styles.tabLinkText}>Help</Text>
          </Link>
          <Link
            to="/about"
            activeStyle={styles.tabsActiveStyle}
            style={styles.tabLink}
            underlayColor="transparent"
          >
            <Text style={styles.tabLinkText}>Legal</Text>
          </Link>
          <Link
            to="/city-prompt"
            activeStyle={styles.tabsActiveStyle}
            style={styles.tabLink}
            underlayColor="transparent"
          >
            <Text style={styles.tabLinkText}>Website</Text>
          </Link>
          <Link
            to="/city-prompt"
            activeStyle={styles.tabsActiveStyle}
            style={styles.tabLink}
            underlayColor="transparent"
          >
            <Text style={styles.tabLinkText}>Rate us on the app store</Text>
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
    justifyContent:'center',
    alignItems:'center'
  },
  menuTitle: {
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
  },
});

export default withRouter(About);
