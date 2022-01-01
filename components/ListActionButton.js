//imports
import React from 'react';
import {Image as ReactImage,View,TouchableOpacity} from 'react-native';
//import reconcile items
import ReconcileStyle from '../assets/styles/ReconcileStyle.js';


export default function ListActionButton(props) {

    function pressed(){
        props.onPress(props.action,props.itemId)
    }
    return (
        
       <TouchableOpacity  style={ReconcileStyle.actionButonContainer}
                          onPressIn={pressed}>
            <View  style={ReconcileStyle.butonIconContainer}>
                    <ReactImage  source={props.icon} style={ReconcileStyle.iconStyle} />
            </View>
        </TouchableOpacity>

        
    );
    
}
