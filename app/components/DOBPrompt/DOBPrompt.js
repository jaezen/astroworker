import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  DatePickerIOS,
} from 'react-native';

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
        <Text>
          {this.props.dob.toString()}
        </Text>

        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: 'white',
          }}
        >
          <DatePickerIOS
            date={this.props.dob}
            mode="date"
            valueStyle = {styles.fieldValue}
            minimumDate={new Date('1/1/1950')}
            maximumDate={new Date('1/1/2000')}
            placeholder='Birthday'
            onDateChange={date => this.props.setDOB(date)}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: 70,
    backgroundColor: 'white',
  },
  question: {
    fontSize:20,
    textAlign: 'center',
    padding: 30,
    marginBottom: 3,
  },
  DatePickerField: {
    alignSelf:'center',
    // textAlign:'center',
    fontSize:20,
    color:'black',
    height:40,
    width:250,
    backgroundColor:'white',
    borderWidth:1,
  },
  fieldValue:{
    paddingTop:1,
    color: 'black',
  },
});

export default DOBPrompt;
