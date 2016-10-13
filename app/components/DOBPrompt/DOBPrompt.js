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

import {
  Form,
  DatePickerField,
} from 'react-native-form-generator';

class DOBPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

// export class FormView extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       formData:{}
//     }
//   }

  handleFormChange(formData){
    formData = {
    birthday: Date,
  }


    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Text style={{ alignSelf: 'center' }}>
          Step 2 of 4
        </Text>
        <Text style={styles.question}>
          What is your Date of Birth?
        </Text>

        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'yellow',
          }}
        >

          <Form>
            <DatePickerField style={styles.DatePickerField}
              ref='birthday'
              mode="date"
              minimumDate={new Date('1/1/1900')}
              maximumDate={new Date()}
              placeholder='Birthday'/>
          </Form>

        </View>
      </View>
    );
  }
}

//
// <TextInput
//   placeholder="MM/DD/YYYY"
//   style={styles.textEdit}
//   onChangeText={(text) => this.setState({text})}
//   value={this.state.text}
// />


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    // alignItems:'center',
    paddingTop: 70,
    backgroundColor: 'red',
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
  DatePickerField: {
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
    height:40,
    width:250,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },
});

export default DOBPrompt;
