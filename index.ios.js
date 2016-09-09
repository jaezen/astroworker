/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
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
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  home: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  detailCard: {
    height: 100,
    margin: 20,
    width: 100,
  },
});

// Renamed AstroWorker component to Onboard_1 and moved it to `Pages`. `index` should only be
// responsible for registering the component with the `AppRegistry`.
import Onboard_1 from './app/components/Pages/Onboard_1';
import Onboard_1_Navbar from './app/components/Pages/Onboard_1_Navbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import Onboard_2 from './app/components/Pages/Onboard_2';
import Onboard_2_Navbar from './app/components/Pages/Onboard_2_Navbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import Onboard_3 from './app/components/Pages/Onboard_3';
import Onboard_3_Navbar from './app/components/Pages/Onboard_3_Navbar';

const Master = (props) => (
  <View style={styles.component}>
    {
    /*
      If you want tos style your StatusBar instead of hiding it, see my answer to this question on SO:
      http://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native/39300715#39300715
    */
    }
    <StatusBar hidden={false} />
    {props.children}
  </View>
);


const routes = (
  <Router history={nativeHistory}>
    <StackRoute path="master" component={Master}>
      <Route path="/" component={Onboard_1}/>
      <Route path="/onboard-2" component={Onboard_2} overlayComponent={Onboard_2_Navbar} />
      <Route path="/onboard-3" component={Onboard_3} overlayComponent={Onboard_3_Navbar} />
    </StackRoute>
  </Router>
);

// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => () => routes);
