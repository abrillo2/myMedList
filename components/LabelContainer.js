//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text, TouchableHighlight, View} from 'react-native';
import Svg from 'react-native-svg';
import {Image as ReactImage} from 'react-native';

//import heaader style
import styles from '../assets/styles/LabelContainerStyle.js'

//Header section
export default class LabelContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
        <TouchableHighlight underlayColor={"#61DBE6"} style={styles.labelContainer}>
            <View  style={styles.labelItemContainer}>
                    <ReactImage  source={require("../assets/icons/expand_less_white.png")} style={styles.iconStyle} />
                 <Text  style={styles.labelText}>{this.props.Title}</Text>
            </View>
        </TouchableHighlight>   
    )
  }s
}
/**End of header section */