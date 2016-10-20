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

import {
  Field,
  reduxForm
} from 'redux-form'



const SimpleForm = (props) => {
const { handleSubmit, pristine, reset, submitting } = props



class ApplicationName extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
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
        <form onSubmit={handleSubmit}>
        <View>
          <Field
            placeholder="First Name"
            style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
            </View>
        </form>
      </View>
    );
  }
}


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

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)

export default ApplicationName;
