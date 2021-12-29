import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//import styles
import styles from '../assets/styles/SolidInputStyle';


export default class SolidInput extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  render() {
    
    return (
        <View  style={[styles.solidInputContainer,{width:this.props.width}]}>
            <View  style={styles.solidInputBorderContainer}>
                <TextInput  style={styles.textInputStyle}>first name</TextInput>
            </View>
            <View  style={styles.labelContainer}>
                <Text  style={styles.labelTextStyle}>
                            {this.props.inputLabel}
                            {this.props.required?<Text style={[styles.halfinputLabel,
                            {color:"red"}]}> *</Text>:null}
                </Text>
            </View>
        </View>
    );
  }
}