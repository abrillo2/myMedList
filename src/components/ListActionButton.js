//imports
import React from 'react';
import {View,TouchableOpacity} from 'react-native';
//import reconcile items
import ReconcileStyle from '../../assets/styles/ReconcileStyle.js';
import Icon from '../hooks/Icon';

export default function ListActionButton(props) {

    function pressed(){
        props.onPress(props.action,props.itemId)
    }
    return (
        
       <TouchableOpacity
       style={ReconcileStyle.actionButonContainer}
                          onPressIn={pressed}>
            <View  style={ReconcileStyle.butonIconContainer}>
                  {Icon(props.icon,ReconcileStyle.iconStyle)}
            </View>
        </TouchableOpacity>

        
    );
    
}
