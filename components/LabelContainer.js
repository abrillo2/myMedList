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
        <View data-layer="cbe8e6ec-5d45-4b52-80d0-e02e3776c125" style={styles.labelContainer}>
            <View data-layer="3225da64-ba7e-45f1-ba4f-797c67cbd734" style={styles.labelElevation}>
                <Svg data-layer="746e800b-1bd8-428f-b9f8-5087597da892" style={styles.labelElevationColor} preserveAspectRatio="none" viewBox="0 0 12 7.399993896484375" fill="rgba(252, 244, 244, 1)"><SvgPath d="M 10.59000015258789 0 L 6 4.573819160461426 L 1.409999966621399 0 L 0 1.408097147941589 L 6 7.400000095367432 L 12 1.408097147941589 L 10.59000015258789 0 Z"  /></Svg>
            </View>
            <View data-layer="dd304d95-e048-48dc-80fc-1c5aaa0e6ae5" style={styles.labelContainerLayer2}>
                <View data-layer="9de1aca4-c285-4433-86c5-5bd0c3d51585" style={styles.labelContainerLayer3}>
                    <Svg data-layer="b5c43243-4f34-4f17-9f10-4ed142f4a8ff" style={styles.labelContainerLayer3Color} preserveAspectRatio="none" viewBox="-0.75 -0.75 367.5 37.5" fill="rgba(56, 156, 196, 1)"><SvgPath d="M 4 0 L 362 0 C 364.2091369628906 0 366 1.790860891342163 366 4 L 366 32 C 366 34.20914077758789 364.2091369628906 36 362 36 L 4 36 C 1.790860891342163 36 0 34.20914077758789 0 32 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
                    <View data-layer="9ed08b65-457f-48e7-94c8-43d64328347f" style={styles.labelContainerLayer3State}>
                        <View data-layer="c9e070e7-2eed-49ec-8f1f-960a472db962" style={styles.labelContainerLayer3StateLight}></View>
                    </View>
                </View>
            </View>
            <Text data-layer="8c11d235-2b6f-4a73-b501-353f0804edaf" style={styles.labelText}>Medication details</Text>
            <View data-layer="28fd32fa-f228-4b1b-afd5-48e5bdb110a5" style={styles.labelIcon}>
                <Svg data-layer="f034a50b-9938-4c83-86cb-97838da285a1" style={styles.labelIconColor} preserveAspectRatio="none" viewBox="0 0 12 7.399993896484375" fill="rgba(252, 244, 244, 1)"><SvgPath d="M 10.59000015258789 0 L 6 4.573819160461426 L 1.409999966621399 0 L 0 1.408097147941589 L 6 7.400000095367432 L 12 1.408097147941589 L 10.59000015258789 0 Z"  /></Svg>
            </View>
        </View>   
    )
  }
}
/**End of header section */