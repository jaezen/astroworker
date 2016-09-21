import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

import {
  Image,
  Tile,
  Title,
  Overlay,
  Row,
  Icon,
  Subtitle,
  Text,
  Button,
  Divider,
  Caption,
} from '@shoutem/ui';


class ResultsRow extends Component {

  myFunctionThatDoesMath(a, b){
    return a + b;
  }

  render(){

    doSum(a, b){
      return a + b;
    }



    return (
      <View
        style={styles.row}
      >
      <Row>
        <Image
          styleName="small rounded-corners"
          source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
        <View styleName="vertical stretch space-between">
          <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
          <Caption>June {doSum(1,2)}  ·  20:00</Caption>
        </View>
        <Button styleName="right-icon"><Icon name="add-event" /></Button>
      </Row>
      </View>
    )
  }

}

class SectionHeader extends Component {

  render() {

    return (
      <Tile styleName="text-centric">
        <Title styleName="sm-gutter-bottom">Drive</Title>
      </Tile>
    );
  }

}


class Results extends Component {
   constructor(props) {
     super(props);

   }

   render() {

     return (
       <ScrollView style={styles.container}>
        <SectionHeader />
        <ResultsRow rowName="Uber" rowImage="" />
        <ResultsRow rowName="Lyft" rowImage="" />
        <Divider styleName="section-header" />
        <SectionHeader />
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
     color: 'white',
     fontWeight:'bold',
     margin:15,
   },
   header: {
     backgroundColor: 'red',
     height: 40,
   },
   headerText: {
     color: "#FFFFFF",
     fontSize: 20,
   }
});

export default Results;
