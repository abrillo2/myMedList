import React, {useEffect,useState} from 'react';
import {View} from 'react-native';
import {getData, saveData} from '../helpers/AsyncHelper';
import { removeItem,getItem} from '../helpers/editItemHelper';

//import header section
//import body style
import ReconcileStyle from '../../assets/styles/ReconcileStyle';
import { useIsFocused } from '@react-navigation/native';
//import notification modal
import  Notification from '../hooks/Notification'
import SolidInput from '../components/SolidInput';
import Spinner from '../helpers/Spinner';
//static items
import appLabels,{appDescription,formInputLabel} from '../../assets/static_resources/strings';
import ScrollabelItemContainer from '../components/ScrollabelItemContainer';


//test import

export default function Reconcilelist(props) {

    const isFocused = useIsFocused();
    const state = { 
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
        interactionsComplete: false
      };

      const [listOfdata,setlistOfdata] = useState(null)
      const [reload,setReload] = useState(true)
      
      const [openModal, setOpenModal] = useState(false)
      const [opacity,setOpacity] = useState(1)
      
      const [itemActionId,setItemActionId] = useState(null)
      const [stopDate,setStopDate] = useState(null)
      const [notificationContent, setNotificationContent] = useState(null)
      const [notificationTitle,setNotificationTitle] = useState(appDescription.reconcileListDeleteDescription)
      
      const [scrollItems,setScrollItems] = useState(<Spinner/>)

  

    async function listButtonPressed(action,itemId){

          switch (action){
              case "delete":
                setItemActionId(itemId)
                setNotificationTitle(appDescription.reconcileListDeleteDescription)
                setOpenModal(true)
                setOpacity(0.2)
                break
              case "edit":
        
                  setScrollItems(<Spinner/>)

                  setTimeout(async()=>{
                      let items = await getData('@myMedListSlipInfo')
                      items = [...items['slipInfo']]
                      let item = getItem(items,itemId)
                      props.navigation.navigate(appLabels.addSlipTitle,{
                      item:item,key:itemId
                    })
                  },1000)
               
              
                break  
          }    
    } 
    //import item list
    async function getSlipInfoData(){
            const slipInfoData = await getData('@myMedListSlipInfo')
            if(slipInfoData !== null){
              refresh(true,slipInfoData,0)
            }else{
              setOpacity(0.2)
              setNotificationTitle(appDescription.reconcileListAddItemDescription)
              setOpenModal(true)
            }
    }

    //handel notification and dialog box
    function onChangeDate(rootKey,childKey, value){
      setStopDate(value)
    }
    function getCurrentDate(){
       if(stopDate){
          return stopDate
       }else{
        let date=new Date()
        let dateFormatted =  date.toLocaleDateString("en-US");
        return dateFormatted
       }
    }
    function dialogConfirmed(data,confirmed){
      setOpenModal(false)
      setOpacity(1)
      if(confirmed){
         if(notificationContent){
            let items = listOfdata
            let date = stopDate != null? stopDate : new Date().toLocaleDateString("en-US")
            let updatedItems = removeItem(items,itemActionId,date);
            saveData(updatedItems,"@myMedListSlipInfo")
            setItemActionId(null)
            setNotificationContent(null)
            setStopDate(null)
            setNotificationTitle(appDescription.reconcileListDeleteDescription)
            setReload(!reload)
        }else if(listOfdata === null){
            props.navigation.navigate(appLabels.addPhotoTitle)
        }else{
          setOpenModal(true)
          setOpacity(0.2)
          setNotificationTitle(formInputLabel.stopDate)
          setNotificationContent(<SolidInput  width={"100%"} 
                          inputLabel={formInputLabel.stopDate}
                          childKey={"stopDate"}
                          rootKey = {"medicationDetails"}
                          iconName={"dateRange"}
                          func="datePicker"
                          editAble={false}
                          onChangeText={onChangeDate}
                          inputContent={getCurrentDate}/>)
        }
      }else{
         setNotificationContent(null)
      }

    }

    function refresh(reload,data,sortIndex){
     
      setScrollItems(<View style={{opacity:opacity}}>
        <ScrollabelItemContainer  
                                listButtonPressed={listButtonPressed}
                                listButton={true}
                                data={data["slipInfo"]}
                                itemlen={4}
                                itemLabels={state.itemLabels}
                                dataKeys={state.dataKeys}
                                onPress={sort}
                                sortIndex={sortIndex}
                                refresh={reload}/>

            </View>)
      setlistOfdata(data);
    }

    function sort(index){
      if(listOfdata != null){
        refresh(false,listOfdata,index)
      }
    }

    useEffect(() => {
        if(isFocused){
          getSlipInfoData();
        }
        return () => {
        }
      }, [reload,useIsFocused()]);

    return (
      <View style={[ReconcileStyle.reconcilelist]}>
       
            {scrollItems}
            <Notification
                          modalVisible={openModal}
                          onPress={dialogConfirmed}
                          pTitle={notificationTitle}
                          lTitle={appLabels.ok}
                          rTitle={appLabels.cancel}
                          data={notificationContent}
                      />
    </View>
    );
  
}

