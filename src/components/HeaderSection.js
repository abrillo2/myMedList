//imports
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import appLabels from '../../assets/static_resources/strings.js';
//import heaader style
import headerStyle from '../../assets/styles/HeaderStyle.js'
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    
    
    const navigation = props.navigation;
    const title = props.Title
    const  goback = title == appLabels.shareTitle | title ==appLabels.reconcileTitle | title ==appLabels.homeTitle

    function onPressOpenDrawer(){
      
      !goback ?navigation.goBack(): navigation.openDrawer();
    }

    let iconName  = !goback ? "arrow-back":"options"
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
                         <Icon
                            name={iconName}
                            style={headerStyle.iconStyle}
                            size={24}/>
                             <Text  style={headerStyle.pageTitleStyle}>{props.Title}</Text>
                         </View>  
                       </TouchableOpacity>
                       <View  style={headerStyle.rightOpitionContainer}>
                            {props.back? null:  <Icon.Button
                                  name="home"
                                  backgroundColor="rgba(34, 171, 226, 0.2)"
                                  onPress={()=>{navigation.navigate(appLabels.homeTitle)}}
                                />}
                        </View>
                 </View>
              
       </View>
    )
  
}
/**End of header section */