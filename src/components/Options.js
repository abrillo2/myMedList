//imports
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import icon from '../hooks/Icon.js';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-element-dropdown';
import appObjects from '../../assets/static_resources/objects.js';
import {hrp,wrp} from '../../assets/styles/Dim'
import drawerStyle from '../../assets/styles/drawerStyle.js';
export default function Options(props){

    const renderItem = (item) => {
        return (
          <View style={drawerStyle.drawerItems}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
            {icon(item.icon,{marginLeft:'5%'},24,"#3685b5")}
            <Text style={[drawerStyle.labelStyle,{marginLeft:'5%'}]}>{item.label}</Text>
            </View>
            <View  style={[drawerStyle.separator,{width:'100%'}]}></View>
          </View>
        );
      };
      return (
            <Dropdown
                
                renderRightIcon={()=> <Icon
                                  color={'white'}
                                  name="options-vertical"
                                  backgroundColor="rgba(34, 171, 226, 1)"
                                  size={24}
                                />}
                style={stylesDr.dropdown}
                data={appObjects.reconCileUpdateMenu}
                labelField="value"
                valueField="label"
                maxHeight={hrp(160)}
                placeholder={null}
                renderItem={renderItem}
                containerStyle={stylesDr.containerStyle}
                selectedTextStyle={{color:'transparent'}}
                onChange={item => {
                    //props.setVal(item["label"])
                    props.onPressOption(item)
                }}
          />)
    
}

const stylesDr= StyleSheet.create({
  //dropdown
  dropdown: {
    flex:1,
    width:wrp(250),
  },
  containerStyle:{
    position:'absolute',
    top:0,
    right:0
  }
});