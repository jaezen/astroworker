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

const CityPromptNavbar = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/dob-prompt');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      rightButtonText="Next >"
      onRightButtonPress={handleRightButtonPress}
      title="Set-up"
    />
  );
};

export default withRouter(CityPromptNavbar);
