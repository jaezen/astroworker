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

const ResultsNavbar = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/worker-prompt');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Profile"
      rightButtonText="Search"
      onRightButtonPress={handleRightButtonPress}
      title="Results"
    />
  );
};

export default withRouter(ResultsNavbar);
