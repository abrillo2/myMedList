import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//import styles
import styles from '../assets/styles/SolidInputStyle';
import HalfInputStyle from '../assets/styles/HalfInputStyle';


export default class SolidInput extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

 //select input icon
 icon = (iconName) =>{
        var icon = "";
        if(iconName== "dateRange"){
           icon = require("../assets/icons/date_range_black.png");
        }else if(iconName== "dropDown"){
            icon = require("../assets/icons/drop_down_circle_black.png");
        }else if(iconName== "autorenew"){
            icon = require("../assets/icons/autorenew_white.png");
        }else if(iconName == "arrowRightBlack"){
            icon = require("../assets/icons/arrow_right_black.png");
        }else if(iconName == "arrowLefttBlack"){
            icon = require("../assets/icons/arrow_left_black.png");
        }else{
            icon=null
        }

        return icon
 }

  render() {
    
    return (
        <View  style={[styles.solidInputContainer,{width:this.props.width}]}>
            <View  style={styles.solidInputBorderContainer}>
                <TextInput  style={styles.textInputStyle}>first name</TextInput>

                    {this.props.iconName?<TouchableOpacity onPress={this.props.onPress}>
                               <ReactImage style={HalfInputStyle.halfinputLabelIconColor}  source={this.icon(this.props.iconName)}/>     
                    </TouchableOpacity>: null}     

                
            </View>
            <View  style={styles.labelContainer}>
                <Text  style={styles.labelTextStyle}>
                            {this.props.inputLabel}
                            {this.props.required?<Text style={[styles.halfinputLabel,
                            {color:"red"}]}> *</Text>:null}
                </Text>
            </View>
        </View>
    );
  }
}