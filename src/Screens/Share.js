import React, {useState,useEffect} from 'react';
import {View} from 'react-native';
import { getData } from '../helpers/AsyncHelper'
import { useIsFocused } from '@react-navigation/native';
//components import
import ShareList from '../components/ShareList';
//import styles
import styles from '../../assets/styles/ShareStyles'
import appLabels from '../../assets/static_resources/strings';
//import notification modal
//static


export default function Share(props){
    const isFocused = useIsFocused();
    const [state,setState] = useState({
      itemLabels : ["Medicine", "Date filled", "Doctor", "Refills left","Strength","Direction","Disease",""],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]',
                 '["medicationDetails"]["strength"]','["medicationDetails"]["direction"]',
                 '["medicationDetails"]["diagnosis"]'],
      interactionsComplete: false
    })


   
    const [currentDataActive,setcurrentDataActive] = useState(null)
    const [currentDataDiscontinued,setcurrentDataDiscontinued] = useState(null)
    const [personalData,setPersonalData] = useState(null)


    const [activeKey, setActiveKey] = useState(null)
    const [discontinuedKey, setDiscontinuedKey] = useState(null)

    useEffect(() => {
        if(isFocused){
          getSavedData()
        }        
        return () => {
        }
      }, []);



   function selectToggelItem(jsonValue,active){
         return active ? jsonValue["slipInfo"] : 
                            (jsonValue["slipInfoDiscontinued"]?jsonValue["slipInfoDiscontinued"]:
                                                              [] )
   }

   async function getSavedData(){
        const jsonValue = await getData('@myMedListSlipInfo')
        let personalData =personalData?personalData: await getData("@myMedListMyInfo")

        if (jsonValue != null){
            let currentDataActive = selectToggelItem(jsonValue,true)
            let currentDataDiscontinued = selectToggelItem(jsonValue,false)
            
            let itemStateActive = {...state}
            let itemStateDiscontinued = {...state}
            let activeLabelItem = "Date added"
            let discontinuedLabelItem =  "Stop date"


            let activekeyItem = '["medicationDetails"]["dateAdded"]'
            let discontinuedkeyItem = '["medicationDetails"]["stopDate"]'
            
            itemStateActive.itemLabels[7] = activeLabelItem
            itemStateActive.dataKeys[7] = activekeyItem

            itemStateDiscontinued.itemLabels[7] = discontinuedLabelItem
            itemStateDiscontinued.dataKeys[7] = discontinuedkeyItem
            
            setcurrentDataActive(currentDataActive);
            setcurrentDataDiscontinued(currentDataDiscontinued)
            setPersonalData(personalData)

            setActiveKey(itemStateActive)
            setDiscontinuedKey(itemStateDiscontinued)

        }
    }

   
    return (
         <View  style={styles.share}>
          {discontinuedKey !=null &&
          activeKey != null
          ? <ShareList  
                
                data={props.route.name==appLabels.discontinuedTitle?
                  currentDataDiscontinued:currentDataActive}
                itemLabels={props.route.name==appLabels.discontinuedTitle ?
                  discontinuedKey.itemLabels:activeKey.itemLabels}
                dataKeys={props.route.name==appLabels.discontinuedTitle?
                  discontinuedKey.dataKeys:activeKey.dataKeys}
                status={props.route.name==appLabels.discontinuedTitle?
                  appLabels.discontinued:appLabels.active}
                navigation={props.navigation}
                personalData={personalData}
                title={props.route.name}
           
           />:null}

        </View>
    );
  }