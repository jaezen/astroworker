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

const ApplicationNavbarBGCheckApproved  = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/application-confirm-code');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      rightButtonText="Done >"
      onRightButtonPress={handleRightButtonPress}
      title="Application"
    />
  );
};

export default withRouter(ApplicationNavbarBGCheckApproved);
