//imports
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/FullInputStyle.js'

//Header section
export default class FullInputContainer extends React.Component{
    //  this.setState(...)

        //select input icon
    icon = () =>{
            var icon = "";
           if(this.props.iconName == "dateRange"){
               
              icon = require("../assets/icons/date_range_black.png");
           }else if(this.props.iconName == "dropDown"){
               icon = require("../assets/icons/drop_down_circle_black.png");
           }else if(this.props.iconName == "autorenew"){
               icon = require("../assets/icons/autorenew_white.png");
           }else{
               icon = null;
           }
   
           return icon
    }

    render() { 
    return(
                
        <View  style={styles.fullInputContainer}>
            <View  style={styles.fullInputContainerElevation}>
                <View  style={styles.fullInputContainerElevationRec1}>
                <View  style={styles.fullInputContainerColor}>
                    <View  style={styles.fullInputContainerStates}>
                        <View  style={styles.fullInputContainerStates2}>
                            <Text  style={styles.FullInputLabel}>{this.props.inputLabel}
                                {this.props.required?<Text style={[styles.halfinputLabel,
                                {color:"red"}]}> *</Text>:null}        
                            </Text>
                            <View  style={styles.halfinputLabelIcon}>
                                <TextInput placeholder={this.props.inputLabel} 
                                        placeholderTextColor={"rgba(0, 0, 0, 0.4)"} 
                                        keyboardType={this.props.keyboard}
                                        style={styles.fullInputInput}
                                        editable= {this.props.editAble ? false:true}
                                        value={this.props.inputContent}
                                        onChangeText={ text => {this.props.onChangeText ? 
                                            this.props.onChangeText(this.props.objectKey,text):console.log("null")}}
                                        >
                                </TextInput>
                                <TouchableOpacity onPress={this.props.onPress}>
                                {this.props.iconName? <ReactImage style={styles.halfinputLabelIconColor}  source={this.icon()}/> : null}    
                                </TouchableOpacity>
                            </View>   
                        </View>
                    
                    </View>
                </View>

                </View>
            </View>
            <View  style={styles.fullInputContainerStatesIndicator}></View>
        </View>


    )
  }
}
/**End of header section */