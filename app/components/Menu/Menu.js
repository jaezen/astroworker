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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFE0E4',
    flex: 1,
    padding: 20,
  },
  tabLink: {
    backgroundColor: 'red',
  },
  tabsActiveStyle: {
    backgroundColor: 'yellow',
  }
});

export class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Link
          to="/city-prompt"
          activeStyle={styles.tabsActiveStyle}
          style={styles.tabLink}
          underlayColor="transparent"
        >
          <Text style={styles.tabLinkText}>City Screen</Text>
        </Link>

      </View>
    );
  }
}

export default withRouter(Menu);
