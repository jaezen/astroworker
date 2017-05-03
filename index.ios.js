/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

import Routes from './Routes';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

// You should only do this once ever.
AppRegistry.registerComponent('AstroWorker', () => Root);
