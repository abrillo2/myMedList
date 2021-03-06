//imports
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import heaader style
import headerStyle from '../assets/styles/HeaderStyle.js'
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    
    
    const navigation = useNavigation();
    function onPressOpenDrawer(){
      
      navigation.openDrawer();
    }
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
                             <ReactImage  source={require('../assets/icons/menu_white.png')} style={headerStyle.iconStyle} />
                             <Text  style={headerStyle.pageTitleStyle}>{props.Title}</Text>
                         </View>  
                       </TouchableOpacity>                     
                       {/*<View  style={headerStyle.rightOpitionContainer}>
                           <TouchableOpacity>
                             <ReactImage  source={require('../assets/icons/add_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>

                           <TouchableOpacity>
                             <ReactImage  source={require('../assets/icons/autorenew_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>

                           <TouchableOpacity>
                           < ReactImage  source={require('../assets/icons/share_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>
    </View>*/}

                 </View>
              
       </View>

    )
  
}
/**End of header section */