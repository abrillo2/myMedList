//imports
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { appScreenName } from '../../assets/static_resources/strings.js';
//import heaader style
import headerStyle from '../../assets/styles/HeaderStyle.js'
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    
    
    const navigation = useNavigation();
    function onPressOpenDrawer(){
      
      props.back ?props.navigation.goBack(): navigation.openDrawer();
    }

    let iconName  = props.back ? "arrow-back":"options"
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
                                  onPress={()=>{navigation.navigate(appScreenName.home)}}
                                />}
                        </View>
                 </View>
              
       </View>
    )
  
}
/**End of header section */