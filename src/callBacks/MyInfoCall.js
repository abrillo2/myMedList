import React, {Suspense,useEffect,useState} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

//styles
import styles from '../../assets/styles/AddSlipInfoStyle';
//strings
import appLabels from '../../assets/static_resources/strings'

export default function MyInfoCall(props){

  const [staticData, setStaticData] = useState({})
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(props.rootKey && props.childKey && props.value){
      onChangeData()
    }else if(props.savedData && disabled){
      loadSavedData()
    }
    requiredFieldsFullfilled()
    return () => {
    }
  }, [props]);

  //populate saved data 
  function loadSavedData() {
    let sateData = {...staticData}
    Object.keys(props.savedData).forEach( rootKey => {
      Object.keys(props.savedData[rootKey]).forEach(childKey=>{
          
          sateData[rootKey] = {...sateData[rootKey],[childKey]:props.savedData[rootKey][childKey]}
          
      })
  })
  setStaticData(sateData)
  setDisabled(false)
  }
  
  //handel other text input changes for personalDetail
  function onChangeData(){
    let sateData = {...staticData}
    sateData[props.rootKey] = {...sateData[props.rootKey],[props.childKey]:props.value}
    setStaticData(sateData)
    console.log(sateData)
    
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
      let data = await  getData(props.saveKey)
      props.saveData(data,{...staticData})

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
    let requiredItemsLen = Number(props.requiredItems.length)
    props.requiredItems.forEach(element => {
       let rootKey = element[0]
       let childKey = element[1]
       let data = {...item[rootKey]}
       
       if(data[childKey]){
          requiredItemsLen =Number(requiredItemsLen)- 1;
       }
    });
  
    if(requiredItemsLen==0){
      setDisabled(false)
    }
  }
  return <View style={styles.singlereconcile}>
                {props.children}
          <View style={styles.twinButtonContainer}>
                <Button buttonLabel={appLabels.cancel} 
                        disabled={false}
                        onPress={cancelPressed}
                        h={2}
                        w={120}
                        />

                <Button buttonLabel={appLabels.save} 
                        disabled={disabled}
                        onPress={savePressed}
                        h={2}
                        w={120}/>
          </View>
         </View>
}