import React, {useEffect,useState} from 'react';
import {FlatList,View} from 'react-native';
import {getData} from '../helpers/AsyncHelper'


//components import
import Button from '../components/Button';
import Fold from '../callBacks/Fold';
import SolidInput from '../components/SolidInput';
import Spinner from '../helpers/Spinner';
import ItemReviewList from '../helpers/ItemReviewList';
import Notification from '../hooks/Notification';
//styles
import styles from '../../assets/styles/AddSlipInfoStyle';
//static resources
import appLabels,{appDescription, appMessages} from '../../assets/static_resources/strings'
import appObjects,{myInfoFormLabels} from '../../assets/static_resources/objects';

import { getUserInfo,saveUserProfile,required,onchangeInput,requiredFieldsFullfilled} from '../helpers/MyinfoHelper';
const requiredItems =appObjects.myInfoRequiredItems

export default function MyInfo(props){
 

  let halfList = []

  const [isRequired, setIsRequired] = useState(true)
  const [savedData, setSavedData] = useState(null)
  const [spinnerOn, setSpinnerOn] = useState(false)

  const [formInputData, setFormInputData] = useState(null)

  const[openModal,setOpenModal]=useState(false)
  const [modalData, setModalData]=useState(null)


  useEffect(() => {
    if(savedData == null){
      loadData()
    }else{
      spinnerOn? null : setSpinnerOn(true)
    }
  return () => {
  }
}, [savedData]);
  
  function onChangeData(rootKey,childKey, value){

    let tempData = onchangeInput(formInputData,rootKey,childKey,value)
    setFormInputData(tempData)

    if(requiredFieldsFullfilled(tempData)){
      setIsRequired(false)
    }

  }
  function getDataCurrent(parent,child){
    
    return getUserInfo(parent,child,formInputData)
  }

  function saveDataCurrent(data,currentData){
    //setSpinnerOn(true)
    saveUserProfile(formInputData)

    setTimeout(()=>{
      //setSpinnerOn(false)
      props.navigation.navigate(appLabels.homeTitle)},200)
  }

  async function loadData(){

    let data = await getData("@myMedListMyInfo");
    
    data = JSON.parse(data)
    if(data!=null && savedData == null){
     setSavedData({...data["myInfo"]})
     setFormInputData({...data["myInfo"]})
    }

  }

    /*******************************
   *  Handel Form Submission
   *****************************/
  function cancelPressed(){
      props.navigation.goBack()
    }
  async function savePressed(){
     

        setModalData(
          <ItemReviewList
              data={myInfoFormLabels.folds}
              getDataCurrent={getDataCurrent}
          />
        )
      setOpenModal(true)
    }

    async function saveDataConfirmed(data,confirmed){
        setOpenModal(false)
        if(confirmed){
          await saveUserProfile(formInputData)
          props.navigation.navigate(appLabels.homeTitle)
        }else{
          
        }
    }

    return (
      savedData == null?<Spinner message={appMessages.savingMyInfo}/> :
      <View style={{flex:1}}>
            
            <FlatList
                  removeClippedSubviews={false}
                  data={myInfoFormLabels.folds}
                  extraData={spinnerOn}
                  keyExtractor={(item,index)=> {
                       return "fold"+index+item.title
                  }}
                  renderItem={({ item ,index}) => (

                    <View>
                    <Fold labelTitle = {item.title}>
                      {
                        <FlatList
                         data={item.content}
                         removeClippedSubviews={false}
                         extraData={spinnerOn}
                         keyExtractor={(item,index)=> {
                              return item.group ? "group:"+index+item.group.length:
                                     "item:"+index+item.childKey + item.rootKey
                          }}
                         renderItem={({ item, index }) => 

                           
                          item.group ?

                          item.group.map((item,index)=>{

                              

                            let content =   <SolidInput key={"item:"+index+item.rootKey+':'+item.childKey}
                            width={item.width} 
                            inputLabel={item.inputLabel}
                            onChangeText={onChangeData}
                            childKey={item.childKey}
                            rootKey = {item.rootKey}
                            inputContent={getDataCurrent}
                            required = {required}
                            keyboard={item.keyboard?item.keyboard:'default'}
                            iconName={item.iconName? item.iconName:null}
                            func={item.func? item.func:null}
                            editAble={item.editAble? item.editAble:true}
                            data={item.data? item.data:null}
                            inputType={item.inputType? item.inputType:null}/>
                              
                              halfList.push(content)
                              
                              if(halfList.length >= 2){
                                let listCp = [...halfList]
                                halfList = []
                               return (<View style={styles.hallfInputContainer}>
                                              {listCp}
                                     </View>)

                                
                              }

                            })
                          :(<View style={styles.hallfInputContainer}><SolidInput  key={"item:"+index+item.rootKey+':'+item.childKey}
                              width={item.width} 
                              inputLabel={item.inputLabel}
                              onChangeText={onChangeData}
                              childKey={item.childKey}
                              rootKey = {item.rootKey}
                              inputContent={getDataCurrent}
                              required = {required}
                              
                            keyboard={item.keyboard?item.keyboard:'default'}
                              iconName={item.iconName? item.iconName:null}
                              func={item.func? item.func:null}
                              editAble={item.editAble? item.editAble:true}
                              data={item.data? item.data:null}
                              inputType={item.inputType? item.inputType:null}/>
                              
                        
                              </View>
                          )}/>}



                          
                    </Fold>
                  </View>
                  )}/>

                  <View  style={styles.twinButtonContainer}>
                  <Button buttonLabel={appLabels.cancel} 
                      disabled={false}
                      onPress={cancelPressed}
                      h={2}
                      w={120}
                      />

              <Button buttonLabel={appLabels.save} 
                      disabled={isRequired}
                      onPress={savePressed}
                      h={2}
                      w={120}/>
                  </View>


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