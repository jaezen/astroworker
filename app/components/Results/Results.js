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

import {
  Image,
  Tile,
  Title,
  Subtitle,
  Overlay,
} from '@shoutem/ui';


class ResultsRow extends Component {

  render(){

    return (
      <View
        style={styles.row}
      >
         <Text style={styles.rowText}>
           {this.props.rowName}
         </Text>
      </View>
    )
  }

}


class Results extends Component {
   constructor(props) {
     super(props);

   }

   render() {

     return (
       <ScrollView style={styles.container}>

        <ResultsRow rowName="Uber" rowImage="" />
        <ResultsRow rowName="Lyft" rowImage="" />
        <ResultsRow rowName="Instacart" rowImage="" />
        <ResultsRow rowName="Postmates" rowImage="" />
        <ResultsRow rowName="Door Dash" rowImage="" />
       </ScrollView>
     );
   }
   }


 const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection:'column',
   },
   row: {
    backgroundColor: 'cadetblue',
    height: 107,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
   },
   rowText: {
     color: '#FFFFFF',
   }
});

export default Results;
