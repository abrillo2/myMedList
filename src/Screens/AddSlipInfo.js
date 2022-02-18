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
import ItemReviewList from '../helpers/ItemReviewList'
//static resources
import {slipInfoFormLabels} from '../../assets/static_resources/objects'
import appLabels,{appDescription} from '../../assets/static_resources/strings'
//helpers
import { handelOption } from '../helpers/UpdateSlipHelper';
import HeaderSection from '../components/HeaderSection';
import {getNavData,getCurrentData,
        prepSaveData,required,
        loadSavedData,
        getSuggesion,
        onChangeInputData,isUpdateAble,requiredFieldsFullfilled} from '../helpers/AddSlipDetailsHelper'
import { removeFile } from '../hooks/FsManager';
import { getData } from '../helpers/AsyncHelper';
import { useIsFocused } from '@react-navigation/native';


export default function AddSlipInfo(props){

        
        let halfList = []


        const focused = useIsFocused()

        const[openModal,setOpenModal]=useState(false)
        const [modalData, setModalData]=useState(null)
       
        const formData = React.useRef(null)
       
        const[suggesstions,setSuggestions]=useState([])
        const [itemKey,setItemKey] = useState(null)

        const[spinnerOn,setspinnerOn]=useState(true)
        const [isRequired, setIsRequired] = useState(true)



  useEffect(() => {
      
        if(focused)
        {loadData()}
        return () => {
      }
      }, [props.route.params.key,props.route.params.imageData]);
       
   
  /****
   * init screen
   */
  async function loadData(){
    let currentData = getNavData(props.route)
    if(currentData){
      

      formData.current = loadSavedData(currentData,props)
      setItemKey(props.route.params.key)
      props.navigation.setOptions({
      
        header:() => {
          return <HeaderSection navigation={props.navigation} Title={appLabels.addSlipTitle} 
          onPressOption={handelOptionMenu}
                />;
        },
      });
    }else{ 
      onChangeData("medicationDetails","dateAdded",new Date().toLocaleDateString("en-US"))
      onChangeData("medicationDetails","imageData",props.route.params.imageData)

    }
    let suggessions = await getData('@suggession')
    setSuggestions(suggessions)
    setspinnerOn(false)

  }
  /**********************
   * 
   * handel option
   */
   async function handelOptionMenu(item){
    setspinnerOn(true)
    props.navigation.setParams({slipData:{...formData.current}})
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
   function onChangeData(rootKey,childKey, value,reload){ 
    let formDataUpdated = onChangeInputData(formData.current,rootKey,childKey, value)
    if(requiredFieldsFullfilled(formDataUpdated)){
      setIsRequired(false)
    }
    formData.current = formDataUpdated

    if(reload){
      props.navigation.setParams({slipData:{...formData.current}})
    }

  }
  /*******************************
   * parse data from navigation params
   * or return image or null
   */
   function getDataCurrent(parent,child){
    
    return getCurrentData(formData.current, parent,child)
  }
  /**************************
   * track pop up 
   */
   async function saveDataConfirmed(data,confirmed){

    setOpenModal(false)
    if(confirmed){
      setspinnerOn(true)
      await prepSaveData(formData.current,itemKey)
 
      setTimeout(()=>{
      props.navigation.navigate(!confirmed ?appLabels.reconcileTitle: appLabels.homeTitle)},500)
    }

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
        keyboardShouldPersistTaps={'always'}
        extraData={props.itemKey}
        renderItem={({ item }) => (    
          
          
        <View>
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
                  keyboardShouldPersistTaps={'always'}
                  removeClippedSubviews={false}
                  keyExtractor={(item,index)=> {
                    return "fold"+index+item.title
               }}
                  renderItem={({ item }) => (

                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         removeClippedSubviews={false}
                         keyboardShouldPersistTaps={'always'}
                         keyExtractor={(item,index)=> {
                          return item.group ? "group:"+index+item.group.length:
                                 "item:"+index+item.childKey + item.rootKey
                          }}
                         extraData={itemKey}
                         renderItem={({ item }) => 

                           
                          item.group ? 
                          
                         
                          item.group.map((item)=>{

                              

                              let content =   <HalfInputContainer  
                                width={"49%"}
                                iconName = {item.iconName?item.iconName:null}
                                iconName2 = {item.iconName2?item.iconName2:null}
                                func={item.func?item.func:null}
                                inputLabel={item.inputLabel}
                                childKey={item.childKey}
                                rootKey ={item.rootKey}
                                editAble={item.editAble!=null?item.editAble:null}
                                keyboard={item.keyboard!=null?item.keyboard:null}
                                inputType={item.inputType!=null?item.inputType:'default'}
                                data={item.data!=null?item.data:'default'}
                                
                                suggessions={item.suggessions?( getSuggesion(suggesstions,item.suggessions)):null}
                                
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
                                data={item.data!=null?item.data:null}
                                
                                suggessions={item.suggessions?(getSuggesion(suggesstions,item.suggessions)):null}
                                
                                inputContent={getDataCurrent}
                                onChangeText={onChangeData}
                                updateAble={itemKey?isUpdateAble(item.childKey):true}
                                required = {required}/></View>
                          )}/>}
                    </Fold>
                  )}/></View>
    )}/>


            
            {props.route.params.key?null:<View  style={[{zIndex:0},styles.twinButtonContainer]}>
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