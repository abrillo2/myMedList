import React, {Component} from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//local components
import HeaderSection from '../components/HeaderSection';
import Button from '../components/Button'
//helper funciton
import {openCamera, openGalery} from '../components/helpers/slipPhotohelper';
import styles from '../assets/styles/AddSlipPhotoStyle'

export default class Addslip extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }

  openCam = async(funcArg) => {

    let result = funcArg=="photo"? await openCamera() : await openGalery()
    if(result.assets){
      result.assets[0]
      this.props.navigation.navigate("Takenphoto",{
        response:result
      })
    }
  }

  render() {
    return (
    <View  style={styles.addslip}>
        <View style={styles.bodyContainer}>
          <Text  style={styles.addSlipDescription}>Add photo of prescription slip or medicine bottle
          {"\n\n"} Press The camera Icon to take a photo
          </Text>
          <TouchableOpacity onPress={() => this.openCam("photo")}>
            <ReactImage  source={require('../assets/img/photoCamera.png')} style={styles.cameraIconStyle} />
          </TouchableOpacity>
          <Button buttonLabel="Add Photo" iconName="add" onPress={this.openCam}/>
        </View>

    </View>
    );
  }
}