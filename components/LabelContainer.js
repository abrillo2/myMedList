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
import styles from '../assets/styles/LabelContainerStyle.js'

//Header section
export default class LabelContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
        <View  style={styles.labelContainer}>
                    <Svg  style={styles.labelItemContainer} preserveAspectRatio="none" viewBox="-0.75 -0.75 367.5 37.5" 
                        fill="rgba(56, 156, 196, 1)">
                         <Text  style={styles.labelText}>Medication details</Text>
                    </Svg>
        </View>   
    )
  }
}
/**End of header section */