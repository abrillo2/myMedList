//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import ListActionButton from './ListActionButton.js';

//import heaader style
import slipPicEditContainerStyle from '../assets/styles/SlipPicEditContainerStyle.js'

//Header section
export default class SlipPicEditContainer extends React.Component{
    //  this.setState(...)
    render() { 
    return(
               
           <View  style={slipPicEditContainerStyle.editPicContainer}>
              <ReactImage  source={require('../assets/img/xImage.png')} style={slipPicEditContainerStyle.slipImage} />
              <View  style={slipPicEditContainerStyle.editButton}>         
              <ListActionButton icon = {require('../assets/icons/edit_white.png')}
                                      onPress={this.props.listButtonPressed}
                                      action={"edit"}/>              
              </View>
           </View>

    )
  }
}
/**End of header section */
