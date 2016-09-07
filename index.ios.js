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
} from 'react-native';

// Renamed AstroWorker component to Onboard_1 and moved it to `Pages`. `index` should only be
// responsible for registering the component with the `AppRegistry`.
import Onboard_1 from './app/components/Pages/Onboard_1.js';

// `./` = root of your project. Onboard_2.js is inside a folder called `Pages`
import Onboard_2 from './app/components/Pages/Onboard_2.js';

const AstroWorker = () => (
  <View style={{flex:1}}>
    {
    /*
      If you want tos style your StatusBar instead of hiding it, see my answer to this question on SO:
      http://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native/39300715#39300715
    */
    }
    <StatusBar hidden={false} />

    {
    /*
      To show Onboard_2 instead, just change this to `= Onboard_2`, etc (until we setup a router to do this)
    */
    }
    <Onboard_2 />

  </View>
);




// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => AstroWorker);
