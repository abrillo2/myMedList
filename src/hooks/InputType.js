import React from 'react';
import {TextInput} from 'react-native';
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
                labelField="value"
                valueField="label"
                disable={false}
                value={props.getval()}
                maxHeight={200}
                placeholder={props.inputLabel}
                onFocus={() => {}}
                onBlur={() =>{}}
                onChange={item => {
                    props.setVal(item["label"])
                }}
                
          />)
    }else{
        return(
            <TextInput  style={props.iconName ? styles.halfinputInput2 : styles.halfinputInput}
                editable= {props.editAble}
                placeholder={props.inputLabel}
                secureTextEntry={props.secureTextEntry}
                value={props.getval()}
                placeholderTextColor={"rgba(0, 0, 0, 0.4)"}
                keyboardType={props.keyboard}
                onChangeText={ text => {props.onChangeText ? 
                    props.setVal(text):console.log("null")}}
                >
             </TextInput>
        )
    }
}