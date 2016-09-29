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

const ServiceDetailsNavbar = (props) => {

  const handleLeftButtonPress = () => {
    props.router.push('/results');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      onLeftButtonPress={handleLeftButtonPress}
      title="Company Name"
    />
  );
};

export default withRouter(ServiceDetailsNavbar);
