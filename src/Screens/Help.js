import React from 'react';
import {View,BackHandler, Text, ScrollView} from 'react-native';
//component import
//static res
//import appLabels, { appDescription } from '../assets/static_resources/strings';
//component
import Logo from '../components/utilis/Logo';
//drawer list
import drawerItems from '../../assets/data/drawerItem';
//Style import
import styles from '../../assets/styles/drawerStyle'
import Icon from '../hooks/Icon';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Help(props){
    return (
            <ScrollView
                contentContainerStyle={{justifyContent:'center',alignContent:'center',flex:1}}
            >
                  <View  style={[styles.separator,{width:'100%'}]}></View>
                  {drawerItems.map((item,index)=>{
                    
                    if(item.description){
                    return (
                        <TouchableOpacity key={"drawerItemContainer#"+index} 
                              style={[styles.drawerItems,]}
                              onPress={()=>props.navigation.navigate(item.screenTitle)}
                              >

                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                             {Icon(item.icon,null,null, "#3685b5")}
                             <Text
                              style={[styles.labelStyle,{marginLeft:5}]}
                              > 
                            {item.title}
                          </Text>
                        </View>
                         <Text
                              style={{textAlign:'center'}}
                          > 
                            {item.description?item.description:null}
                          </Text>
                          <View  style={[styles.separator,{marginTop:10,width:'100%'}]}></View>
                      </TouchableOpacity>)}
                  })}
                 </ScrollView>
          )



}