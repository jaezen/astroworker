import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Slider,
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

// import Button from 'react-native-button';

class ServiceDetailsSecondary extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``

    return (
        <View style={styles.EntireContainer}>

          <ScrollView
            style={styles.MediaContainer}
            horizontal
          >
            <View style={[styles.innerBlock, {backgroundColor: 'powderblue'}]} />
            <View style={[styles.innerBlock, {backgroundColor: 'skyblue'}]} />
            <View style={[styles.innerBlock, {backgroundColor: 'steelblue'}]} />
          </ScrollView>

          <ScrollView
            style={styles.DetailsContainer}
          >
            <Text style={styles.heading}>
            Overview
            </Text>
            <Text style={styles.question}>
              What is it?
            </Text>
            <Text style={styles.answer}>
              Leases out new or used Toyota Prius cars
            </Text>
            <Text style={styles.question}>
              How it works
            </Text>
            <Text style={styles.answer}>
              Apply online, get approved then get a car
            </Text>
            <Text style={styles.question}>
              How much it costs
            </Text>
            <Text style={styles.answer}>
              $9 Membership fee + $195 Weekly payments
            </Text>
            <Text style={styles.question}>
              Need to know
            </Text>
            <Text style={styles.answer}>
              You pay for insurance and gas. Cancel any time.
            </Text>
          </ScrollView>

          <ApplyNowButton />

     </View>
    );
  }
}

class ApplyNowButton extends Component {

  render() {
    return (
      <Link to={'/application-uber-car'} style={{ height: 70 }}>
        <View style={styles.ApplyNowButtonContainer}>
         <Text
         style={{fontSize: 20, textAlign: 'center', color: 'white', fontWeight:'bold'}}
         >
          APPLY NOW
         </Text>
       </View>
     </Link>
    );
  }
}



const styles = StyleSheet.create({
  EntireContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MediaContainer: {
    height: 80,
    padding:20,
  },
  DetailsContainer: {
    flex: 1,
    flexDirection:'column',
    paddingTop: 10,
    paddingLeft:20,
    height:230,
  },
  innerBlock: {
    width: 282,
    height: 120,
    marginRight:20,
  },
  heading: {
    fontWeight:'bold',
    fontSize:15,
    padding:5,
    marginTop: 3,
  },
  question: {
    fontSize:12,
    fontWeight:'bold',
    color: '#333333',
    padding:5,
    marginTop: 8,
  },
  answer: {
    fontSize:12,
    color: '#333333',
    padding:5,
    marginTop: 3,
  },
  ApplyNowButtonContainer: {
    margin:10,
    padding:10,
    height:45,
    width: 300,
    borderRadius:4,
    backgroundColor: 'blue',
    alignSelf:'center',
  },
  slider: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

export default withRouter(ServiceDetailsSecondary);
