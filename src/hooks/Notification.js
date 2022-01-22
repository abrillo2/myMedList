import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";
import { makeHtmlBody, createPDF } from '../helpers/shareHelper';

import SolidInput from '../components/SolidInput';
import TwinButtonContainer from '../components/TwinButtonContainer';

const Notification = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);

  const pressed=async(confirmed)=>{
    props.onPress(data,confirmed)
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

            <Text style={styles.modalText}>{props.pTitle}</Text>
            {props.data}
            {props.showTwin ? <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label={props.lTitle} 
                                     onPress={()=> pressed(true)}/>
                <TwinButtonContainer label={props.rTitle}
                                     onPress={()=> pressed(false)} />
            </View>:<View style={styles.twinButtonContainer}><TwinButtonContainer label={props.sTitle} 
                                     onPress={()=> pressed(true)}/></View>}
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notification;