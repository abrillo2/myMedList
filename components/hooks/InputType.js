import React, {Component} from 'react';
import {Text, View, TextInput,TouchableOpacity} from 'react-native';
//import heaader style
import styles from '../../assets/styles/HalfInputStyle.js'
//setInputType
export default function InputType(props){
    if(props.inputType =="dropDown"){
        return (
            <Dropdown
                style={styles.dropdown}
                search
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                searchPlaceholder={props.inputLabel}
                iconStyle={styles.iconStyle}
                data={props.data}
                labelField="label"
                valueField="value"
                value={"value"}
                placeholder={props.inputLabel}
                maxHeight={300}
                onFocus={() => {}}
                onBlur={() =>{}}
                onChange={item => {
                }}
                
          />)
    }else{
        return(
            <TextInput  style={props.iconName ? styles.halfinputInput2 : styles.halfinputInput}
                editable= {props.editAble}
                placeholder={props.inputLabel}
                value={props.inputContent}
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                keyboardType={props.keyboard}
                onChangeText={ text => {props.onChangeText ? 
                    props.onChangeText(props.rootKey,props.childKey,text):console.log("null")}}
                >
             </TextInput>
        )
    }
}