//imports
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import heaader style
import headerStyle from '../../assets/styles/HeaderStyle.js'
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    
    
    const navigation = useNavigation();
    function onPressOpenDrawer(){
      
      props.back ? navigation.goBack() : navigation.openDrawer();
    }

    let icon  = props.back ? require('../../assets/icons/arrow_back_white.png'):require('../../assets/icons/menu_white.png')
    return(
               
        <View  style={headerStyle.appBarTopContainer}>
               <View  style={headerStyle.appBarElevationContainer}>
                   <View  style={headerStyle.appBarShadowContainer}>
                       <View  style={headerStyle.appBarShadowGroup}></View>
                       <View  style={headerStyle.appBarShadowGroup}></View>
                       <View  style={headerStyle.appBarShadowGroup}></View>
                   </View>
               </View>
              
               <View  style={headerStyle.appBarTopRectangle}></View>
               <View  style={headerStyle.opitionContainer}>
                       <TouchableOpacity onPress={onPressOpenDrawer}>
                         <View  style={headerStyle.leftOpitionContainer}>
                             <ReactImage  source={icon} style={headerStyle.iconStyle} />
                             <Text  style={headerStyle.pageTitleStyle}>{props.Title}</Text>
                         </View>  
                       </TouchableOpacity>
                 </View>
              
       </View>
    )
  
}
/**End of header section */