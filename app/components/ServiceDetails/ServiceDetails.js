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

import Button from 'react-native-button';

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
        <View style={styles.EntireContainer}>
          <ScrollView style={styles.MediaContainer} horizontal={true}>
            <View style={{width: 282, height: 120, backgroundColor: 'powderblue'}} />
            <View style={{width: 282, height: 120, backgroundColor: 'skyblue'}} />
            <View style={{width: 282, height: 120, backgroundColor: 'steelblue'}} />
          </ScrollView>
          <ScrollView style={styles.DetailsContainer}>
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
            <HoursSlider />
            <Text style={styles.question}>
              Estimated profit per week
            </Text>
            <Text style={styles.answer}>
              After fees and taxes but before expenses
            </Text>
            <ProfitSlider />
            <Text style={styles.answer}>
              To earn $$$ profit per week, you have to work about XX hours per week, giving you $$ per hour before expenses
            </Text>
          </ScrollView>
          <ApplyNowButton />
       </View>
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

class HoursSlider extends Component {
  static defaultProps = {
      value:50,
    };

    state = {
      value: this.props.value,
    };

    render() {
      return (
        <View style={styles.slider}>
          <Text style={styles.text} >
            {this.state.value && +this.state.value.toFixed(3)}
          </Text>
          <Slider
            value={50}
            step={1}
            minimumValue={1}
            maximumValue={100}
            onValueChange={(value) => this.setState({value: value})} />
        </View>
      );
    }
  }

  class ProfitSlider extends Component {
    static defaultProps = {
        value:1500,
      };

      state = {
        value: this.props.value,
      };

      render() {
        return (
          <View style={styles.slider}>
            <Text style={styles.text} >
              {this.state.value && +this.state.value.toFixed(3)}
            </Text>
            <Slider
              value={1500}
              step={10}
              minimumValue={10}
              maximumValue={3000}
              onValueChange={(value) => this.setState({value: value})} />
          </View>
        );
      }
    }



const styles = StyleSheet.create({
  EntireContainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  MediaContainer: {
    flex:1,
    height:10,
    padding:20,
  },
  DetailsContainer: {
    flexDirection:'column',
    paddingTop: 10,
    paddingLeft:20,
    height:230,
    backgroundColor: 'pink',
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
    alignSelf:'center',
    bottom:10,
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

export default ServiceDetails;
