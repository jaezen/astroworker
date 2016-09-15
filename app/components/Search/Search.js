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
} from 'react-native';

import CheckBox from 'react-native-checkbox';

class Search extends Component {
  //Initialize the hardcoded data
   constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds.cloneWithRows([
         'Drive people', 'Deliver things', 'Shop for people', 'Clean houses', 'Use your skills'

       ])
     };
   }
   render() {
     return (
       <View style={styles.container}>
         <ListView
           dataSource={this.state.dataSource}
           renderRow={(rowData) => <Text>{rowData}</Text>}
         />
         <CheckBox style={styles.drive}
          label='Drive people'
          checked={false}
          onChange={(checked) => console.log('I am checked', checked)}
         />
         <CheckBox style={styles.deliver}
          label='Deliver things'
          checked={false}
          onChange={(checked) => console.log('I am checked', checked)}
         />
         <CheckBox style={styles.shop}
          label='Shop for people'
          checked={true}
          onChange={(checked) => console.log('I am checked', checked)}
         />
         <CheckBox style={styles.clean}
          label='Clean houses'
          checked={true}
          onChange={(checked) => console.log('I am checked', checked)}
         />
         <CheckBox style={styles.skills}
          label='Use your skills'
          checked={true}
          onChange={(checked) => console.log('I am checked', checked)}
         />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection:'column',
     justifyContent: 'space-between',
     padding:40,
     backgroundColor:'white',
   },
   drive: {
     fontSize:30,
   }
// this.state.dataSource: {
//   justifyContent: 'space-between',
// //     backgroundColor:'yellow',
// //     fontSize:12,
// },
  // NoButtonContainer: {
  //   padding:10,
  //   height:45,
  //   width: 300,
  //   overflow:'hidden',
  //   borderRadius:4,
  //   backgroundColor: 'blue'
  // },
});

export default Search;
