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

  const handleLeftButtonPress = () => {
    props.router.push('/menu');
  }

  const handleRightButtonPress = () => {
    props.router.push('/search');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Profile"
      onLeftButtonPress={handleLeftButtonPress}
      rightButtonText="Search"
      onRightButtonPress={handleRightButtonPress}
      title="Results"
    />
  );
};

export default withRouter(ResultsNavbar);
