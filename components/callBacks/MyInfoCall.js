import React, {Suspense,useEffect,useState} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TwinButtonContainer from '../../components/TwinButtonContainer';

//styles
import styles from '../../assets/styles/AddSlipInfoStyle';

export default function MyInfoCall(props){
      let sData = {
        "personalInformation":{
          "birthDate": new Date().toLocaleDateString("en-US"),
          "firstName":null,
          "lastName":null,
          "sex": null
        },
        "address":{
          "street":null,
          "city":null,
          "state":null,
          "zipCode":null,
          "phone":null
        },
        "physicianDetails":{
          "firstName":null,
          "lastName":null,
          "phone":null
        },
        "pharmacyDetails":{
          "name": null,
          "phone":null
        }};

  const [staticData, setStaticData] = useState(sData)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    
    requiredFieldsFullfilled()
    if(props.rootKey && props.childKey && props.value){
        onChangeData(props)
    }/*else if(props.savePressed){
        savePressed()
    }else if(props.cancelPressed){
        cancelPressed()
    }*/
    return () => {
    }
  }, [props]);
  
  //handel other text input changes for personalDetail
  function onChangeData(props){
    
    let sateData = {...staticData}
    sateData[props.rootKey][props.childKey] = props.value
    setStaticData(sateData)
    
  }

  /*******************************
   *  Handel Form Submission
   *****************************/
  function cancelPressed(){
    props.navigation.goBack()
  }
  async function savePressed(){
   try {
      let data = await  getData()
      
      console.log("saved already: ",data)
      let slipInfo = null;
      if(data == null){
        slipInfo = {"myInfo":{}}
        slipInfo["myInfo"]={...staticData}
      }else{
        data["myInfo"]={...staticData}
        slipInfo = data
      }

      const jsonValue = JSON.stringify(slipInfo)
      await AsyncStorage.setItem("@myMedListMyInfo", jsonValue)
      props.navigation.navigate("Share")
    }catch (e) {
      // saving error
      console.log(e)
    }
  }
  async function getData(){
    try {
      const jsonValue = await AsyncStorage.getItem('@myMedListMyInfo')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  function requiredFieldsFullfilled(){
    let item = {...staticData}
    if(item["personalInformation"]["firstName"]!=null
       && item["personalInformation"]["lastName"] !=null
       && item["physicianDetails"]["firstName"]!=null
       && item["physicianDetails"]["lastName"] !=null){
         setDisabled(false)
       }
  }
  return <View style={styles.singlereconcile}>
                {props.children}
                
          <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Cancel" 
                                     disabled={false}
                                     onPress={cancelPressed}/>
                <TwinButtonContainer label="Save" disabled={disabled}
                                      onPress={savePressed}/>
          </View>
         </View>
}