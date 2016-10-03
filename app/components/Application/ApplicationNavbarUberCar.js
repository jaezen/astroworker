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

const ApplicationNavbarUberCar = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/application-uber-driving-record');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      rightButtonText="Next >"
      onRightButtonPress={handleRightButtonPress}
      title="Application"
    />
  );
};

export default withRouter(ApplicationNavbarUberCar);
