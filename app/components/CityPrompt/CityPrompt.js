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

class CityPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text>
        Step 1 of 4
      </Text>
        <Text style={styles.question}>
          Which U.S. city do you want to work in?
        </Text>
        <TextInput
          placeholder="Type city name"
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
    height:40,
    width:250,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },

});

export default CityPrompt;
