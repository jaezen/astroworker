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

import {
  createStore,
  combineReducers }
  from 'redux'

import {
  reducer as formReducer }
  from 'redux-form'


import { Examples } from '@shoutem/ui';

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    overflow: 'hidden',
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

import DOBPromptFailed from './app/components/DOBPrompt/DOBPromptFailed';
import DOBPromptFailedNavbar from './app/components/DOBPrompt/DOBPromptFailedNavbar';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import SSNPrompt from './app/components/SSNPrompt/SSNPrompt';
import SSNPromptNavbar from './app/components/SSNPrompt/SSNPromptNavbar';

import SSNPromptFailed from './app/components/SSNPrompt/SSNPromptFailed';
import SSNPromptFailedNavbar from './app/components/SSNPrompt/SSNPromptFailedNavbar';

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

import ServiceDetailsSecondary from './app/components/ServiceDetails/ServiceDetailsSecondary';
import ServiceDetailsSecondaryNavbar from './app/components/ServiceDetails/ServiceDetailsSecondaryNavbar';

import ApplicationUberCar from './app/components/Application/ApplicationUberCar';
import ApplicationNavbarUberCar from './app/components/Application/ApplicationNavbarUberCar';

import ApplicationUberDrivingRecord from './app/components/Application/ApplicationUberDrivingRecord';
import ApplicationNavbarUberDrivingRecord from './app/components/Application/ApplicationNavbarUberDrivingRecord';

import ApplicationUberDrivingRecordFailed from './app/components/Application/ApplicationUberDrivingRecordFailed';
import ApplicationNavbarUberDrivingRecordFailed from './app/components/Application/ApplicationNavbarUberDrivingRecordFailed';

import ApplicationName from './app/components/Application/ApplicationName';
import ApplicationNavbarName from './app/components/Application/ApplicationNavbarName';

import ApplicationMobileNo from './app/components/Application/ApplicationMobileNo';
import ApplicationNavbarMobileNo from './app/components/Application/ApplicationNavbarMobileNo';

import ApplicationConfirmCode from './app/components/Application/ApplicationConfirmCode';
import ApplicationNavbarConfirmCode from './app/components/Application/ApplicationNavbarConfirmCode';

import ApplicationBGCheck from './app/components/Application/ApplicationBGCheck';
import ApplicationNavbarBGCheck from './app/components/Application/ApplicationNavbarBGCheck';

import ApplicationBGCheckApproved from './app/components/Application/ApplicationBGCheckApproved';
import ApplicationNavbarBGCheckApproved from './app/components/Application/ApplicationNavbarBGCheckApproved';

import ApplicationSubmitApp from './app/components/Application/ApplicationSubmitApp';
import ApplicationNavbarSubmitApp from './app/components/Application/ApplicationNavbarSubmitApp';

import ApplicationKeepApplying from './app/components/Application/ApplicationKeepApplying';
import ApplicationNavbarKeepApplying from './app/components/Application/ApplicationNavbarKeepApplying';

import LoginMobileNo from './app/components/Login/LoginMobileNo';
import LoginNavbarMobileNo from './app/components/Login/LoginNavbarMobileNo';

import LoginConfirmCode from './app/components/Login/LoginConfirmCode';
import LoginNavbarConfirmCode from './app/components/Login/LoginNavbarConfirmCode';

import SideMenu from 'react-native-side-menu'
import Menu from './app/components/Menu/Menu';
import ProfileSettings from './app/components/Menu/ProfileSettings';
import About from './app/components/Menu/About';
import Notifications from './app/components/Menu/Notifications';


const Master = (props) => (
  <SideMenu menu={<Menu />}>
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
  </SideMenu>
);

const routes = (
  <Router addressBar history={nativeHistory}>
    <StackRoute path="master" component={Master}>
      <Route path="/" component={Welcome}/>
      <Route path="/city-prompt" component={CityPrompt} overlayComponent={CityPromptNavbar} />
      <Route path="/dob-prompt" component={DOBPrompt} overlayComponent={DOBPromptNavbar} />
      <Route path="/dob-prompt-failed" component={DOBPromptFailed} overlayComponent={DOBPromptFailedNavbar} />
      <Route path="/ssn-prompt" component={SSNPrompt} overlayComponent={SSNPromptNavbar} />
      <Route path="/ssn-prompt-failed" component={SSNPromptFailed} overlayComponent={SSNPromptFailedNavbar} />
      <Route path="/worker-prompt" component={WorkerPrompt} overlayComponent={WorkerPromptNavbar} />
      <Route path="/search" component={Search} overlayComponent={SearchNavbar} />
      <Route path="/results" component={Results} overlayComponent={ResultsNavbar} />
      <Route path="/service-details" component={ServiceDetails} overlayComponent={ServiceDetailsNavbar} />
      <Route path="/service-details-secondary" component={ServiceDetailsSecondary} overlayComponent={ServiceDetailsSecondaryNavbar} />
      <Route path="/application-uber-car" component={ApplicationUberCar} overlayComponent={ApplicationNavbarUberCar} />
      <Route path="/application-uber-driving-record" component={ApplicationUberDrivingRecord} overlayComponent={ApplicationNavbarUberDrivingRecord} />
      <Route path="/application-uber-driving-record-failed" component={ApplicationUberDrivingRecordFailed} overlayComponent={ApplicationNavbarUberDrivingRecordFailed} />
      <Route path="/application-name" component={ApplicationName} overlayComponent={ApplicationNavbarName} />
      <Route path="/application-mobile-no" component={ApplicationMobileNo} overlayComponent={ApplicationNavbarMobileNo} />
      <Route path="/application-confirm-code" component={ApplicationConfirmCode} overlayComponent={ApplicationNavbarConfirmCode} />
      <Route path="/application-bg-check" component={ApplicationBGCheck} overlayComponent={ApplicationNavbarBGCheck} />
      <Route path="/application-bg-check-approved" component={ApplicationBGCheckApproved} overlayComponent={ApplicationNavbarBGCheckApproved} />
      <Route path="/application-submit-app" component={ApplicationSubmitApp} overlayComponent={ApplicationNavbarSubmitApp} />
      <Route path="/application-keep-applying" component={ApplicationKeepApplying} overlayComponent={ApplicationNavbarKeepApplying} />
      <Route path="/login-mobile-no" component={LoginMobileNo} overlayComponent={LoginNavbarMobileNo} />
      <Route path="/login-confirm-code" component={LoginConfirmCode} overlayComponent={LoginNavbarConfirmCode} />
      <Route path="/profile-settings" component={ProfileSettings}/>
      <Route path="/about" component={About}/>
      <Route path="/notifications" component={Notifications}/>
    </StackRoute>
  </Router>
);

// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => () => routes);
