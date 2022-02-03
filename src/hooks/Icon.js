 //select input icon
 import React from 'react';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import { wrp } from '../../assets/styles/Dim';
 export default function icon(iconName,iconStyle,size,colorIn){
    var icon = "";
    var color = "#189AB4";
    if(iconName== "dateRange"){
       icon = "date-range"
    }else if(iconName== "dropDown"){
        icon = "arrow-drop-down"
    }else if(iconName== "autorenew"){
        icon = "update"
    }else if(iconName == "arrowRightBlack"){
        icon = "keyboard-arrow-right"
    }else if(iconName == "arrowLefttBlack"){
        icon = "keyboard-arrow-left"
    }else{
        icon=iconName
        color=colorIn?colorIn:"white"
    }
    return (<Icon
    name={icon}
    color={color}
    style={iconStyle}
    size={size ?wrp(size):wrp(24)}/>)
}
