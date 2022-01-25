 //select input icon
 import React from 'react';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 export default function icon(iconName,iconStyle,size,colorIn){
    var icon = "";
    var color = "black";
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

    console.log("icon name:",icon)
    return (<Icon
    name={icon}
    color={color}
    style={iconStyle}
    size={size ?size:24}/>)
}
