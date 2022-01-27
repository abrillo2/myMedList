import React from 'react';
import {View,BackHandler} from 'react-native';
//component import
//static res
import appLabels, { } from '../../assets/static_resources/strings';
//component
import Logo from './utilis/Logo';
//drawer list
import drawerItems from '../../assets/data/drawerItem';
//Style import
import styles from '../../assets/styles/drawerStyle'
import Icon from '../hooks/Icon';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function LeftDrawer(props){
    return (
            <DrawerContentScrollView {...props}>
              <View
                style={styles.contentBody}>

            <Logo/>
            </View>
                  {drawerItems.map((item,index)=>{
                    
                    if(item.icon){
                    return (
                        <View key={"drawerItemContainer#"+index} style={styles.drawerItems}>
                          <DrawerItem
                            focused={false}
                            activeItemKey = {index}
                            key={"drawerItem#"+index}
                            icon={(focused,color,size)=>{
                              //props.items.find(it => it.key === props.activeItemKey)
                              //let color= props.route.name ==item.screenTitle?"#3685b5": "red"
                              return Icon(item.icon,null,null, "#3685b5")}}
                            label={item.title}
                            labelStyle={styles.labelStyle}
                            onPress={() => {
                              if(item.title == appLabels.exit){
                                BackHandler.exitApp()
                              }else if(item.title=="My info"){
                                 props.navigation.navigate(appLabels.myInfoTitle)
                              }else{
                                 props.navigation.navigate(item.screenTitle)
                              }
                            }}
                          />
                          <View  style={styles.separator}></View>
                      </View>)}
                  })}
                 
            </DrawerContentScrollView>
          )



}