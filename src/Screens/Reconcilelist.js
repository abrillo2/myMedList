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
export default function Reconcilelist(props) {

    const isFocused = useIsFocused();
    const state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
        interactionsComplete: false
      };

      const [listOfdata,setlistOfdata] = useState(null)
      const [dataFetched,setdataFetched] = useState(false)
      const [dataChanged, setdataChanged] = useState(false)
      const [openModal, setOpenModal] = useState(false)
      const [opacity,setOpacity] = useState(1)
      const [formData,setFormData] = useState(null)
      const [stopDate,setStopDate] = useState(null)
      const [notificationContent, setNotificationContent] = useState(null)
      const [notificationTitle,setNotificationTitle] = useState(appDescription.reconcileListDeleteDescription)
      const [sortIndex,setSortIndex] = useState(0)
      const [scrollItems,setScrollItems] = useState(null)

  

    function listButtonPressed(action,itemId){

          switch (action){
              case "delete":
                setFormData(itemId)
                setNotificationTitle(appDescription.reconcileListDeleteDescription)
                setOpenModal(true)
                setOpacity(0.2)
                break
              case "edit":

               console.log("acction data,",itemId)
                let items = [...listOfdata["slipInfo"]]
                let item = getItem(items,itemId)
                props.navigation.navigate(appLabels.addSlipTitle,{
                  item:item,key:itemId
                })
                break  
          }    
    } 
    //import item list
    async function getSlipInfoData(){
        
          
          const slipInfoData = await getData('@myMedListSlipInfo')
            if(slipInfoData !== null){
              setlistOfdata(slipInfoData);
              setdataFetched(true)
              setScrollItems(<View style={{opacity:opacity}}>
                      <ScrollabelItemContainer  
                                              listButtonPressed={listButtonPressed}
                                              listButton={true}
                                              data={slipInfoData["slipInfo"]}
                                              itemlen={4}
                                              itemLabels={state.itemLabels}
                                              dataKeys={state.dataKeys}
                                              onPress={sort}
                                              sortIndex={sortIndex}/>

                          </View>)
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
            let updatedItems = removeItem(items,formData,date);
            saveData(updatedItems,"@myMedListSlipInfo")
            setdataChanged(!dataChanged)
            setFormData(null)
            setNotificationTitle(appDescription.reconcileListDeleteDescription)
            setNotificationContent(null)
            setStopDate(null)
        }else if(listOfdata === null){
            props.navigation.navigate(appLabels.addPhotoTitle)
        }
        else{
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
      }

    }

    function sort(index){
      setSortIndex(index)
      setdataChanged(!dataChanged)
    }

    useEffect(() => {
        if(isFocused){
          getSlipInfoData();
        }
        return () => {
        }
      }, [sortIndex,dataChanged,useIsFocused()]);

    return (
      dataFetched?<View style={[ReconcileStyle.reconcilelist]}>
       
            {scrollItems}
            <Notification
                          modalVisible={openModal}
                          onPress={dialogConfirmed}
                          pTitle={notificationTitle}
                          lTitle={appLabels.ok}
                          rTitle={appLabels.cancel}
                          showTwin={notificationContent==null ? true:false}
                          sTitle={appLabels.ok}
                          data={notificationContent}
                      />
    </View>:<Spinner/>
    );
  
}

