import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';
//import body style
import ReconcileStyle from '../../assets/styles/ReconcileStyle';
//import reconcile items
import ReconcileItems from '../components/ReconcileItems';

export default class ScrollabelItemContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        itemLabels : this.props.itemLabels,
        isLoaded: false,
        sortIndex: 0,
      };
  }

  render() {
    return (
        <ScrollView horizontal={true}  style={ReconcileStyle.scrollr}>
            <View  style={ReconcileStyle.reconcilelist1_bodycontainerr} >
                <View  style={ReconcileStyle.listlabelcontainerr}>
                    
                    {this.state.itemLabels.map((item,index)=>{
                        return  <TouchableOpacity 
                        onPress={()=>{
                          this.props.onPress(index)} } 
                        key={index}  style={ReconcileStyle.labelTopContainerR}>
                                  <View  style={ReconcileStyle.labelContainerR}>
                                    <Text  style={ReconcileStyle.labelTextStyleR}>{item}</Text>
                                    <ReactImage  source={require('../../assets/icons/filter_list_white.png')} style={ReconcileStyle.iconStyle} />
                                  </View>
                                </TouchableOpacity>
                    })}

                </View>

                {/** reconcile list item value container begins here */}
                
                <ScrollView horizontal ={false} style={ReconcileStyle.scroll2r}>
                     <ReconcileItems listButton={this.props.listButton}
                                     sortIndex={this.props.sortIndex}
                                     data={this.props.data}
                                     dataKeys={this.props.dataKeys}
                                     itemlen={this.props.itemlen}
                                     listButtonPressed={this.props.listButtonPressed}/>
                </ScrollView>
                {/** reconcile list item value container ends here */}
                
            </View>
            {/** RECONCILE list view ends */}
          
        </ScrollView>
    );
  }
}
