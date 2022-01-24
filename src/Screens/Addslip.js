import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';

//local components
import HeaderSection from '../components/HeaderSection';
import Button from '../components/Button'
//helper funciton
import {openCamera, openGalery} from '../helpers/slipPhotohelper';
import styles from '../../assets/styles/AddSlipPhotoStyle'





//strings
import strings,{appDescription} from '../../assets/static_resources/strings'
//static resources
import appLabels,{ appScreenName } from '../../assets/static_resources/strings';
export default function Addslip(props) {

  async function openCam(funcArg){

    let result = funcArg=="photo"? await openCamera() : await openGalery()
    if(result.assets){
      props.navigation.navigate(appScreenName.takenPhoto,{
        response:result.assets[0]
      })
    }
  }
  return (
    <View  style={styles.addslip}>
        <HeaderSection back={true} Title={strings.addslipTitle} navigation={props.navigation}/>
        <View style={styles.bodyContainer}>
          <Text  style={styles.addSlipDescription}>{appDescription.addSlipDescription}</Text>
          <TouchableOpacity onPress={() => openCam("photo")}>
            <ReactImage  source={require('../../assets/img/photoCamera.png')} style={styles.cameraIconStyle} />
          </TouchableOpacity>
          <Button w={2} buttonLabel={appLabels.addPhoto} iconName="add" onPress={openCam}/>
        </View>

    </View>
    );
  
}