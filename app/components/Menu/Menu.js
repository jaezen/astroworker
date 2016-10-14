import React, {
  Component,
} from 'react';

import {
  AppRegistry,
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

import Drawer from 'react-native-drawer'

var Menu = React.createClass({
  closeControlPanel: function(){
    this.refs.controlPanel.closeDrawer()
  },
  openControlPanel: function(){
    this.refs.controlPanel.openDrawer()
  },


  render: function() {
    return (
      <Drawer
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      >
        <Text>test</Text>
      </Drawer>
    )
  }
});



export default withRouter(Menu);
