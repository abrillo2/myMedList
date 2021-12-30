import React, {Component} from 'react';
import {Text, View, TextInput,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
//import heaader style
import styles from '../../assets/styles/HalfInputStyle.js'
//setInputType
export default function InputType(props){
    if(props.inputType =="dropDown"){
        return (
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                searchPlaceholder={props.inputLabel}
                iconStyle={styles.iconStyle}
                data={props.data}
                labelField="label"
                valueField="value"
                value={"value"}
                maxHeight={100}
                placeholder={props.inputLabel}
                onFocus={() => {}}
                onBlur={() =>{}}
                onChange={item => {
                    props.setVal(item)
                }}
                
          />)
    }else{
        return(
            <TextInput  style={props.iconName ? styles.halfinputInput2 : styles.halfinputInput}
                editable= {props.editAble}
                placeholder={props.inputLabel}
                value={props.getval}
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                keyboardType={props.keyboard}
                onChangeText={ text => {props.onChangeText ? 
                    props.setVal(text):console.log("null")}}
                >
             </TextInput>
        )
    }
}