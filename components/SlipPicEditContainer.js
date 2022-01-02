//imports
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import ListActionButton from './ListActionButton.js';
import {openCamera, openGalery} from './helpers/slipPhotohelper.js';

//import heaader style
import slipPicEditContainerStyle from '../assets/styles/SlipPicEditContainerStyle.js'

//Header section
export default class SlipPicEditContainer extends React.Component{
    //  this.setState(...)
    constructor(props) {
      super(props);
      this.state = {
        imageData:null
      };
    }

    setValue=(imageData)=>{
      this.setState({
        imageData
      })
      this.props.onChangeText(this.props.rootKey,this.props.childKey,imageData)
    }

    editSlipImg=async()=>{
       let val = await openGalery()
       console.log("val",val)
       if(val.assets){
          this.setValue(val.assets[0])
       }
       
    }

    async componentDidMount(){
      let imageData = await this.props.inputContent(this.props.rootKey,this.props.childKey)
      this.setState({
        imageData
      })
    }

    render() { 
    return(
               
           <View  style={slipPicEditContainerStyle.editPicContainer}>

{
              this.state.imageData != null ? <ReactImage  source={{uri:this.state.imageData.uri}} style={slipPicEditContainerStyle.slipImage} /> :
                      <ReactImage  source={require('../assets/img/xImage.png')} style={slipPicEditContainerStyle.slipImage} />
              }
              <View  style={slipPicEditContainerStyle.editButton}>         
              <ListActionButton icon = {require('../assets/icons/edit_white.png')}
                                      onPress={this.editSlipImg}
                                      />              
              </View>
           </View>

    )
  }
}
/**End of header section */
