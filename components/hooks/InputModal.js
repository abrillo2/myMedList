import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";

import SolidInput from '../../components/SolidInput';
import TwinButtonContainer from '../../components/TwinButtonContainer';

const InputModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const pressed=(params)=>{
       if(params){
           props.onPress(modalData)
       }else{
           props.onPress(null)
       }
  }

  const onChangeInput=(rootKey,childKey,value)=>{
    let tempData = {...modalData}
    tempData[rootKey] = {...tempData[rootKey],[childKey]:value}
    setModalData(tempData)
  }

  const inputContent=(rootKey,childKey)=>{
      return null
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                      <SolidInput  width={"90%"} 
                                 inputLabel={"Name"}
                                 childKey={"name"}
                                 rootKey = {"sharedWith"}
                                 onChangeText={onChangeInput}
                                 inputContent={inputContent}
                                 />
            <SolidInput  width={"90%"} 
                                 inputLabel={"Email"}
                                 childKey={"email"}
                                 rootKey = {"sharedWith"}
                                 onChangeText={onChangeInput}
                                 inputContent={inputContent}
                                 />
            <View style={styles.twinButtonContainer}>
                <TwinButtonContainer label="Preview" 
                                     disabled={false}
                                     onPress={()=> pressed(true)} />
                <TwinButtonContainer label="Cancel"
                                     onPress={()=> pressed(false)} 
                                     disabled={false}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputModal;