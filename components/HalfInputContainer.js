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
    icon = () =>{
         var icon = "";
        if(this.props.iconName == "dateRange"){
            
           icon = require("../assets/icons/date_range_black.png");
           console.log(icon)
        }else if(this.props.iconName == "dropDown"){
            icon = require("../assets/icons/drop_down_circle_black.png");
        }else if(this.props.iconName == "autorenew"){
            icon = require("../assets/icons/autorenew_white.png");
        }else{
            icon = null;
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
                        console.log("input")
                    }}
                    
              />)
        }else{
            return(
                <TextInput  style={styles.halfinputInput}
                    editable= {this.props.editAble ? false:true}
                    placeholder={this.props.inputLabel}
                    value={this.props.inputContent}
                    placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                    keyboardType={this.props.keyboard}
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
                            {this.setInputType()}
                            <TouchableOpacity onPress={this.props.onPress}>
                               {this.props.iconName? <ReactImage style={styles.halfinputLabelIconColor}  source={this.icon()}/> : null}    
                            </TouchableOpacity>     
                        </View>                   
                        <View  style={styles.halfinputLayer2Indicator}></View>
                    </View>
    )
  }
}
/**End of header section */