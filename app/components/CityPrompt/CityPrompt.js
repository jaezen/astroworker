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

class CityPrompt extends React.Component {
  static title = '<Picker>';
  static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';


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
        <Picker
          style={styles.picker}
          selectedValue={this.props.city}
          onValueChange={(city) => this.props.setCity(city)}
        >
          <Item label="San Francisco" value="San Francisco" />
          <Item label="Los Angeles" value="Los Angeles" />
          <Item label="New York" value="New York" />
        </Picker>
      </View>
    );
  }
}

changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DROPDOWN
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    paddingTop: 70,
    backgroundColor: 'white',
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
