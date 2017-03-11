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

//const buttonName= `Continue as ${props.workerType}}`;

const WorkerPromptNavbar = (props) => {

  const handleRightButtonPress = () => {
    props.router.push('/search');
  }

  if (props.workerType) {

    const buttonName = "Next >";

    return (
      <Header
        {...props}
        style={{ backgroundColor: '#EEEEEE' }}
        leftButtonText="< Back"
        rightButtonText={buttonName}
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

export default withRouter(WorkerPromptNavbar);
