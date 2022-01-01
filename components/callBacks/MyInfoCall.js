import React, {Suspense,useEffect,useState} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TwinButtonContainer from '../../components/TwinButtonContainer';

//styles
import styles from '../../assets/styles/AddSlipInfoStyle';

export default function MyInfoCall(props){

  const [staticData, setStaticData] = useState({})
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(props.rootKey && props.childKey && props.value){
      onChangeData()
    }
    requiredFieldsFullfilled()
    return () => {
    }
  }, [props]);
  
  //handel other text input changes for personalDetail
  function onChangeData(){
    let sateData = {...staticData}
    sateData[props.rootKey] = {...sateData[props.rootKey],[props.childKey]:props.value}
    setStaticData(sateData)
    
  }

  function getData(parent,child){
    let sateData = {...staticData}
    let parentData = {...sateData[parent]}
    return parentData[child]
    
  }

  /*******************************
   *  Handel Form Submission
   *****************************/
  function cancelPressed(){
    props.navigation.goBack()
  }
  async function savePressed(){
      console.log("save pressed")
      let data = await  getData(props.saveKey)
      await props.savedData(data,{...staticData})

  }
  async function getData(key){
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  function requiredFieldsFullfilled(){
    let item = {...staticData}
    let requiredItemsLen = props.requiredItems.length
    props.requiredItems.forEach(element => {
       let rootKey = element[0]
       let childKey = element[1]
       let data = {...item[rootKey]}
       if(data[childKey]){
          requiredItemsLen-=1;
       }
    });

    if(requiredItemsLen==0){
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