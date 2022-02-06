import React, {useEffect,useState} from 'react';
import {View,ScrollView,Image as ReactImage} from 'react-native';

//local components import
import Button from '../components/Button'
import Spinner from '../helpers/Spinner';
//import styles
import styles from '../../assets/styles/TakenPhotoStyle';
import { useIsFocused } from '@react-navigation/native';
import appLabels from '../../assets/static_resources/strings';
//import { Button } from 'react-native-share';
import { removeFile } from '../hooks/FsManager';

export default function Takenphoto(props){
  const isFocused = useIsFocused();
  const [imageData,setImageData] = useState(null)
  const [spinnerOn, setSpinnerOn] = useState(false)

  useEffect(() => {
    setSpinnerOn(false)
    if(isFocused){
      setImageData(props.route.params.response)
    }
    return () => {
    }
  }, [useIsFocused()]);
  //retake photo
  function retake(){
    removeFile(props.route.params.response.uri)
    props.navigation.navigate(appLabels.addPhotoTitle)
  }

  //cancel
  function cancel(){
    removeFile(props.route.params.response.uri)
    props.navigation.navigate(appLabels.homeTitle)
  }

  //save slip image
  function save(){
    setSpinnerOn(true)
    setTimeout(()=>{
      props.navigation.navigate(appLabels.addSlipTitle,{
        imageData:imageData
      }
    )},50)
  }
    return (
    <ScrollView  style={styles.takenphoto}
                      contentContainerStyle= {spinnerOn?{flex:1}:{flex:0}}>
          {spinnerOn ? <Spinner/>:<View style ={styles.takenPhotoBody}>

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
            </View>}
    </ScrollView>
    );

}