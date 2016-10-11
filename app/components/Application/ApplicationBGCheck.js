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
          To speed up the application process,{"\n"}
          we can perform a background check on you.{"\n"}
          This is <Text style={{fontWeight:'bold'}}>optional</Text> and costs you a one{"\n"}
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
        <View style={styles.cardExpiryCVV}>
          <Text style={styles.cardExpiry}>
          Card Expiry Date
          </Text>
          <Text style={styles.cardCVV}>
          CVV
          </Text>
        </View>
        <View style={styles.cardExpiryCVVInputs}>
          <TextInput
          placeholder="MM/YY"
          style={styles.textEditCardExpiry}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
          <TextInput
          placeholder="XXX"
          style={styles.textEditCardCVV}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
        </View>
        <PayNowButton />
      </View>
    );
  }
}

class PayNowButton extends Component {

  render() {
    return (
      <Link to={'/application-bg-check-approved'} style={{ height: 70 }}>
        <View style={styles.PayNowButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white',fontWeight:'bold'}}
         >
          PAY NOW
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
  },
  cardExpiryCVV: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  cardExpiryCVVInputs: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:10,
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
  cardExpiry: {
    fontWeight:'bold',
    fontSize:15,
    marginLeft:15,
    marginTop: 3,
    alignItems:'flex-start',
  },
  cardCVV: {
    fontWeight:'bold',
    fontSize:15,
    marginTop: 3,
    alignItems:'flex-end',
    marginRight:15,
  },
  dotpoints: {
    fontSize:12,
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
  textEditCardExpiry: {
    textAlign:'center',
    height:40,
    width:100,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
    marginLeft:15,
  },
  textEditCardCVV: {
    textAlign:'center',
    height:40,
    width:80,
    backgroundColor:'white',
    borderColor:'gray',
    borderWidth:1,
    marginRight:15,
  },
  PayNowButtonContainer: {
    margin:10,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
});

export default withRouter(ApplicationBGCheck);
