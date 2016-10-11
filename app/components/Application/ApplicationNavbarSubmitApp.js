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

const ApplicationNavbarSubmitApp  = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/application-confirm-code');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Profile"
      rightButtonText="Skip >"
      onRightButtonPress={handleRightButtonPress}
      title="Application"
    />
  );
};

export default withRouter(ApplicationNavbarSubmitApp);
