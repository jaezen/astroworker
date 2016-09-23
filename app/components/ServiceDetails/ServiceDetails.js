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
          <Subtitle>Wilco Cover"Space Oddity"</Subtitle>
          <Caption>June {this.myFunctionThatDoesMath(1,2)}</Caption>
        </View>
        <Button styleName="right-icon"><Icon name="right-arrow" /></Button>
      </Row>
      </View>
    )
  }

}

class SectionHeader extends Component {

  render() {

    return (
      <Tile styleName="text-centric">
        <Title styleName="sm-gutter-bottom">Drive people</Title>
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
        <Divider styleName="line" />
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
    height: 70,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
   },
   rowText: {
     color: 'white',
     fontWeight:'bold',
     margin:15,
   },
});

export default Results;
