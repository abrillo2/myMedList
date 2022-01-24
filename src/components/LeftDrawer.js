import React from 'react';
import {Text, View} from 'react-native';
//component import
//Style import
import Icon from '../hooks/Icon';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function LeftDrawer(props){


    return (
            <DrawerContentScrollView {...props}>
              <View
                style={{backgroundColor:"black"}}
              >
              <DrawerItem
                icon={()=>Icon("home")}
                label="Home"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  console.log("pressed")
                }}
              />
                            <DrawerItem
                icon={()=>Icon("home")}
                label="Home"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  console.log("pressed")
                }}
              />
              </View>
            </DrawerContentScrollView>
          )



}