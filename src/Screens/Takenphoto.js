import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {Image as ReactImage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//local components import
import HeaderSection from '../components/HeaderSection';
import TwinButtonContainer from '../components/TwinButtonContainer'
//import styles
import styles from '../../assets/styles/TakenPhotoStyle';
import { useIsFocused } from '@react-navigation/native';
import { useState } from 'react/cjs/react.development';

export default function Takenphoto(props){

  [imageData,setImageData] = useState(null)


  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setImageData(props.route.params.response)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [useIsFocused()]);
  //retake photo
  function retake(){

    console.log("take photo")
    launchCamera({mediaType:'photo',cameraType:'back'}, (response)=>{
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setImageData(response.assets[0])
      }
    
    });

  }

  //cancel
  function cancel(){
    props.navigation.navigate("Home")
  }

  //save slip image
  function save(){
    props.navigation.navigate("AddSlipInfo",{
      imageData:imageData
    })
  }



    
    return (
    <ScrollView  style={styles.takenphoto}>
            <HeaderSection Title="Slip Photo"/>
            <View style ={styles.takenPhotoBody}>
                    
            {imageData?<ReactImage  source={{uri:imageData.uri}} style={styles.slipimagecontainer}/>
               :null}     
              
                    <View style={styles.twinButtonContainer}>
                      <TwinButtonContainer label="Cancel" onPress={cancel}/>
                      <TwinButtonContainer label="Save"  onPress={save}/>
                      <TwinButtonContainer label="Retake"  onPress={retake}/>
                    </View>
            </View>
    </ScrollView>
    );

}