import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Onboard_2 extends Component {

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Text>AstroWorker</Text>
        <Text>Get on-demand work</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'aqua',
  },
});

// You only register your root component, So this is not eneded.
// AppRegistry.registerComponent('AstroWorker', () => AstroWorker);
