import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View,
} from 'react-native';

const Item = Picker.Item;

// class CityPrompt extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: '' };
//   }

class CityPrompt extends React.Component {
  static title = '<Picker>';
  static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
      selected1: 'key1',
      selected2: 'key1',
      selected3: 'key1',
      color: 'red',
      mode: Picker.MODE_DIALOG,
    };

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text>
        Step 1 of 4 {this.props.city}
      </Text>
        <Text style={styles.question}>
          Which U.S. city do you want to work in?
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.selected1}
          onValueChange={(select) => this.setState({selected1:select})}>
          <Item label="San Francisco" value="key0" />
          <Item label="Los Angeles" value="key1" />
          <Item label="New York" value="key2" />
        </Picker>
      </View>
    );
  }
}

changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DROPDOWN
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    paddingTop: 70,
    backgroundColor: 'red',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    paddingTop: 50,
    color: '#333333',
    //marginBottom: 5,
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
  picker: {
    width: 500,
  },
});

export default CityPrompt;
