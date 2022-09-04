import React, {useEffect,useState} from 'react';
import { Modal, Text, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";
import { makeHtmlBody, createPDF } from '../helpers/shareHelper';
import { useIsFocused } from '@react-navigation/native';

import SolidInput from '../components/SolidInput';
import Button from '../components/Button';
import Spinner from '../helpers/Spinner'
//static resources
import appLabels, { formInputLabel } from "../../assets/static_resources/strings";
import { UseOrientation } from './UserORientation';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function InputModal(props){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [buttonState, setButtonState] = useState(true);
  const isFocused = useIsFocused();
  const [spinnerOn,setSpinner] = useState(false)

  const orientation = UseOrientation();

  useEffect(() => {
    let btS = checkRequiredFilds()
    if(isFocused){
      if(btS != buttonState){
        setButtonState(btS)
      }
    }
    return () => {
    }
  }, [props.modalVisible,modalData]);

  const pressed=async(params)=>{
       if(params){
            setSpinner(true)

            let shareInfo = modalData["sharedWith"]
            let saredWithLabel = []

            Object.keys(shareInfo).forEach( key => {
                saredWithLabel.push(shareInfo[key])
            })
            const statusShare = props.status
            let htmlString = await makeHtmlBody(statusShare,saredWithLabel,props.listOfdata,props.client)
            let pdfURIString = await createPDF(htmlString,statusShare)
            
            setModalData(null)
            setSpinner(false)
            props.onPress()
            
            props.navigation.navigate(appLabels.PdfViewerTitle,{
                pdfURI:pdfURIString,
                client:[props.client,shareInfo[props.client],statusShare,shareInfo['name']]
            })
       }else{
           
           props.onPress()
           setModalData(null)
       }
  }

  const checkRequiredFilds=()=>{
    
    if(modalData){
      if(modalData["sharedWith"]){
        if(modalData["sharedWith"][props.client]){
            if(modalData["sharedWith"][props.client] != ""){
              return false
            }else{
              return true
            }
        }else{
            return true
        } 
      }
    }
    return true;
  }

  const onChangeInput=(rootKey,childKey,value)=>{
    let tempData = {...modalData}
    tempData[rootKey] = {...tempData[rootKey],[childKey]:value}
    
    setModalData(tempData)
  }

  const inputContent=(rootKey,childKey)=>{
      return null
  }

  const makeClientInputlabel=()=>{
      let inputLabel = []
      switch(props.client){
        case appLabels.whatsApp:
          inputLabel.push("WhatsUp phone")
          inputLabel.push("phone-pad")
          break;
        case appLabels.email:
          inputLabel.push("Email address")
          inputLabel.push("email-address")
          break;
        case appLabels.sms:
          inputLabel.push("SMS phone")
          inputLabel.push("phone-pad")
          break;
        default:
          break;
      } 
      return inputLabel;
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
{spinnerOn?<Spinner/>:          <View style={styles.modalView}>

            <Text style={styles.modalText}> {appLabels.sharingVia+" "+props.client}</Text>
            <SolidInput  width={"90%"} 
                                 inputLabel={formInputLabel.name}
                                 childKey={"name"}
                                 rootKey = {"sharedWith"}
                                 onChangeText={onChangeInput}
                                 inputContent={inputContent}
                                 />
            <SolidInput  width={"90%"} 
                                 inputLabel={makeClientInputlabel()[0]}
                                 keyboard={makeClientInputlabel()[1]}
                                 childKey={props.client}
                                 func = {(props.client == appLabels.whatsApp) | (props.client == appLabels.sms)?"selectContact":null}
                                 iconName={(props.client == appLabels.whatsApp) | (props.client == appLabels.sms)?"contacts":null}
                                 editAble={props.client == appLabels.whatsApp?true:true}
                                 rootKey = {"sharedWith"}
                                 onChangeText={onChangeInput}
                                 inputContent={inputContent}
                                 />
            <View style={styles.twinButtonContainer}>
                <Button buttonLabel={appLabels.preview}
                        onPress={()=> pressed(true)}
                        disabled={buttonState}
                        h={2}
                        w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>
                <Button buttonLabel={appLabels.cancel}
                        onPress={()=> pressed(false)} 
                        h={2}
                        w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>
            </View>
          </View>}
        </View>
      </Modal>
    </View>
  );
}