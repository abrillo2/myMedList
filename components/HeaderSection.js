//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//import heaader style
import headerStyle from '../assets/styles/HeaderStyle.js'

//Header section
export default class HeaderSection extends React.Component{
    //  this.setState(...)
    render() { 
    return(
               
        <View data-layer="4db47179-8d9a-4342-9f0d-58153381f3f1" style={headerStyle.appBarTopContainer}>
               <View data-layer="cac44315-d0b3-4c56-88c9-d94c91c13637" style={headerStyle.appBarElevationContainer}>
                   <View data-layer="2aee894e-d864-4f61-9def-f20bc73ae69e" style={headerStyle.appBarShadowContainer}>
                       <View data-layer="84582b2d-844c-415c-bad4-ff856f0bb508" style={headerStyle.appBarShadowGroup}></View>
                       <View data-layer="1f199341-a9a5-420a-a01a-39e0eea49290" style={headerStyle.appBarShadowGroup}></View>
                       <View data-layer="b095b334-e456-4fa6-91b2-50c1c8f6ab54" style={headerStyle.appBarShadowGroup}></View>
                   </View>
               </View>
              
               <View data-layer="ff6e1c93-ea84-43bf-8ebb-0c7516892ee0" style={headerStyle.appBarTopRectangle}></View>
               <View data-layer="0dfdea00-341a-4614-b470-e7dff6bca81e" style={headerStyle.opitionContainer}>
                       <TouchableOpacity>
                         <View data-layer="76039f13-4586-40ed-a477-35080a59466a" style={headerStyle.leftOpitionContainer}>
                             <ReactImage data-layer="284d9349-37fc-495e-a41d-a3ea5167ef0d" source={require('../assets/icons/menu_white.png')} style={headerStyle.iconStyle} />
                             <Text data-layer="b30c2312-efd3-4ba1-8d94-fa574f6e5199" style={headerStyle.pageTitleStyle}>RECONCILE</Text>
                         </View>  
                       </TouchableOpacity>                     
                       <View data-layer="97864ab5-b77b-4ce1-8557-695d803c2511" style={headerStyle.rightOpitionContainer}>
                           <TouchableOpacity>
                             <ReactImage data-layer="f3f999e9-71c2-41b7-b7fa-b75e1f29f607" source={require('../assets/icons/add_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>

                           <TouchableOpacity>
                             <ReactImage data-layer="f3f999e9-71c2-41b7-b7fa-b75e1f29f607" source={require('../assets/icons/autorenew_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>

                           <TouchableOpacity>
                           < ReactImage data-layer="f3f999e9-71c2-41b7-b7fa-b75e1f29f607" source={require('../assets/icons/share_white.png')} style={headerStyle.iconStyle} />
                           </TouchableOpacity>
                        </View>

                 </View>
              
       </View>

    )
  }
}
/**End of header section */