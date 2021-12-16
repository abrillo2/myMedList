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
import styles from '../assets/styles/HalfInputStyle.js'

//Header section
export default class HalfInputContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
            <View data-layer="f6068078-a5db-4fd2-8520-68cbe542e8da" style={styles.hallfInputContainer}>
                        <View data-layer="6e6a20ef-6643-451d-9c78-a63d1fd8bad5" style={styles.leftHalfinput}>
                    
                                <View data-layer="34f37c8b-d0a6-4439-9fd7-270d1fa51a25" style={styles.leftHalfinputlightElevationRec1}>
                                <View data-layer="5cc6f262-4803-42c3-918a-c87b66fffaa2" style={styles.leftHalfinputXcontainer}>
                                    <View data-layer="c7d4f6d0-52b2-4477-abdb-95e40ef63508" style={styles.leftHalfinputLayer2}>
                                        <View data-layer="a36caffc-742b-4409-a1b1-33689ba0ea13" style={styles.leftHalfinputLayer2State}>
                                            <Text data-layer="68ec4cb9-11c6-4210-9b29-569fbe1c4167" style={styles.leftHalfinputLabel}>Refills left *</Text>
                                            <View data-layer="88e4a071-4d19-4228-aad0-5d8af010ebca" style={styles.leftHalfinputLabelIcon}>
                                                        <TextInput data-layer="b925eb18-9ab9-45f7-875f-30bab8586156" style={styles.leftHalfinputInput}>1</TextInput>
                                                        <Svg data-layer="13b110ec-c034-41aa-aec4-c5168152264b" style={styles.leftHalfinputLabelIconColor} preserveAspectRatio="none" viewBox="0 0 10 5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 5 5 L 10 0 L 0 0 Z"  /></Svg>         
                                            </View>
                                        </View>
                                        <View data-layer="82f5a5ee-7481-4e80-baf5-d0bf35a8c694" style={styles.leftHalfinputLayer2Indicator}>
                                        
                                        </View>

                                    </View>
                                </View>
                                </View>
                        </View>

                            <View data-layer="6e6a20ef-6643-451d-9c78-a63d1fd8bad5" style={styles.leftHalfinput}>
                            
                            <View data-layer="34f37c8b-d0a6-4439-9fd7-270d1fa51a25" style={styles.leftHalfinputlightElevationRec1}>
                                <View data-layer="5cc6f262-4803-42c3-918a-c87b66fffaa2" style={styles.leftHalfinputXcontainer}>
                                    <View data-layer="c7d4f6d0-52b2-4477-abdb-95e40ef63508" style={styles.leftHalfinputLayer2}>
                                    <View data-layer="a36caffc-742b-4409-a1b1-33689ba0ea13" style={styles.leftHalfinputLayer2State}>
                                            <Text data-layer="68ec4cb9-11c6-4210-9b29-569fbe1c4167" style={styles.leftHalfinputLabel}>Refills left *</Text>
                                            <View data-layer="88e4a071-4d19-4228-aad0-5d8af010ebca" style={styles.leftHalfinputLabelIcon}>
                                                    <TextInput data-layer="b925eb18-9ab9-45f7-875f-30bab8586156" style={styles.leftHalfinputInput}>1</TextInput>
                                                    <Svg data-layer="13b110ec-c034-41aa-aec4-c5168152264b" style={styles.leftHalfinputLabelIconColor} preserveAspectRatio="none" viewBox="0 0 10 5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 5 5 L 10 0 L 0 0 Z"  /></Svg>         
                                            </View>
                                    </View>
                                    <View data-layer="82f5a5ee-7481-4e80-baf5-d0bf35a8c694" style={styles.leftHalfinputLayer2Indicator}>
                                        
                                    </View>

                                </View>
                                </View>
                            </View>
                        </View>
            </View>


    )
  }
}
/**End of header section */





