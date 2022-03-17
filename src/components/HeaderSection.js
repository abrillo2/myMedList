//imports
import React from 'react';
import {Text, View, TouchableOpacity,Image,FlatList} from 'react-native';
import appLabels from '../../assets/static_resources/strings.js';

import icon from '../hooks/Icon.js';
//import heaader style
import headerStyle from '../../assets/styles/HeaderStyle.js'
//options menu
import Options from './Options.js';
import { socials } from '../../assets/static_resources/objects.js';
//Header section
export default function HeaderSection(props){
    //  this.setState(...)
    const navigation = props.navigation;
    const title = props.Title
    const  goback = title == appLabels.addPhotoTitle  | title ==appLabels.reconcileTitle | title ==appLabels.myInfoTitle |title == appLabels.shareTitle;

    function onPressOpenDrawer(){
      goback ?navigation.navigate(appLabels.homeTitle): navigation.openDrawer();
    }

    let iconName  =goback ? "arrow-back":"menu"

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
                      
                         <View  style={headerStyle.leftOpitionContainer}>
                         {goback ?<TouchableOpacity onPress={onPressOpenDrawer}>
                         {icon(iconName,headerStyle.iconStyle,30)}
                         </TouchableOpacity>:null}
                         
                             {props.Title!=appLabels.homeTitle?<Text  style={headerStyle.pageTitleStyle}>{props.onPressOption?appLabels.reconcileTitle:props.Title}</Text>:null}
                         </View>  
                       
                       <View  style={headerStyle.rightOpitionContainer}>

                            
                            {props.Title == appLabels.shareTitle ?  
                            

                            <FlatList

                                data={socials}
                                horizontal
                                keyExtractor={(item,index)=> {
                                     return "fold"+index+item.name
                                }}
                                renderItem={({ item ,index}) => (
                                <TouchableOpacity
                                    disabled={props.disabled}
                                    style={props.disabled?{opacity:0.5}:null}
                                    onPress={()=> props.iconPressed(item.name)}>

                                    {item.name == appLabels.active ?null/*icon('refresh',{width:24,height:24,marginLeft:24})*/:<Image style={{width:24,height:24,marginLeft:24}}
                                    source={item.source}/>}
                                </TouchableOpacity>
                                )}
                                
                            />
                            
                          :null}
                            {props.onPressOption ? <Options onPressOption={props.onPressOption}/>:  null
                                }

                          {props.Title == appLabels.homeTitle ?
                                                          <TouchableOpacity
                                                          onPress={()=>navigation.navigate("HELP")}
                                                     >
                                                      {icon('help',headerStyle.iconStyle,30)}
                                                     </TouchableOpacity>:null
                          }
                          <TouchableOpacity
                                onPress={()=>navigation.openDrawer()}
                           >
                            {icon('menu',headerStyle.iconStyle,30)}
                           </TouchableOpacity>
                        </View>
                 </View>
              
       </View>
    )
  
}
/**End of header section */
