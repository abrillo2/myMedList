import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, TouchableHighlightBase} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//local components
import HeaderSection from '../components/HeaderSection';
import Button from '../components/Button'


import styles from '../assets/styles/AddSlipPhotoStyle'

export default class Addslip extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  //open camera to take photo
  openCamera = () => {
    console.log("take photo")
    launchCamera({mediaType:'photo',cameraType:'back'}, (response)=>{
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.props.navigation.navigate("Takenphoto",{
          response:response
        })
      }
    
    });
  }

  render() {
    return (
    <View  style={styles.addslip}>
        <HeaderSection Title={"ADD SLIP PHOTO"}/>
        <View style={styles.bodyContainer}>
          <Text  style={styles.addSlipDescription}>Add photo of prescription slip or medicine bottle</Text>
          <TouchableOpacity>
            <ReactImage  source={require('../assets/photoCamera.png')} style={styles.cameraIconStyle} />
          </TouchableOpacity>
          <Button buttonLabel="Take Photo" iconName="add" onPress={this.openCamera}/>
        </View>

    </View>
    );
  }
}