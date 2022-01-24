import React, {useEffect,useState} from 'react';
import { Modal, Text, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";
import { makeHtmlBody, createPDF } from '../helpers/shareHelper';
import { useIsFocused } from '@react-navigation/native';

import SolidInput from '../components/SolidInput';
import Button from '../components/Button';
//static resources
import appLabels, { formInputLabel } from "../../assets/static_resources/strings";

export default function InputModal(props){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [buttonState, setButtonState] = useState(true);
  const isFocused = useIsFocused();

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
            props.onPress()

            let shareInfo = modalData["sharedWith"]
            let saredWithLabel = []

            Object.keys(shareInfo).forEach( key => {
                saredWithLabel.push(shareInfo[key])
            })
            const statusShare = props.status
            let htmlString = await makeHtmlBody(statusShare,saredWithLabel,props.listOfdata,props.client)
            let pdfURIString = await createPDF(htmlString,statusShare)
            props.navigation.navigate("PdfViewer",{
                pdfURI:pdfURIString,
                client:[props.client,shareInfo[props.client],statusShare]
            })            
            setModalData(null)
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
          <View style={styles.modalView}>

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
                                 rootKey = {"sharedWith"}
                                 onChangeText={onChangeInput}
                                 inputContent={inputContent}
                                 />
            <View style={styles.twinButtonContainer}>
                <Button buttonLabel={appLabels.preview} 
                        disabled={false}
                        onPress={()=> pressed(true)}
                        disabled={buttonState}
                        h={1}
                        w={120}/>
                <Button buttonLabel={appLabels.cancel}
                        onPress={()=> pressed(false)} 
                        h={1}
                        w={120}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}