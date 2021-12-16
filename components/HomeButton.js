//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

//import heaader style
import styles from '../assets/styles/HomeButtonStyle.js'

//Header section
export default class HomeButton extends React.Component{
    //  this.setState(...)
    constructor(props) {
        super(props);
        this.state = {
          buttonLabel : "Die",
          buttonIcon  : "../assets/icons/share_white.png"
        };
    }

    render() { 


        var icon = "";
    
        if(this.props.iconName == "share"){
           icon = require("../assets/icons/share_white.png");
        }else if(this.props.iconName == "add"){
            icon = require("../assets/icons/add_white.png");
        }else{
            icon = require("../assets/icons/autorenew_white.png");
        }

    return(
        <View data-layer="f76cd2e9-e0f7-4687-ae95-e5fdae620e0e" style={styles.homeButton}>
            <View data-layer="5cf5c724-3b37-4aee-bf41-2e422730693f" style={styles.homeButtonContainer}>
                <View data-layer="b673da3d-753b-43be-a953-652c24359f8b" style={styles.homeButtonElevation}>
                    <View data-layer="4a48ac65-5060-4436-8b03-e0823fbf2e9b" style={styles.homeButtonElevationShadow}>
                        <View data-layer="7292d493-716f-4390-b613-441cbfb456bf" style={styles.homeButtonElevationShadowRec1}></View>
                        <View data-layer="dc11c307-8163-423b-b752-2e006bf84949" style={styles.homeButtonElevationShadowRec2}></View>
                        <View data-layer="d904485c-d84a-4f55-9087-9df2b1bf910a" style={styles.homeButtonElevationShadowRec3}></View>
                    </View>
                </View>
                <View data-layer="5be4c0c0-0035-415f-a0c1-4665b86fdaae" style={styles.homeButtonColor}></View>
                <View data-layer="9ae412c0-af40-4a14-820d-6dd5da0b0db3" style={styles.homeButtonState}>
                    <View data-layer="dc2b6c82-7c06-4aae-8749-926ba1137296" style={styles.homeButtonStateLightSurface}></View>
                </View>
                <TouchableOpacity style={styles.buttonTextIconContainer}>
                
                    <ReactImage data-layer="d16a1ec3-e418-403b-b990-6806663c06a2" source={icon} style={styles.iconStyle} />     
                    <Text data-layer="fa32c251-0219-4aeb-b8a9-04d480f8a11f" style={styles.homeButtonLabel}>{this.props.buttonLabel}</Text>

                </TouchableOpacity>

            </View>
        </View> 
    )
  }
}
/**End of header section */