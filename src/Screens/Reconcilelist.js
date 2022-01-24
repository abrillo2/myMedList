import React, {Suspense,useEffect,useState} from 'react';
import {View} from 'react-native';
import { Bullets} from 'react-native-easy-content-loader';
import {getData, saveData} from '../helpers/AsyncHelper';
import { removeItem,getItem} from '../helpers/editItemHelper';

//import header section
import  HeaderSection  from '../components/HeaderSection';
//import body style
import ReconcileStyle from '../../assets/styles/ReconcileStyle';
import { useIsFocused } from '@react-navigation/native';
//import notification modal
import  Notification from '../hooks/Notification'
import SolidInput from '../components/SolidInput';
//static items
import appLabels,{appDescription,formInputLabel,appScreenName} from '../../assets/static_resources/strings';
export default function Reconcilelist(props) {

    const isFocused = useIsFocused();
    const state = {
      itemLabels : ["Medicine", "Date Filled", "Doctor", "Refills Left"],
      dataKeys:['["medicationDetails"]["name"]','["medicationDetails"]["dateRefilled"]',
                 '["physicianDetails"]["name"]','["medicationDetails"]["refillsLeft"]'],
        interactionsComplete: false
      };

      const [listOfdata,setlistOfdata] = useState(null)
      const [dataFetched, setdataFetched] = useState(false)
      const [dataChanged, setdataChanged] = useState(false)
      const [openModal, setOpenModal] = useState(false)
      const [opacity,setOpacity] = useState(1)
      const [formData,setFormData] = useState(null)
      const [stopDate,setStopDate] = useState(null)
      const [notificationContent, setNotificationContent] = useState(null)
      const [notificationTitle,setNotificationTitle] = useState(appDescription.reconcileListDeleteDescription)
      const [sortIndex,setSortIndex] = useState(0)

    //import lazy component
    const [ScrollabelItemContainer,setScrollabelItemContainer]= useState(null)

    function listButtonPressed(action,itemId){

          switch (action){
              case "delete":
                setFormData(itemId)
                setOpenModal(true)
                setOpacity(0.2)
                break
              case "edit":
                let items = [...listOfdata["slipInfo"]]
                let item = getItem(items,itemId)
                props.navigation.navigate(appScreenName.addSlipInfo,{
                  item:item,key:itemId
                })
                break  
          }    
    }

    function getComponent(){
      setScrollabelItemContainer(React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 1 * 100)).then(
          () => import("../components/ScrollabelItemContainer")
        );
      }));

    } 
    //import item list
    async function getSlipInfoData(){
        
          
          const slipInfoData = await getData('@myMedListSlipInfo')
            if(slipInfoData !== null){
              setlistOfdata(slipInfoData);
              setdataFetched(true)
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
            props.navigation.navigate(appScreenName.addSlip)
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
          getComponent();
          getSlipInfoData();
        }
        return () => {
        }
      }, [sortIndex,dataChanged,useIsFocused()]);

    return (
    <View style={[ReconcileStyle.reconcilelist]}>
       
        {/** APP BAR View begins */}
        <HeaderSection Title={appLabels.reconcileButton} navigation={props.navigation}/>
        {/** APP BAR View ends */}
        <View style={{opacity:opacity}}>
                  {/** RECONCILE list view begins */}
                  <Suspense fallback={<Bullets active  listSize={dataFetched ? listOfdata["slipInfo"].length:10}/>}>
                    {dataFetched ? <ScrollabelItemContainer  
                                        listButtonPressed={listButtonPressed}
                                        listButton={true}
                                        data={listOfdata["slipInfo"]}
                                        itemlen={4}
                                        itemLabels={state.itemLabels}
                                        dataKeys={state.dataKeys}
                                        onPress={sort}
                                        sortIndex={sortIndex}/>:
                    null}
                  </Suspense>

            </View>
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
    </View>
    );
  
}

