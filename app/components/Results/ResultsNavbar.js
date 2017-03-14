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


  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Profile"
      onLeftButtonPress={handleLeftButtonPress}
    />
  );
};

export default withRouter(ResultsNavbar);
