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
} from 'react-native';

import Button from 'react-native-button';

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
      <ScrollView style={styles.container}>
        <MediaScroll />
        <Text style={styles.heading}>
        Overview
        </Text>
        <Text style={styles.question}>
          What you have to do
        </Text>
        <Text style={styles.answer}>
          Drive 1-4 people in your car to their desired location
        </Text>
        <Text style={styles.question}>
          What you need
        </Text>
        <Text style={styles.answer}>
          A 4-door car less than 10 years old in good condition
        </Text>
        <Text style={styles.question}>
          How much you get
        </Text>
        <Text style={styles.answer}>
          $19-$30 per hour
        </Text>
        <Text style={styles.question}>
          How much they take
        </Text>
        <Text style={styles.answer}>
          25% of the money you make
        </Text>
        <Text style={styles.heading}>
        Check Payoff
        </Text>
        <Text style={styles.question}>
          Estimated number of hours worked per week
        </Text>
        <Text style={styles.answer}>
          Put slider here
        </Text>
        <Text style={styles.question}>
          Estimated profit per week
        </Text>
        <Text style={styles.answer}>
          After fees and taxes but before expenses
        </Text>
        <Text style={styles.answer}>
          Put slider here
        </Text>
        <Text style={styles.answer}>
          To earn $$$ profit per week, we estimate you have to work about XX hours per week, giving you $$ per hour before expenses
        </Text>
        <ApplyNowButton />
      </ScrollView>
    );
  }
}

//this button is meant to stick to the bottom center and not move at all
class ApplyNowButton extends Component {

  render() {
    const handleApplyNowButtonPress = () => {
      console.log('Apply Now Pressed');
      alert('Apply Now Pressed');
    };
    return (
      <View style={styles.ApplyNowButtonContainer}>
       <Button
       style={{fontSize: 20, color: 'white'}}
       onPress={handleApplyNowButtonPress}
       >
       APPLY NOW
       </Button>
      </View>
    );
  }
}

//this is meant to be the horizontal scroll view at the top that contains pictures and videos - aim to make it a separate view
class MediaScroll extends Component {

  render() {
    return (
      <View style={styles.MediaContainer}>
        <View style={{width: 100, height: 120, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 120, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 120, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: 150,
    paddingLeft:20,
    backgroundColor: '#fff',
    position:'relative',
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
    padding:10,
    height:45,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    alignItems:'center',
    position:'absolute',
    bottom:8,
  },
  MediaContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
});

export default ServiceDetails;
