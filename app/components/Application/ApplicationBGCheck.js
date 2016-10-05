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

class ApplicationBGCheck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <View style={styles.container}>
      <Text>
        Step 5 of 5
      </Text>
        <Text style={styles.question}>
          To speed up the application process,{"\n"}
          we can perform a background check on you.{"\n"}
          This is optional and costs you a one{"\n"}
          time fee of $25 for all applications.
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
        * Not a credit card check - credit not affected {"\n"}
        * Information is safe and secure
        </Text>
        <Text style={styles.heading}>
        Credit/Debit Card Number
        </Text>
        <TextInput
          placeholder="(XXX)-XXX-XXXX"
          style={styles.textEdit}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.headingRow}>
        Card Expiry Date
        </Text>
        <TextInput
          placeholder="MM/YY"
          style={styles.textEditShort}
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
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  question: {
    fontSize:16,
    padding: 10,
    color: '#333333',
    marginBottom: 5,
  },
  heading: {
    fontWeight:'bold',
    fontSize:15,
    padding:5,
    marginTop: 3,
  },
  headingRow: {
    fontWeight:'bold',
    fontSize:15,
    textAlign:'left',
    padding:5,
    marginTop: 3,
  },
  dotpoints: {
    fontSize:12,
    padding: 10,
    color: '#333333',
    marginTop:5,
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
    marginBottom: 5,
  },
  textEditShort: {
    alignSelf:'flex-start',
    textAlign:'center',
    height:40,
    width:80,
    marginLeft:60,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
  },

});

export default ApplicationBGCheck;
