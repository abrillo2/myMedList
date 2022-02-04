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
export default function Addslip(props) {

  const [spinnerOf, setSpinner] = useState(true)
  const isFocused = useIsFocused();

  async function openCam(funcArg){
    setSpinner(false)
    let result = funcArg=="photo"? await openCamera() : await openCamera()//openGalery()
    if(result){
        console.log("response ",result.assets[0])
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
        
        <View style={styles.bodyContainer}>
          <Text  style={styles.addSlipDescription}>{appDescription.addSlipDescription}</Text>
          <TouchableOpacity onPress={() => openCam("photo")}>
            <ReactImage  source={require('../../assets/img/photoCamera.png')} style={styles.cameraIconStyle} />
          </TouchableOpacity>
          <Button w={2} buttonLabel={appLabels.addPhoto} iconName="add" onPress={openCam}/>
        </View>:<Spinner/>}

    </View>
    );
  
}