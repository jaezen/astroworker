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
  WebView,
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

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      profitSliderValue: 1500,
      hourSliderValue: 50,
      profitPerHourValue: 1000,
    };

    this.handleProfitSliderValueChange = this.handleProfitSliderValueChange.bind(this);
    this.handleHourSliderValueChange = this.handleHourSliderValueChange.bind(this);
    this.recalculate = this.recalculate.bind(this);
  }

  handleProfitSliderValueChange(value) {
    this.setState({profitSliderValue: value})
    this.setState({hourSliderValue: value / 25});

    this.recalculate();

  }

  handleHourSliderValueChange(value) {
    this.setState({hourSliderValue: value});
    this.setState({profitSliderValue: value * 25});

    this.recalculate();
  }

  recalculate() {

    let val = this.state.profitSliderValue / this.state.hourSliderValue;

    val = Math.ceil(val);

    this.setState({profitPerHourValue: val });
  }


  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    return (
        <View style={styles.EntireContainer}>

          <ScrollView
            style={styles.MediaContainer}
            horizontal
          >

            <WebView
                style={styles.innerBlock}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/10eiFrRqWlI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen="false"'}}
            />
            <WebView
                style={styles.innerBlock}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/3HwWXlmNpL4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen="false"'}}
            />
            <WebView
                style={styles.innerBlock}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/76q7PDnxWuE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen="false"'}}
            />
            <View style={[styles.innerBlock, {backgroundColor: 'powderblue'}]} />
          </ScrollView>

          <ScrollView
            style={styles.DetailsContainer}
          >

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
            <HoursSlider value={this.state.hourSliderValue} onValueChange={this.handleHourSliderValueChange} />
            <Text style={styles.question}>
              Estimated profit per week
            </Text>
            <Text style={styles.answer}>
              After fees and taxes but before expenses
            </Text>
            <ProfitSlider value={this.state.profitSliderValue} onValueChange={this.handleProfitSliderValueChange} />
            <Text style={styles.answer}>
              To earn ${this.state.profitSliderValue} profit per week, you have to work about {this.state.hourSliderValue} hours per week, giving you ${this.state.profitPerHourValue} per hour before expenses
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


class HoursSlider extends Component {

    render() {
      return (
        <View style={styles.slider}>
          <Text style={styles.text} >
            {this.props.value} Hours
          </Text>
          <Slider
            value={this.props.value}
            step={1}
            minimumValue={1}
            maximumValue={100}
            onValueChange={this.props.onValueChange} />
        </View>
      );
    }
  }

  class ProfitSlider extends Component {
      render() {
        return (
          <View style={styles.slider}>
            <Text style={styles.text} >
              ${this.props.value}
            </Text>
            <Slider
              value={this.props.value}
              step={10}
              minimumValue={10}
              maximumValue={3000}
              onValueChange={this.props.onValueChange} />
          </View>
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

export default withRouter(ServiceDetails);
