import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Bullets, InstagramLoader } from 'react-native-easy-content-loader';
//import body style
import ReconcileStyle from '../assets/styles/ReconcileStyle';
//import reconcile items
import ReconcileItems from '../components/ReconcileItems';

export default class ScrollabelItemContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
        itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
        isLoaded: false
      };
  }

  render() {
    return (
        <ScrollView horizontal={true}  style={ReconcileStyle.scrollr}>
            <View  style={ReconcileStyle.reconcilelist1_bodycontainerr} >
                <View  style={ReconcileStyle.listlabelcontainerr}>
                    
                    {this.state.itemLabels.map((item,index)=>{
                        return  <View  key={index}  style={ReconcileStyle.labelTopContainerR}>
                                  <View  style={ReconcileStyle.labelContainerR}>
                                    <Text  style={ReconcileStyle.labelTextStyleR}>{item}</Text>
                                  </View>
                                </View>
                    })}

                </View>

                {/** reconcile list item value container begins here */}
                
                <ScrollView horizontal ={false} style={ReconcileStyle.scroll2r}>
                     <ReconcileItems listButton={this.props.listButton}
                                     data={this.props.data}
                                     dataKeys={this.props.dataKeys}
                                     listButtonPressed={this.props.listButtonPressed}/>
                </ScrollView>
                {/** reconcile list item value container ends here */}
                
            </View>
            {/** RECONCILE list view ends */}
          
        </ScrollView>
    );
  }
}
