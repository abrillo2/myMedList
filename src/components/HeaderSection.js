//imports
import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import appLabels from '../../assets/static_resources/strings.js';

import icon from '../hooks/Icon.js';
//import heaader style
import headerStyle from '../../assets/styles/HeaderStyle.js'
//options menu
import Options from './Options.js';
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    const navigation = props.navigation;
    const title = props.Title
    const  goback = title == appLabels.addSlipTitle//appLabels.shareTitle | title ==appLabels.reconcileTitle | title ==appLabels.homeTitle

    function onPressOpenDrawer(){
      
      //!goback ?navigation.goBack(): navigation.openDrawer();
      navigation.openDrawer();
    }

    let iconName  ="menu";//! goback ? "arrow-back":"menu"

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
                         {icon(iconName,headerStyle.iconStyle,30)}
                             <Text  style={headerStyle.pageTitleStyle}>{props.Title}</Text>
                         </View>  
                       </TouchableOpacity>
                       <View  style={headerStyle.rightOpitionContainer}>
                            {props.onPressOption ? <Options onPressOption={props.onPressOption}/>:  null
                                }
                        </View>
                 </View>
              
       </View>
    )
  
}
/**End of header section */
