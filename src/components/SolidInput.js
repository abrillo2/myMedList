import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import DatePickerHelper from './DatePicker';
//import styles
import styles from '../../assets/styles/SolidInputStyle';
import HalfInputStyle from '../../assets/styles/HalfInputStyle';
import Icon from '../hooks/Icon'
import InputType from '../hooks/InputType';
//hooks
import {useEffect,useState} from 'react';

export default function SolidInput(props){

  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [inputVal, setInputVal] = useState(null)
  
  onPress=()=>{
      let func = props.func
      switch(func){
        case "datePicker":
            setOpenDatePicker(true)
            break;  
      }
  }

  setValue=(val)=>{
      openDatePicker?setOpenDatePicker(false):null
      setInputVal(val);
      openDatePicker? setOpenDatePicker(false):null;
      props.onChangeText(props.rootKey,props.childKey,val);
  
  }

  getValue=()=>{
     let val =inputVal!=null?inputVal: props.inputContent ? props.inputContent(props.rootKey,props.childKey):null
     return val?val+"":null

  }

  required=()=>{
    if(props.required){
        let val =  props.required(props.childKey,props.rootKey)
        return val && getValue()==null
    }else{
        return false
    }
  }

 
    return (
        <View  style={[styles.solidInputContainer,{width:props.width}]}>
            <View  style={styles.solidInputBorderContainer}>
                    <InputType {...props} setVal={setValue} getval={getValue}/>
                    {props.iconName?<TouchableOpacity onPress={onPress}>
                                {Icon(props.iconName,HalfInputStyle.halfinputLabelIconColor)}
                    </TouchableOpacity>: null}
            </View>
             <View  style={styles.labelContainer}>
                <Text  style={styles.labelTextStyle}>
                            {props.inputLabel}
                            {required() && inputVal==null?<Text style={[styles.halfinputLabel,
                            {color:"red"}]}> *</Text>:null}
                </Text>
            </View>

            {props.func == 'datePicker' ? <DatePickerHelper {...props} getVal={getValue} open={openDatePicker} setVal={setValue}/>:null}
        </View>
    );
  
}