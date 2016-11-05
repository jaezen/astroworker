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
    <View style={styles.workOpportunities}>
      <Text>New work opportunities</Text>
      <NotificationRow rowName="New work opportunities" rowImage="" />
    </View>
    <View style={styles.workChanges}>
      <Text>Work changes</Text>
      <NotificationRow rowName="Work changes" rowImage="" />
    </View>
  </View>
 );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:'column',
  backgroundColor:'white',
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
workOpportunities: {
  height: 50,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  paddingLeft:20,
},
workChanges: {
  height: 50,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  paddingLeft:20,
},
switch: {
  paddingLeft:20,
  marginRight:20,
},
});

export default withRouter(Notifications);
