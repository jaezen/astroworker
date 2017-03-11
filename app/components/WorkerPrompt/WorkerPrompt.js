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

import Button from 'react-native-button';

class WorkerPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    // render() cannot return an array of components, so we need to wrap them in a `<View />``
    const handleEmployeeButtonPress = () => {
      // console.log('Employee Pressed');
      // alert('Employee Pressed');
      this.props.setWorkerType('employee');
    };

    const handleContractorButtonPress = () => {
      // console.log('Contractor Pressed');
      // alert('Contractor Pressed');
      this.props.setWorkerType('contractor');
    };

    const handleEitherButtonPress = () => {
      // console.log('Either Pressed');
      // alert('Either Pressed');
      this.props.setWorkerType('either');
    };

    return (
      <View style={styles.container}>
      <Text>
        Step 4 of 4 {this.props.workerType || 'Not selected'}
      </Text>
        <Text style={styles.question}>
          What kind of worker do you want to be?
        </Text>

        <Button
         containerStyle={styles.EmployeeButtonContainer}
         onPress={handleEmployeeButtonPress}
        >
          <View>
          <Text style={styles.ButtonHeading}>EMPLOYEE</Text>
          <Text style={styles.ButtonSubHeading}>You get benefits, but you work for the company</Text>
          </View>
        </Button>

        <Button
         containerStyle={styles.ContractorButtonContainer}
         onPress={handleContractorButtonPress}
        >
          <View>
          <Text style={styles.ButtonHeading}>CONTRACTOR</Text>
          <Text style={styles.ButtonSubHeading}>You do not get benefits, but you are the boss!</Text>
          </View>
        </Button>

        <Button
         containerStyle={styles.EitherButtonContainer}
         onPress={handleEitherButtonPress}
        >
          <View>
          <Text style={styles.ButtonHeading}>EITHER</Text>
          <Text style={styles.ButtonSubHeading}>You do not really mind what kind of worker you are</Text>
          </View>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  question: {
    fontSize:18,
    textAlign: 'center',
    padding: 18,
    color: '#333333',
  },
  EmployeeButtonContainer: {
    flexDirection:'column',
    padding: 5,
    height: 150,
    width: 300,
    overflow: 'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  ContractorButtonContainer: {
    padding:10,
    height:150,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  EitherButtonContainer: {
    padding:10,
    height:150,
    width: 300,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  ButtonHeading: {
    flex:1,
    paddingTop:30,
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  ButtonSubHeading: {
    flex:1,
    padding:10,
    textAlign: 'center',
    fontSize:16,
    color:'white',
  },
});

export default WorkerPrompt;
