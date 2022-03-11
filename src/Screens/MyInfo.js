import React, {useEffect,useState} from 'react';
import {FlatList,View,Keyboard} from 'react-native';
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
import appLabels,{appDescription} from '../../assets/static_resources/strings'
import appObjects,{myInfoFormLabels} from '../../assets/static_resources/objects';

import { getUserInfo,saveUserProfile,required,onchangeInput,requiredFieldsFullfilled} from '../helpers/MyinfoHelper';
import { getSuggesion } from '../helpers/AddSlipDetailsHelper';
import { UseOrientation } from '../hooks/UserORientation';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const requiredItems =appObjects.myInfoRequiredItems

export default function MyInfo(props){
 

  let halfList = []

  const [isRequired, setIsRequired] = useState(true)
  const [spinnerOn, setSpinnerOn] = useState(true)

  const formInputData = React.useRef(null)

  const[openModal,setOpenModal]=useState(false)
  const [modalData, setModalData]=useState(null)

  const[suggesstions,setSuggestions]=useState(null)

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const orientation = UseOrientation();


  useEffect(() => {
    if(suggesstions == null || formInputData.current == null){
      loadData()
    }else{
      spinnerOn? null : setSpinnerOn(false)
    }

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );



  return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
  }
}, [suggesstions]);
  
  function onChangeData(rootKey,childKey, value,reload){

    let tempData = onchangeInput(formInputData.current,rootKey,childKey,value)
    formInputData.current=(tempData)

    if(requiredFieldsFullfilled(tempData)){
      setIsRequired(false)
    }

    if(reload){
      props.navigation.setParams({formInputData:formInputData.current})
    }
  }
  function getDataCurrent(parent,child){
    
    let val =  getUserInfo(parent,child,formInputData.current);
    return val;
  }

  async function loadData(){

    let data = await getData("@myMedListMyInfo");
    if(data!=null && formInputData.current == null){
      formInputData.current=({...data["myInfo"]})
    }
    let suggessions = await getData('@suggession')
    setSuggestions(suggessions)
    setSpinnerOn(false);

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
          await saveUserProfile(formInputData.current)
          formInputData.current=null
          loadData()
          props.navigation.navigate(appLabels.homeTitle)
         
        }else{
          //props.navigation.navigate(appLabels.homeTitle)
        }
    }

    renderCell = ({ index, style, ...props }) => {
      const { currentDragIndex } = this.state;
      const zIndex = {
          zIndex: index === currentDragIndex ? 2 : 0,
        };
    
        return <View style={[style, zIndex]} {...props} />;
      };

    return (
      spinnerOn?<Spinner/>:<View style={{flex:1}}>
            
            <FlatList

                  keyboardShouldPersistTaps={'always'}
                  removeClippedSubviews={false}
                  data={myInfoFormLabels.folds}
                  extraData={spinnerOn}
                  keyExtractor={(item,index)=> {
                       return "fold"+index+item.title
                  }}
                  renderItem={({ item ,index}) => (
                    <Fold labelTitle = {item.title} index={index}>
                      {
                        <FlatList
                         data={item.content}
                         removeClippedSubviews={false}
                         keyboardShouldPersistTaps={'always'}
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
                            editAble={item.editAble !=null? item.editAble:true}
                            data={item.data? item.data:null}

                            suggessions={item.suggessions?( getSuggesion(item.suggessions)):null}

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

                              suggessions={item.suggessions?( getSuggesion(item.suggessions)):null}
                                
                              
                            keyboard={item.keyboard?item.keyboard:'default'}
                              iconName={item.iconName? item.iconName:null}
                              func={item.func? item.func:null}
                              editAble={item.editAble!=null? item.editAble:true}
                              data={item.data? item.data:null}
                              inputType={item.inputType? item.inputType:null}/>
                              
                        
                              </View>
                          )}/>}



                          
                    </Fold>
                  )}/>

                 {isKeyboardVisible?null: <View  style={styles.twinButtonContainer}>
                  <Button buttonLabel={appLabels.cancel} 
                      disabled={false}
                      onPress={cancelPressed}
                      h={2}
                      w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>

                  <Button buttonLabel={appLabels.save} 
                      disabled={isRequired}
                      onPress={savePressed}
                      h={2}
                      w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>
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