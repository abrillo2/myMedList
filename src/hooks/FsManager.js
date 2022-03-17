import RNFetchBlob from 'react-native-fetch-blob'
import { PermissionsAndroid, ToastAndroid } from "react-native";







const dirs = RNFetchBlob.fs.dirs

export async function removeFile(uri){

    const permision = await requestStoragePermision()
    if(permision){ 
        let path = uri.replace('file://', '')

        const exists = await fileExists(path)

        if(exists){ 
          RNFetchBlob.fs.unlink(path)
          .then(() => { console.log('file removed ',path);})
          .catch((err) => { console.log('err')})
        }else{
          console.log('file does not exist ',path)
        }
        
    }else{
        console.log('remove failed')
    }
}

async function fileExists(PATH_OF_FILE){
  const existst= await RNFetchBlob.fs.exists(PATH_OF_FILE)
    .then((exist) => {
              console.log('file exists: ',exist)
              return exist
            })
              
    .catch(() => { console.log('error ')})
  return existst
}

function listPath(path){
  RNFetchBlob.fs.ls(dirs.DocumentDir)
    // files will an array contains filenames
    .then((files) => {
        console.log(files)
    })
}

export async function moveFile(src,dst){
    
    const permision = await requestStoragePermision()

    let DEST_PATH = dirs.DocumentDir + '/'+dst
    let SRC_PATH =  src.replace('file://', '')

    if(permision){
        RNFetchBlob.fs.cp(SRC_PATH, DEST_PATH)
        .then(() => { console.log('file saved') })
        .catch((err) => { console.log('error '+err)})
    }else{
        console.log('storage permission denied')
    }
    return 'file://'+DEST_PATH
}



async function requestStoragePermision(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message:
            "App needs access to your Storage",
           
            
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true
      } else {
        ToastAndroid.show("Storage permission denied\nApp might not work as expected",ToastAndroid.LONG);
        return false
      }
    } catch (err) {
      console.warn(err);
      return false
    }
  }