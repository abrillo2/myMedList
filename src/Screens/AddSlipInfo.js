import React, {useState,useEffect} from 'react';
import {FlatList,View} from 'react-native';

//components import
import HalfInputContainer from '../components/HalfInputContainer';
import Fold from '../callBacks/Fold';
import SlipPicEditContainer from '../components/SlipPicEditContainer';
import Spinner from '../helpers/Spinner'
import Button from '../components/Button';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle'
//import notification modal
import  Notification from '../hooks/Notification'
import ItemReviewList from '../helpers/ItemReviewList';
//static resources
import appObjects,{slipInfoFormLabels} from '../../assets/static_resources/objects'
import appLabels,{appDescription} from '../../assets/static_resources/strings'
//helpers
import { handelOption } from '../helpers/UpdateSlipHelper';
import HeaderSection from '../components/HeaderSection';
import {getNavData,getCurrentData,
        prepSaveData,required,
        loadSavedData,
        onChangeInputData,isUpdateAble,requiredFieldsFullfilled} from '../helpers/AddSlipDetailsHelper'
import { removeFile } from '../hooks/FsManager';


export default function AddSlipInfo(props){

        
        let halfList = []

        const  requiredItems = appObjects.addSlipInfoRequiredItems


        const[openModal,setOpenModal]=useState(false)
        const [modalData, setModalData]=useState(null)
        const[opacity,setopacity]=useState(1)
        const[formData,setformData]=useState(null)
        const[imageData,setimageData]=useState(null)
        const [itemKey,setItemKey] = useState(null)

        const[spinnerOn,setspinnerOn]=useState(true)
        const[refresh,setrefresh]=useState(false)
        const [isRequired, setIsRequired] = useState(true)



  useEffect(() => {


        loadData()
        return () => {
      }
      }, [props.route.params.key,props.route.params.imageData]);
       
   
  /****
   * init screen
   */
  function loadData(){
    let currentData = getNavData(props.route)
    if(currentData){
      

      setformData(loadSavedData(currentData,props))
      setItemKey(props.route.params.key)
      // updateAbleItems:appObjects.addSlipInfoUpdateableItems,
      props.navigation.setOptions({
        header:() => {
          return <HeaderSection navigation={props.navigation} Title={appLabels.addSlipTitle} 
          onPressOption={handelOptionMenu}
                />;
        },
      });
    }else{
      console.log(" key response  ", props.route.params.imageData)    
      onChangeData("medicationDetails","dateAdded",new Date().toLocaleDateString("en-US"))
      onChangeData("medicationDetails","imageData",props.route.params.imageData)

    }

    setspinnerOn(false)

  }

  /**************
   * check if refresh was recently called
   */

  function stopRefresh(){

       if(refresh){
         setrefresh(false)
       }

  }

  /**********************
   * 
   * handel option
   */
   async function handelOptionMenu(item){
    setspinnerOn(true)
    let response = await handelOption(item, props.navigation,props.route.params.key,"@myMedListSlipInfo")
    
    if(response){
      if(response.key == itemKey){
        setspinnerOn(false)
      }
    }
  }



  /*************************************
   * track form input value change
   */
   function onChangeData(rootKey,childKey, value){ 
    let formDataUpdated = onChangeInputData(formData,rootKey,childKey, value)
    if(requiredFieldsFullfilled(formDataUpdated)){
      setIsRequired(false)
    }
    setformData(formDataUpdated)
    props.navigation.setParams({slipData:{...formDataUpdated}})
    
  }
  /*******************************
   * parse data from navigation params
   * or return image or null
   */
   function getDataCurrent(parent,child){
    
    return getCurrentData(formData, parent,child)
  }
  /**************************
   * track pop up 
   */
   function saveDataConfirmed(data,confirmed){

    setOpenModal(false)
    setopacity(1)

    if(confirmed){

      setspinnerOn(true)
      prepSaveData(formData,itemKey)

      setTimeout(()=>{
        props.navigation.navigate(!confirmed ?appLabels.reconcileTitle: appLabels.homeTitle)},500)}

  }
  /******************************
   * save/update slip info
   */
   function saveData(){

    setModalData(
      <ItemReviewList
          data={slipInfoFormLabels.folds}
          getDataCurrent={getDataCurrent}
      />
    )
    setOpenModal(true)
  }

return (

      spinnerOn? <Spinner/>:
      <View style={{flex:1}}>


      <FlatList
        data={[1]}
        removeClippedSubviews={false}
        extraData={refresh}
        renderItem={({ item, index }) => (    
          
          
        <View style={{opacity:opacity}}>
        <SlipPicEditContainer
          childKey={"imageData"}
          rootKey = {"medicationDetails"}
          onChangeText={onChangeData}
          inputContent={(root,child)=>props.route.params.imageData?props.route.params.imageData:getDataCurrent(root,child)}
          loadKey={itemKey}
          updateAble={itemKey?isUpdateAble(item.childKey):true}/> 

              <FlatList
                  data={slipInfoFormLabels.folds}
                  extraData={itemKey}
                  removeClippedSubviews={false}
                  renderItem={({ item, index }) => (

                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         extraData={itemKey}
                         renderItem={({ item, index }) => 

                           
                          item.group ? 
                          
                         
                          item.group.map((item,index)=>{

                              

                              let content =   <HalfInputContainer  
                                width={"49%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble!=null?item.editAble:null}
                                keyboard={item.keyboard!=null?item.keyboard:'default'}

                                inputType={item.inputType!=null?item.inputType:'default'}
                                data={item.data!=null?item.data:'default'}
                                
                                
                                inputContent={getDataCurrent}
                                onChangeText={onChangeData}
                                updateAble={itemKey?isUpdateAble(item.childKey):true}
                                required = {required}/>
                                
                                halfList.push(content)
                                if(halfList.length >= 2){
                                  let listCp = [...halfList]
                                  halfList = []
                                 return (<View style={styles.hallfInputContainer}>
                                                {listCp}
                                       </View>)

                                  
                                }

                              })
                          :( <View style={styles.hallfInputContainer}><HalfInputContainer  
                                width={"100%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble!=null?item.editAble:null}
                                keyboard={item.keyboard!=null?item.keyboard:'default'}
                                inputType={item.inputType!=null?item.inputType:'default'}
                                data={item.data!=null?item.data:'default'}
                                
                                inputContent={getDataCurrent}
                                onChangeText={onChangeData}
                                updateAble={itemKey?isUpdateAble(item.childKey):true}
                                required = {required}/></View>
                          )}/>}
                    </Fold>
                  )}/></View>
    )}/>


            
            {props.route.params.key?null:<View  style={styles.twinButtonContainer}>
                  <Button buttonLabel={appLabels.cancel} 
                      disabled={false}
                      onPress={()=>{
                          
                        
                          if(!props.route.params.key && props.route.params.imageData){
                            removeFile(props.route.params.imageData.uri)
                          }else{
                             
                          }
                          props.navigation.goBack()

                        }}
                      h={2}
                      w={120}
                      />

                <Button buttonLabel={appLabels.save} 
                      disabled={isRequired}
                      onPress={saveData}
                      h={2}
                      w={120}/>
                  </View>}
                  <Notification
                modalVisible={openModal}
                data={modalData}
                onPress={saveDataConfirmed}
                pTitle={appDescription.addSlipInfoSaveDescription}
                lTitle={appLabels.yes}
                rTitle={appLabels.no}
                showTwin={true}
            /> 
            </View>
      );

}