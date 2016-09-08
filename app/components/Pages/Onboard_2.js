import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class Onboard_2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Type city name' };
}

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>

        <Text>Step 1 of 4</Text>
        <Text style={styles.question}>
          Which U.S. city do you want to work in?
        </Text>
        <TextInput
          style={styles.textEdit}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    marginTop: 70,
    backgroundColor: 'aqua',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    padding: 80,
    color: '#333333',
    marginBottom: 5,
  },
  textEdit: {
    alignSelf:'center',
    height:40,
    width:250,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },

});

// You only register your root component, So this is not eneded.
// AppRegistry.registerComponent('AstroWorker', () => AstroWorker);
