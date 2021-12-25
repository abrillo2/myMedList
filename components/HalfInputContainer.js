//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text, View, TextInput,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

//import heaader style
import styles from '../assets/styles/HalfInputStyle.js'

//Header section
export default class HalfInputContainer extends React.Component{
    
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
    //setInputType
    setInputType=()=>{

        if(this.props.inputType =="dropDown"){
            return (
                <Dropdown
                    style={styles.dropdown}
                    search
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    searchPlaceholder={this.props.inputLabel}
                    iconStyle={styles.iconStyle}
                    data={this.props.data}
                    labelField="label"
                    valueField="value"
                    value={"value"}
                    placeholder={this.props.inputLabel}
                    maxHeight={300}
                    onFocus={() => {}}
                    onBlur={() =>{}}
                    onChange={item => {
                    }}
                    
              />)
        }else{
            return(
                <TextInput  style={this.props.iconName2 ? styles.halfinputInput2 : styles.halfinputInput}
                    editable= {this.props.editAble}
                    placeholder={this.props.inputLabel}
                    value={this.props.inputContent}
                    placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                    keyboardType={this.props.keyboard}
                    onChangeText={ text => {this.props.onChangeText ? 
                        this.props.onChangeText(this.props.objectKey,text):console.log("null")}}
                    >
                 </TextInput>
            )
        }
    }
    

    render() { 
    return(
                    <View  style={styles.halfinput}>
                        
                         <Text  style={styles.halfinputLabel}>{this.props.inputLabel}</Text>
                         <View  style={styles.halfinputLabelIcon}>
                         {this.props.iconName2? <TouchableOpacity onPress={this.props.onPress2}>
                                <ReactImage style={styles.halfinputLabelIconColor}  source={this.icon(this.props.iconName2)}/>     
                            </TouchableOpacity> : null}
                            {this.setInputType()}
                         {this.props.iconName?<TouchableOpacity onPress={this.props.onPress}>
                               <ReactImage style={styles.halfinputLabelIconColor}  source={this.icon(this.props.iconName)}/>     
                            </TouchableOpacity>: null}     
                        </View>                   
                        <View  style={styles.halfinputLayer2Indicator}></View>
                    </View>
    )
  }
}
/**End of header section */