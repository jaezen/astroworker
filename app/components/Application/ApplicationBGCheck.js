import React, {
  Component,
} from 'react';

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
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class ApplicationBGCheck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
        <Text style={styles.step}>
        Step 5 of 5
        </Text>
        <Text style={styles.question}>
          To work in this job, you need to{"\n"}
          pass a background check. To do{"\n"}
          this, Uber requires your SSN.{"\n\n"}
          To speed up your application, you{"\n"}
          have the <Text style={{fontWeight:'bold'}}>option</Text> to provide your{"\n"}
          SSN and get checked for FREE now.
        </Text>
        <Text style={styles.heading}>
        Social Security Number
        </Text>
        <TextInput
          placeholder="(XXX)-XXX-XXXX"
          style={styles.textEdit}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.dotpoints}>
        * Always private - never shared {"\n"}
        * Information is safe and secure
        </Text>
        <GetCheckedButton />
      </View>
    );
  }
}

class GetCheckedButton extends Component {

  render() {
    return (
      <Link to={'/application-bg-check-approved'} style={{ height: 70 }}>
        <View style={styles.GetCheckedButton}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white',fontWeight:'bold'}}
         >
          GET CHECKED
         </Text>
       </View>
     </Link>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  step: {
    alignSelf:'center',
    marginBottom:5,
  },
  question: {
    fontSize:16,
    padding: 10,
    color: '#333333',
    marginBottom: 5,
    alignSelf:'center',
  },
  heading: {
    fontWeight:'bold',
    fontSize:15,
    padding:5,
    marginTop: 3,
    alignSelf:'center',
  },
  dotpoints: {
    fontSize:15,
    padding: 10,
    color: '#333333',
    marginTop:5,
    marginBottom: 5,
    alignSelf:'center',
  },
  textEdit: {
    alignSelf:'center',
    textAlign:'center',
    height:40,
    width:250,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
    marginBottom: 5,
  },
  GetCheckedButton: {
    margin:10,
    marginTop:100,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});

export default withRouter(ApplicationBGCheck);
