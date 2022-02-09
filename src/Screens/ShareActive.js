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
import {selectToggelItem} from '../helpers/shareHelper'
import appObjects from '../../assets/static_resources/objects';
import Spinner from '../helpers/Spinner';


export default function ShareActive(props){
    const isFocused = useIsFocused();
    const [state,setState] = useState({
      itemLabels : [...appObjects.shareitemLabels,"Date added"],
      dataKeys:[...appObjects.sharedataKeys,'["medicationDetails"]["dateAdded"]'],
      interactionsComplete: false
    })
    const [currentDataActive,setcurrentDataActive] = useState(null)
    const [personalData,setPersonalData] = useState(null)

    useEffect(() => {
        
        if(isFocused && currentDataActive ==null){
          getSavedData()
        }        
        return () => {
        }
      }, []);


   async function getSavedData(){
        const jsonValue = await getData('@myMedListSlipInfo')
        let personalData =personalData?personalData: await getData("@myMedListMyInfo")

        if (jsonValue != null){
    
            let currentDataDiscontinued = selectToggelItem(jsonValue,true)
            
            setcurrentDataActive(currentDataDiscontinued)
            setPersonalData(personalData)

        }
    }
    return (
      <View  style={styles.share}>
      {currentDataActive !=null?<ShareList   

            refreshHandler={getSavedData}
            data={currentDataActive}
            itemLabels={state.itemLabels}
            dataKeys={state.dataKeys}
            status={appLabels.active}
            navigation={props.navigation}
            personalData={personalData}
            title={props.route.name}
       
       />:<Spinner/>}

    </View>
    );
  }