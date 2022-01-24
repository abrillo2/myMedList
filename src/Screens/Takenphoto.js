import React, {useEffect,useState} from 'react';
import {View,ScrollView,Image as ReactImage} from 'react-native';

//local components import
import HeaderSection from '../components/HeaderSection';
import Button from '../components/Button'
//import styles
import styles from '../../assets/styles/TakenPhotoStyle';
import { useIsFocused } from '@react-navigation/native';
import appLabels from '../../assets/static_resources/strings';
//import { Button } from 'react-native-share';
import { appScreenName } from '../../assets/static_resources/strings';

export default function Takenphoto(props){
  const isFocused = useIsFocused();
  const [imageData,setImageData] = useState(null)

  useEffect(() => {
    if(isFocused){
      setImageData(props.route.params.response)
      
    }
    return () => {
    }
  }, [useIsFocused()]);
  //retake photo
  function retake(){
    props.navigation.navigate(appScreenName.addSlip)
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
            <HeaderSection navigation={props.navigation} back={true} Title={appLabels.takenPhotoTitle}/>
            <View style ={styles.takenPhotoBody}>

            {imageData?<ReactImage  source={{uri:imageData.uri+""}} style={styles.slipimagecontainer}/>
               :null}   
                    <View style={styles.twinButtonContainer}>
                      <Button buttonLabel="Cancel" onPress={cancel}  
                              h={2}
                              w={120}/>
                      <Button buttonLabel="Save"  onPress={save}
                               h={2}
                               w={120}/>
                      <Button buttonLabel="Retake"  onPress={retake}
                               h={2}
                               w={120}/>
                    </View>
            </View>
    </ScrollView>
    );

}