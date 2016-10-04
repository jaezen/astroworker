import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
} from 'react-native';

class ApplicationConfirmCode extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text>
        Step 4 of 5
      </Text>
        <Text style={styles.question}>
          Enter your 4-digit code{"\n"}
          It was sent to you by a SMS message
        </Text>
        <TextInput
          placeholder="XXXX"
          style={styles.textEdit}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{color:'blue'}}
         onPress={() => Linking.openURL('http://google.com')}>
        RESEND CODE</Text>
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
    padding: 40,
    color: '#333333',
    marginBottom: 5,
  },
  textEdit: {
    alignSelf:'center',
    textAlign:'center',
    height:40,
    width:100,
    marginBottom: 20,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },

});

export default ApplicationConfirmCode;
