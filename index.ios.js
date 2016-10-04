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

import { Examples } from '@shoutem/ui';

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
import Welcome from './app/components/Welcome/Welcome';
// import WelcomeNavbar from './app/components/Pages/WelcomeNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import CityPrompt from './app/components/CityPrompt/CityPrompt';
import CityPromptNavbar from './app/components/CityPrompt/CityPromptNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import DOBPrompt from './app/components/DOBPrompt/DOBPrompt';
import DOBPromptNavbar from './app/components/DOBPrompt/DOBPromptNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import SSNPrompt from './app/components/SSNPrompt/SSNPrompt';
import SSNPromptNavbar from './app/components/SSNPrompt/SSNPromptNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import WorkerPrompt from './app/components/WorkerPrompt/WorkerPrompt';
import WorkerPromptNavbar from './app/components/WorkerPrompt/WorkerPromptNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import Search from './app/components/Search/Search';
import SearchNavbar from './app/components/Search/SearchNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import Results from './app/components/Results/Results';
import ResultsNavbar from './app/components/Results/ResultsNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import ServiceDetails from './app/components/ServiceDetails/ServiceDetails';
import ServiceDetailsNavbar from './app/components/ServiceDetails/ServiceDetailsNavbar';

import ApplicationUberCar from './app/components/Application/ApplicationUberCar';
import ApplicationNavbarUberCar from './app/components/Application/ApplicationNavbarUberCar';

import ApplicationUberDrivingRecord from './app/components/Application/ApplicationUberDrivingRecord';
import ApplicationNavbarUberDrivingRecord from './app/components/Application/ApplicationNavbarUberDrivingRecord';

import ApplicationName from './app/components/Application/ApplicationName';
import ApplicationNavbarName from './app/components/Application/ApplicationNavbarName';

import ApplicationMobileNo from './app/components/Application/ApplicationMobileNo';
import ApplicationNavbarMobileNo from './app/components/Application/ApplicationNavbarMobileNo';

import ApplicationConfirmCode from './app/components/Application/ApplicationConfirmCode';
import ApplicationNavbarConfirmCode from './app/components/Application/ApplicationNavbarConfirmCode';


const Master = (props) => (
  <View style={styles.component}>
    {
    /*
      If you want to style your StatusBar instead of hiding it, see my answer to this question on SO:
      http://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native/39300715#39300715
    */
    }
    <StatusBar hidden={false} />
    {props.children}
  </View>
);


const routes = (
  <Router addressBar history={nativeHistory}>
    <StackRoute path="master" component={Master}>
      <Route path="/" component={Welcome}/>
      <Route path="/city-prompt" component={CityPrompt} overlayComponent={CityPromptNavbar} />
      <Route path="/dob-prompt" component={DOBPrompt} overlayComponent={DOBPromptNavbar} />
      <Route path="/ssn-prompt" component={SSNPrompt} overlayComponent={SSNPromptNavbar} />
      <Route path="/worker-prompt" component={WorkerPrompt} overlayComponent={WorkerPromptNavbar} />
      <Route path="/search" component={Search} overlayComponent={SearchNavbar} />
      <Route path="/results" component={Results} overlayComponent={ResultsNavbar} />
      <Route path="/service-details" component={ServiceDetails} overlayComponent={ServiceDetailsNavbar} />
      <Route path="/application-uber-car" component={ApplicationUberCar} overlayComponent={ApplicationNavbarUberCar} />
      <Route path="/application-uber-driving-record" component={ApplicationUberDrivingRecord} overlayComponent={ApplicationNavbarUberDrivingRecord} />
      <Route path="/application-name" component={ApplicationName} overlayComponent={ApplicationNavbarName} />
      <Route path="/application-mobile-no" component={ApplicationMobileNo} overlayComponent={ApplicationNavbarMobileNo} />
      <Route path="/application-confirm-code" component={ApplicationConfirmCode} overlayComponent={ApplicationNavbarConfirmCode} />
    </StackRoute>
  </Router>
);





// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => () => routes);
