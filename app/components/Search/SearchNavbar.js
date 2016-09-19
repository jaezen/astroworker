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

const SearchNavbar = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/results');
  }

  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="Profile"
      rightButtonText="Find"
      onRightButtonPress={handleRightButtonPress}
      title="Pick Options"
    />
  );
};

export default withRouter(SearchNavbar);
