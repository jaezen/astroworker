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
    props.router.push('/worker-prompt');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Back"
      onRightButtonPress={handleLeftButtonPress}
      title="Company Name"
    />
  );
};

export default withRouter(ServiceDetailsNavbar);
