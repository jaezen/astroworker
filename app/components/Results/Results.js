import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
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
  ListView,
  View,
  TouchableOpacity,
} from '@shoutem/ui';

class Results extends Component {
   constructor(props) {
     super(props);

     const list = [
       {
         company: "Uber",
         url: "uber.com",
         type: "Drive",
       },
       {
         company: "Lyft",
         url: "lyft.com",
         type: "Drive",
       },
       {
         company: "Instacart",
         url: "instacart.com",
         type: "Shop",
       },
       {
         company: "Postmates",
         url: "postmates.com",
         type: "Shop",
       },
       {
         company: "Door Dash",
         url: "doordash.com",
         type: "Shop",
       },
     ];

     this.state = {
       listData: list,
     };
   }

   componentWillMount(){
     this.renderSectionHeader = this.renderSectionHeader.bind(this);
     this.renderRow = this.renderRow.bind(this);
   }

   renderRow (rowData, sectionID, rowID, highlightRow) {
     return (
       <TouchableOpacity onPress={()=>{}}>
         <Row styleName="small">
           <Icon name="laptop" />
           <View styleName="vertical">
             <Subtitle>{rowData.company}</Subtitle>
             <Text numberOfLines={1}>{rowData.url}</Text>
           </View>
           <Icon styleName="disclosure" name="right-arrow" />
         </Row>
       </TouchableOpacity>
     );
   }

   renderSectionHeader(type) {
      return (
        <Row styleName="small">
            <Icon name="web" />
            <Text>{type}</Text>
        </Row>
      );
    }

   render() {
     return (
       <ListView
          style={{style:1}}
          data={this.state.listData}
          renderRow={this.renderRow}
          getSectionId={(item)=>item.type}
          renderSectionHeader={this.renderSectionHeader}
        />
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
