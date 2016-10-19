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
  Switch,
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

import CheckBox from 'react-native-checkbox';


//create child component
class NotificationRow extends Component {

constructor(props) {
super(props);

this.state = {
  switchIsOn: true,
}
}


render(){

const onValueChange = (value) => {
  console.log('I am ON', value)

  // alert(checked)

  this.setState({
    trueSwitchIsOn: value,
    value:this.state.switchIsOn
  })
}


return (
  <View
    style={styles.row}
  >
     <Switch
      containerStyle={styles.switch}
      labelStyle={styles.switchLabel}
      label={this.props.rowName}
      value={true}
      onValueChange={onValueChange}
     />
  </View>
    )
  }
}


class Notifications extends Component {
constructor(props) {
 super(props);

}

render() {

 return (
   <View style={styles.container}>

    <NotificationRow rowName="New work opportunities" rowImage="" />
    <NotificationRow rowName="Work changes" rowImage="" />
   </View>
 );
}
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:'column',
},
row: {
  backgroundColor: 'white',
  height: 107,
  borderBottomColor: 'white',
  borderBottomWidth: 1,
  justifyContent: 'center',
},
switch: {
  paddingLeft:20,
},
switchLabel: {
  fontSize:14,
  color:'black',
  fontWeight:'bold',
},
});

export default withRouter(Notifications);
