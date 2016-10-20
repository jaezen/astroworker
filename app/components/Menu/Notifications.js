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

    state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };

    render() {
      return (
        <View>
          <Switch style={styles.switch}
            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn}
            label={this.props.rowName}/>
        </View>
      );
    }
  }

class Notifications extends Component {
constructor(props) {
 super(props);

}

render() {

 return (
   <View style={styles.container}>
    <View style={[styles.innerBlock]}>
      <Text style={styles.menuTitle}>NOTIFICATIONS</Text>
    </View>
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
innerBlock: {
  width: 375,
  height: 100,
  marginRight:20,
  backgroundColor:'#DFE0E4',
  padding: 20,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
menuTitle: {
  fontSize:16,
  fontWeight:'bold'
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
  justifyContent:'flex-end'
},
switchLabel: {
  fontSize:14,
  color:'black',
  fontWeight:'bold',
},
});

export default withRouter(Notifications);
