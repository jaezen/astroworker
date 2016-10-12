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

const SSNPromptFailedNavbar  = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/application-submit-app');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      rightButtonText="Done >"
      onRightButtonPress={handleRightButtonPress}
      title="Set-up"
    />
  );
};

export default withRouter(SSNPromptFailedNavbar);
