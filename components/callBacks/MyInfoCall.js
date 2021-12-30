import React, {Suspense,useEffect,useState} from 'react';
import { View } from 'react-native';
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
        },
        opendateAppointed : false,
        opendateRefilled : false,
        openDatePicker : false,
        disabled:true,

        refillDropDownData: [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
          { label: '6', value: '6' },
          { label: '7', value: '7' },
          { label: '8', value: '8' },
        ]
          
      };

  const [staticData, setStaticData] = useState(sData)

  useEffect(() => {
    if(props.rootKey && props.childKey && props.value){
        onChangeData(props)
    }
    return () => {
    }
  }, [props]);
  
  //handel other text input changes for personalDetail
  function onChangeData(props){
    
    let sateData = {...staticData}
    sateData[props.rootKey][props.childKey] = props.value
    setStaticData(sateData)
    
  }

  return <View style={styles.singlereconcile}>
                {props.children}
         </View>
}