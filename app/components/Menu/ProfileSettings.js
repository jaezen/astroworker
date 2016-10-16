import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

import {
  Header,
  Link,
  nativeHistory,
  Route,
  Router,
  StackRoute,
  withRouter,
} from 'react-router-native';

import {
  Form,
  Separator,
  InputField,
} from 'react-native-form-generator';



class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

handleFormChange(formData){
  formData = {
  first_name:"",
  last_name:"",
  phone_number:"",
  email:"",
  city:"",
  SSN:""
}

this.setState({formData:formData})
this.props.onFormChange && this.props.onFormChange(formData);
}


  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.innerBlock]}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.image} />
            <Text style={styles.userName}>PROFILE SETTINGS</Text>
            <Text style={styles.edit}>EDIT</Text>
          </View>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <InputField style={styles.inputField}
            ref='first_name'
            label='First Name'
            placeholder='Bilbo'/>
          </Form>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <InputField style={styles.inputField}
            ref='last_name'
            label='Last Name'
            placeholder='Baggins'/>
          </Form>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <Separator />
            <InputField style={styles.inputField}
            ref='phone_number'
            label='Phone number'
            placeholder='+1(415)-425-6436'/>
          </Form>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <InputField style={styles.inputField}
            ref='email'
            label='Email'
            placeholder='bilbo@gmail.com'/>
          </Form>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <Separator />
            <InputField style={styles.inputField}
            ref='city'
            label='City'
            placeholder='San Francisco'/>
          </Form>
          <Form
            ref='ProfileSettingsForm'
            label="Personal Information">
            <Separator />
            <InputField style={styles.inputField}
            ref='ssn'
            label='SSN'
            placeholder='XXX-XX-XXXX'/>
          </Form>

        <SaveButton />
      </View>
    );
  }
}

class SaveButton extends Component {

  render() {
    return (
      <Link to={'/application-uber-car'} style={{ height: 70 }}>
        <View style={styles.SaveButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white', fontWeight:'bold'}}
         >
          SAVE
         </Text>
       </View>
     </Link>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFE0E4',
    flex: 1,
  },
  innerBlock: {
    width: 375,
    height: 100,
    marginRight:20,
    backgroundColor:'gray',
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  image: {
    height:50,
    width:50,
  },
  userName: {
    paddingLeft:20,
    fontSize:16,
  },
  edit: {
    justifyContent:'flex-end',
    fontSize:14,
    color:'blue',
  },
  inputField: {
    alignItems:'flex-end',
    backgroundColor:'white',
    borderColor:'gray',
  },
  SaveButtonContainer: {
    margin:10,
    marginTop:30,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',

  },
});

export default withRouter(ProfileSettings);
