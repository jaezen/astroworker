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
  Separator,
  InputField,
} from 'react-native-form-generator';

class ApplicationName extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

handleFormChange(formData){
  formData = {
  first_name:"",
  last_name:"",
}

this.setState({formData:formData})
this.props.onFormChange && this.props.onFormChange(formData);
}


  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text style={{ alignSelf: 'center' }}>
        Step 3 of 5
      </Text>
        <Text style={styles.question}>
          What is your name?
        </Text>
      <Form
        ref='registrationForm'
        label="Personal Information">
        <Separator />
        <InputField style={styles.inputField}
        ref='first_name'
        label='First Name'
        placeholder='First Name'
        helpText={((self)=>{

         if(Object.keys(self.refs).length !== 0){
           if(!self.refs.registrationForm.refs.first_name.valid){
             return self.refs.registrationForm.refs.first_name.validationErrors.join("\n");
           }

         }
         // if(!!(self.refs && self.refs.first_name.valid)){
         // }
       })(this)}
       validationFunction={[(value)=>{
         /*
         you can have multiple validators in a single function or an array of functions
          */

         if(value == '') return "Required";
         //Initial state is null/undefined
         if(!value) return true;
         // Check if First Name Contains Numbers
         var matches = value.match(/\d+/g);
         if (matches != null) {
             return "First Name can't contain numbers";
         }

         return true;
       },(value)=>{
            ///Initial state is null/undefined
            if(!value) return true;
            if(value.indexOf('4')!=-1){
              return "I can't stand number 4";
            }
            return true;
          }]}
          />
      <InputField ref='last_name' placeholder='Last Name'/>
      </Form>
      </View>
    );
  }
}

 // <InputField ref='last_name' placeholder='Last Name'/>

// <TextInput
//   placeholder="First Name   Last Name"
//   style={styles.textEdit}
//   onChangeText={(text) => this.setState({text})}
//   value={this.state.text}
// />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: 70,
    backgroundColor: 'yellow',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    padding: 50,
    color: '#333333',
    marginBottom: 2,
  },
  inputField: {
    alignSelf:'center',
    textAlign:'center',
    // height:40,
    // width:250,
    backgroundColor:'white',
    borderColor:'gray',
  },

});

export default ApplicationName;
