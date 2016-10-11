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

const LoginNavbarConfirmCode  = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/search');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      rightButtonText="Next >"
      onRightButtonPress={handleRightButtonPress}
      title="Login"
    />
  );
};

export default withRouter(LoginNavbarConfirmCode);
