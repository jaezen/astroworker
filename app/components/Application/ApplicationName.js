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

class ApplicationName extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text>
        Step 3 of 5
      </Text>
        <Text style={styles.question}>
          What is your name?
        </Text>
        <TextInput
          placeholder="First Name   Last Name"
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
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    padding: 50,
    color: '#333333',
    marginBottom: 5,
  },
  textEdit: {
    alignSelf:'center',
    textAlign:'center',
    height:40,
    width:250,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },

});

export default ApplicationName;
