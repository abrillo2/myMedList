import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";
import { makeHtmlBody, createPDF } from '../../components/helpers/shareHelper';

import SolidInput from '../../components/SolidInput';
import TwinButtonContainer from '../../components/TwinButtonContainer';

const InputModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [buttonState, setButtonState] = useState(true);

  const pressed=async(params)=>{
       if(params){
            props.onPress()

            let shareInfo = modalData["sharedWith"]
            let saredWithLabel = []

            Object.keys(shareInfo).forEach( key => {
                saredWithLabel.push(shareInfo[key])
            })

            const statusShare = props.status
            let htmlString = await makeHtmlBody(statusShare,saredWithLabel,props.listOfdata)
            let pdfURIString = await createPDF(htmlString)

            props.navigation.navigate("PdfViewer",{
                pdfURI:pdfURIString,
                client:[props.client,shareInfo[props.client],statusShare]
            })            
      
       }else{
           props.onPress()
       }
  }

  const onChangeInput=(rootKey,childKey,value)=>{
    console.log("value is",childKey)
    childKey != "name"  && value ? setButtonState(false) :  setButtonState(true) 
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
        case "whatsUp":
          inputLabel.push("WhatsUp Phone")
          inputLabel.push("phone-pad")
          break;
        case "email":
          inputLabel.push("Email Address")
          inputLabel.push("email-address")
          break;
        case "sms":
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

            <Text style={styles.modalText}>Sharing Trough {props.client}</Text>
            <SolidInput  width={"90%"} 
                                 inputLabel={"Name"}
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
                <TwinButtonContainer label="Preview" 
                                     disabled={false}
                                     onPress={()=> pressed(true)}
                                     disabled={buttonState}/>
                <TwinButtonContainer label="Cancel"
                                     onPress={()=> pressed(false)} 
                                    />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputModal;