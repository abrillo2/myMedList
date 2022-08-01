import React, {Component, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import DatePickerHelper from './DatePicker';
import { selectContactPhone } from 'react-native-select-contact';

import { PermissionsAndroid, ToastAndroid } from "react-native";
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
  const isDatePickerOpen = useRef(false)
  
  onPress=()=>{
      let func = props.func
      switch(func){
        case "datePicker":
            setOpenDatePicker(true)
            break;
        case "selectContact":
            getPhoneNumber()
            break
      }
  }

  setValue=(val)=>{
      isDatePickerOpen.current=false

      //filter pin
      if(props.childKey === 'pin'){
          
        if(val == null || val == ""){
              //val = '0000'
        }else if(val.length > 4){
              val = val.substring(0,4)
          }
      }


      openDatePicker?setOpenDatePicker(false):null
      setInputVal(val);
      openDatePicker? setOpenDatePicker(false):null;
      props.onChangeText(props.rootKey,props.childKey,val);
  
  }

  getValue=()=>{
     let val =inputVal!=null?inputVal: props.inputContent ? props.inputContent(props.rootKey,props.childKey):null
     return val?val+"":null

  }

  showDatePicker=()=>{

    if(props.func == 'datePicker' && openDatePicker && !isDatePickerOpen.current){
         console.log('date picker')
        isDatePickerOpen.current=true;
        return(<DatePickerHelper {...props} getVal={getValue} open={openDatePicker} setVal={setValue}/>)
    }else{
        return null
    }
   
  }

  required=()=>{
    if(props.required){
        let val =  props.required(props.childKey,props.rootKey)
        return val && getValue()==null
    }else{
        return false
    }
  }

  getPhoneNumber=async()=> {

        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: "Read Contact Permission",
              message:
                "App needs access to your Contact List",
               
                
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return selectContactPhone()
                    .then(selection => {
                        if (!selection) {
                            return null;
                        }
                        
                        let { contact, selectedPhone } = selection;
                        setValue(selectedPhone.number)
                        return selectedPhone.number;
                    });  
          } else {
            ToastAndroid.show("Contact List permission denied\nApp might not work as expected",ToastAndroid.LONG);
            return false
          }
        } catch (err) {
          console.warn(err);
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

            {props.func == 'datePicker' ?showDatePicker():null}
        </View>
    );
  
}