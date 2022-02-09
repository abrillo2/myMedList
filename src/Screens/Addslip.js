import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {useState,useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
//local components
import Button from '../components/Button'
import Spinner from '../helpers/Spinner'
//helper funciton
import {openCamera, openGalery} from '../helpers/slipPhotohelper';
import styles from '../../assets/styles/AddSlipPhotoStyle'

//strings
import {appDescription} from '../../assets/static_resources/strings'
//static resources
import appLabels from '../../assets/static_resources/strings';
import { UseOrientation } from '../hooks/UserORientation';

export default function Addslip(props) {

  const [spinnerOf, setSpinner] = useState(true)
  const isFocused = useIsFocused();
  const orientation = UseOrientation();

  async function openCam(funcArg){
    setSpinner(false)
    let result = funcArg=="photo"? await openCamera() : await openCamera()//openGalery()
    if(result){
        if(result.assets){
        props.navigation.navigate(appLabels.takenPhotoTitle,{
          response:result.assets[0]
        })
      }else{
        setSpinner(true)
      }
    }else{
      console.log('failed to take pictures')
    }
  }

  useEffect(() => {
      setSpinner(true)
    return () => {
    }
  }, [useIsFocused()]);


  return (
    <View  style={styles.addslip}>
        {spinnerOf? 
        
        <View style={[styles.bodyContainer,
          orientation === 'PORTRAIT' ?{justifyContent:'center'}:{justifyContent:'space-around'}]}>
          <Text  style={styles.addSlipDescription}>
            {appDescription.addSlipDescription}</Text>
          <TouchableOpacity onPress={() => openCam("photo")}>
            <ReactImage  source={require('../../assets/img/photoCamera.png')} 
            style={[orientation === 'PORTRAIT' ?styles.cameraIconStyle:styles.cameraIconStyleLandscape]} />
          </TouchableOpacity>
          <Button w={2} buttonLabel={appLabels.addPhoto} iconName="add" onPress={openCam}/>
        </View>:<Spinner/>}

    </View>
    );
  
}