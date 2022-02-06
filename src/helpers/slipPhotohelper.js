import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { moveFile } from '../hooks/FsManager';
 //open camera to take photo
  export async function openCamera(){
    
    let source = await launchCamera({mediaType:'photo',cameraType:'back'}, (response)=>{
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log("photo edited")
      }
    
    });

    
    if(source.assets){
          let responseUri = await moveFile(source.assets[0].uri,source.assets[0].fileName)
          source.assets[0].uri = responseUri
    }

    return source
  }
  //open Gallery
  export async function openGalery(){
    let source = await launchImageLibrary({mediaType:'photo'}, (response)=>{
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log("photo edited")
      }
    });
    return source;
}