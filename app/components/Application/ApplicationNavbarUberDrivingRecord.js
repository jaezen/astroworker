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

const ApplicationNavbarUberDrivingRecord = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/application-name');
  }

  if (props.hasDrivingRecord) {

    const buttonName = "Next>";


  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      //rightButtonText={buttonName}
      onRightButtonPress={handleRightButtonPress}
      title="Set-up"
    />
  );
} else {
  return (
    <Header
      {...props}
      style={{ backgroundColor: '#EEEEEE' }}
      leftButtonText="< Back"
      onRightButtonPress={handleRightButtonPress}
      title="Set-up"
    />
  );
}
};

export default withRouter(ApplicationNavbarUberDrivingRecord);
