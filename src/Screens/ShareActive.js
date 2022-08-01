import React, {useState,useEffect, useRef} from 'react';
import {View} from 'react-native';
import { getData, saveData } from '../helpers/AsyncHelper'
import { useIsFocused } from '@react-navigation/native';
//components import
import ShareList from '../components/ShareList';
//import styles
import styles from '../../assets/styles/ShareStyles'
import appLabels, { appDescription } from '../../assets/static_resources/strings';
//import notification modal
//static
import {selectToggelItem} from '../helpers/shareHelper'
import appObjects from '../../assets/static_resources/objects';
//import notification modal
import  Notification from '../hooks/Notification'


export default function ShareActive(props){
    const isFocused = useIsFocused();
    const [state,setState] = useState({
      itemLabels : [...appObjects.shareitemLabels],
      dataKeys:[...appObjects.sharedataKeys],
      interactionsComplete: false
    })
    const [currentDataActive,setcurrentDataActive] = useState(null)
    const personalData = useRef(null)
    const [openModal, setopenModal] = useState(false)

    useEffect(() => {
        
        if(isFocused && currentDataActive ==null){
          getSavedData()
        }        
        return () => {
        }
      }, []);


   async function getSavedData(){

        const chargeDisclaimer = await getData("@chargeDisclaimer");

        if(!chargeDisclaimer){
            setopenModal(true)
        }else{

        }

        const jsonValue = await getData('@myMedListSlipInfo')
        let personalInfo =personalData.current?personalData.current: await getData("@myMedListMyInfo")
        personalData.current=(personalInfo)
        if (jsonValue != null){
    
            let currentDataDiscontinued = selectToggelItem(jsonValue,true)
            
            setcurrentDataActive(currentDataDiscontinued)

        }
    }

    function dialogConfirmed(data,result){
         setopenModal(false);
          saveData(result?true:null,"@chargeDisclaimer")
          result?null:props.navigation.navigate(appLabels.homeTitle)
    }

    return (
      <View  style={styles.share}>
     <ShareList   

            refreshHandler={getSavedData}
            data={currentDataActive?currentDataActive:[]}
            itemLabels={state.itemLabels}
            dataKeys={state.dataKeys}
            status={appLabels.active}
            navigation={props.navigation}
            personalData={personalData.current}
            title={props.route.name}
       
       />

      <Notification
                    modalVisible={openModal}
                    onPress={dialogConfirmed}
                    pTitle={appDescription.shareDisclaimer}
                    lTitle={appLabels.ok}
                    rTitle={appLabels.cancel}
                    showTwin={true}
                    sTitle={appLabels.ok}
                />

    </View>
    );
  }