/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './Routes';
import reducer from './reducer';

const store = createStore(reducer);

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => Root);
