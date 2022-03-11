import React, {useEffect,useRef,useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {getData, saveData} from '../helpers/AsyncHelper';
import { removeItem,getItem} from '../helpers/editItemHelper';

//import header section
//import body style
import { useIsFocused } from '@react-navigation/native';
//import notification modal
import  Notification from '../hooks/Notification'
import SolidInput from '../components/SolidInput';
import Spinner from '../helpers/Spinner';
//static items
import appLabels,{appDescription,formInputLabel} from '../../assets/static_resources/strings';
import ReconcileItems from '../components/ReconcileItems';
import appObjects from '../../assets/static_resources/objects';


//test import
export default function Reconcilelist(props) {

    const isFocused = useIsFocused();
    const state = { 
      itemLabels : appObjects.reconcileitemLabels,
      dataKeys:appObjects.reconciledataKeys,
        interactionsComplete: false
      };

      const [listOfdata,setlistOfdata] = useState(null)
      const [reload,setReload] = useState(true)
      
      const [openModal, setOpenModal] = useState(false)
      const [opacity,setOpacity] = useState(1)
      
      const itemActionId = useRef(null)
      const stopDate = useRef(null)
      const notificationContent = useRef(null)
      const notificationTitle = useRef(null)

      const [scrollItems,setScrollItems] = useState(<Spinner/>)
  

    async function listButtonPressed(action,itemId){
          let items = listOfdata?listOfdata: await getData('@myMedListSlipInfo');
          items = [...items['slipInfo']];
          let item = getItem(items,itemId);
          switch (action){
              case "delete":

                itemActionId.current=(itemId)
                notificationTitle.current=(appDescription.reconcileListDeleteDescription)
                notificationContent.current=(                 
                                 <ReconcileItems      

                                      refreshHandler={()=> {}}
                                      listButton={false}
                                      data={[item]}
                                      dataKeys={state.dataKeys}
                                      itemlen={4}
                                      itemLabels={state.itemLabels}
                                      sortIndex={0}
                                      onPress={()=>{}}
                                      refresh={()=>{}}/>)
                
                setOpacity(0.2)
                setOpenModal(true)
                break
              case "edit":
        
                  setTimeout(async()=>{
                      props.navigation.navigate(appLabels.addSlipTitle,{
                      item:item,key:itemId
                    })
                  },300)
                break  
              
              case 'view':

                
                let uri = item?item[itemId]["medicationDetails"]["imageData"].uri:null

                  if(uri){
                    notificationContent.current=(
                          <Image 
                          source={{uri:uri}}
                          style={{width:200,height:400}}
                          />
                         
                      )
                      notificationTitle.current=('Slip photo')
                      setOpenModal(true)
                  }else{

                  }

                  
          }    
    } 
    //import item list
    async function getSlipInfoData(){
            const slipInfoData = await getData('@myMedListSlipInfo')
            if(slipInfoData !== null){
              refresh(true,slipInfoData,0)
            }else{
              setOpacity(0.2)
              notificationTitle.current=(appDescription.reconcileListAddItemDescription)
              setOpenModal(true)
              setScrollItems(null)
            }
    }

    //handel notification and dialog box
    function onChangeDate(rootKey,childKey, value){
      stopDate.current=(value)
    }
    function getCurrentDate(){
       if(stopDate.current){
          return stopDate.current
       }else{
        let date=new Date()
        let dateFormatted =  date.toLocaleDateString("en-US");
        return dateFormatted
       }
    }
    function dialogConfirmed(data,confirmed){
      setOpenModal(false)
      setOpacity(1)
      if(confirmed&&(notificationTitle.current != appDescription.reconcileListAddItemDescription)){
         if(notificationTitle.current == formInputLabel.stopDate){
            let items = listOfdata
            let date = stopDate.current != null? stopDate.current : new Date().toLocaleDateString("en-US")
            let updatedItems = removeItem(items,itemActionId.current,date);
            saveData(updatedItems,"@myMedListSlipInfo")
            itemActionId.current=(null)
            notificationContent.current=(null)
            stopDate.current=(null)
            setReload(!reload)
        }else if(listOfdata === null){
            props.navigation.navigate(appLabels.addPhotoTitle)
        }else if(notificationTitle.current == appDescription.reconcileListDeleteDescription){
          notificationTitle.current=formInputLabel.stopDate
          notificationContent.current=(<SolidInput  width={"100%"} 
                          inputLabel={formInputLabel.stopDate}
                          childKey={"stopDate"}
                          rootKey = {"medicationDetails"}
                          iconName={"dateRange"}
                          func="datePicker"
                          editAble={false}
                          onChangeText={onChangeDate}
                          inputContent={getCurrentDate}/>)
          setOpenModal(true)
          setOpacity(0.2)
        }
      }else{
         notificationContent.current=(null)
      }

    }

    function refresh(reload,data,sortIndex){
     
      
      setlistOfdata(data);
      setScrollItems(
      
      <View style={{opacity:opacity}}>

                  <ReconcileItems      

                                    refreshHandler={()=> getSlipInfoData()}
                                     listButton={true}
                                     data={data["slipInfo"]}
                                     dataKeys={state.dataKeys}
                                     itemlen={4}
                                     itemLabels={state.itemLabels}
                                     listButtonPressed={listButtonPressed}
                                     sortIndex={sortIndex}
                                     onPress={sort}
                                     refresh={reload}/>
            </View>
            
            
            )
    }

    async function sort(index){
      if(listOfdata != null){
        refresh(false,listOfdata,index)
      }else{
        const slipInfoData = await getData('@myMedListSlipInfo')
        refresh(false,slipInfoData,index)
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
      <ScrollView horizontal={false}>
        <View>
        
              {scrollItems}

        </View> 
        <Notification
                            modalVisible={openModal}
                            onPress={dialogConfirmed}
                            pTitle={notificationTitle.current}
                            lTitle={appLabels.ok}
                            rTitle={appLabels.cancel}
                            data={notificationContent.current} 
                />       
    </ScrollView>
    );
  
}

