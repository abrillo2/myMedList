import React from 'react';
import {View,BackHandler, Text, ScrollView, Linking} from 'react-native';
//component import
//static res
//import appLabels, { appDescription } from '../assets/static_resources/strings';
//component
import Logo from '../utilis/Logo';
//drawer list
import drawerItems from '../../assets/data/drawerItem';
//Style import
import styles from '../../assets/styles/drawerStyle'
import Icon from '../hooks/Icon';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/static_resources/colors';

export default function Help(props){
    return (
            <ScrollView
                contentContainerStyle={{justifyContent:'space-between',alignContent:'center',flex:1}}
            >
                  <View  style={[styles.separator,{width:'100%'}]}></View>
                  {drawerItems.map((item,index)=>{
                    
                    if(item.description){
                    return (
                        <TouchableOpacity key={"drawerItemContainer#"+index} 
                              style={[styles.drawerItems,]}
                              onPress={()=>props.navigation.navigate(item.screenTitle)}
                              >
                        <View  style={[styles.separator,{marginTop:10,width:'100%'}]}></View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                             {Icon(item.icon,null,null, "#3685b5")}
                             <Text
                              style={[styles.labelStyle,{marginLeft:5,fontSize:26}]}
                              > 
                            {item.title}
                          </Text>
                        </View>
                         <Text
                              style={[styles.labelStyle,{textAlign:'center',color:colors.inputTextColor,fontSize:24}]}
                          > 
                            {item.description?item.description:null}
                          </Text>
                         
                      </TouchableOpacity>)}
                  })}
                  <TouchableOpacity 
                  
                  onPress={()=>{
                    Linking.openURL("http://www.mangoconsultancy.com/apps").catch(err => console.error("Couldn't load page", err));
                  }}
                   
                  style={{wdith:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View  style={[styles.separator,{marginTop:10,width:'100%'}]}></View>
                    <Text  style={[styles.labelStyle,{textAlign:'center',color:colors.inputTextColor}]}>
                      For more info and updates visit:
                    </Text>
                    <Text style={[styles.labelStyle]}>
                            www.mangoconsultancy.com/apps
                    </Text>
                    <View  style={[styles.separator,{marginTop:10,width:'100%'}]}></View>
                  </TouchableOpacity>
                 </ScrollView>
          )



}