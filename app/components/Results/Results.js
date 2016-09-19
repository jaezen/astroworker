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
  ListView,
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
         <ListView
          renderRow={this.props.rowName}
         />
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
});

export default Results;
