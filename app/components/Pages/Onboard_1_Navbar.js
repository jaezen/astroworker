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

const Onboard_1_Navbar = (props) => {
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      title="Astro Worker"
    />
  );
};

export default Onboard_1_Navbar;
