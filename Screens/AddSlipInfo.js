import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//components import
import HeaderSection from '../components/HeaderSection';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
import FullInputContainer from '../components/FullInputContainer';
import HalfInputContainer from '../components/HalfInputContainer';
import TwinButtonContainer from '../components/TwinButtonContainer';
import LabelContainer from '../components/LabelContainer';

export default class AddSlipInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }
  render() {
    
    return (

      <View data-layer="cd69ac0c-29fb-45f9-bed1-67181bfa3f2b" style={styles.singlereconcile}>
            {/** Header Section */}
            
          <HeaderSection Title={"Add Slip Details"}/>
          <ScrollView tyle={styles.bodycontainer}>
             <LabelContainer/>
             <FullInputContainer/> 
             <HalfInputContainer/>
             <FullInputContainer/>
             <LabelContainer/>
             <FullInputContainer/>
             <FullInputContainer/>
             <LabelContainer/>
             <FullInputContainer/>
             <FullInputContainer/>
             <FullInputContainer/>
             <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Cancel"/>
                <TwinButtonContainer label="Save"/>
             </View>
          </ScrollView>
      </View>
      );
  }
}

function hrp(value){
  return value*100 / 736;
}

function wrp(value){
  return value*100 / 414;
}

const styles = StyleSheet.create({
  "singlereconcile": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "flex":1
  },
  "bodycontainer": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop":hp(hrp(10)),
    "flex":1,
    "justifyContent":"center",
    "alignItems":"center"
  },
  "twinButtonContainer":{
    "marginTop":hp(hrp(10)),
    "flexDirection":"row",
    "width" : wp("90%"),
    "justifyContent":"space-between"
 }

});