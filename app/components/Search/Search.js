    import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

import CheckBox from 'react-native-checkbox';


//create child component
class SearchRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    }


  }


  render(){

    const handleChange = (newValue) => {
      console.log('I am checked', newValue)

      // alert(checked)

      this.setState({
        isChecked: newValue
      })
    }


    return (
      <View
        style={styles.row}
      >
         <CheckBox
          containerStyle={styles.checkbox}
          labelStyle={styles.checkBoxLabel}
          checkboxStyle ={styles.checkboxStyle}
          label={this.props.rowName}
          checked={this.state.isChecked}
          onChange={handleChange}
         />
      </View>
    )
  }

}


class Search extends Component {
   constructor(props) {
     super(props);

   }

   render() {

     return (
       <ScrollView style={styles.container}>

        <SearchRow rowName="Drive people" rowImage="" />
        <SearchRow rowName="Deliver things" rowImage="" />
        <SearchRow rowName="Shop for people" rowImage="" />
        <SearchRow rowName="Clean houses" rowImage="" />
        <SearchRow rowName="Use your skills" rowImage="" />
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
    backgroundColor: 'gray',
    height: 107,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    justifyContent: 'center',
   },
  checkboxStyle: {
    margin:15,
  },
  checkBoxLabel: {
    fontSize:14,
    color:'white',
    fontWeight:'bold',
    //padding:16,
   },
});

export default Search;
