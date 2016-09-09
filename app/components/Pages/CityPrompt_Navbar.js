import React from 'react';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

const Onboard_2_Navbar = (props) => {
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      rightButtonText="Next >"
      title="Set-up"
    />
  );
};

export default Onboard_2_Navbar;
