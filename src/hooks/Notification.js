import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import styles from "../../assets/styles/NotficationModalStyle";

import Button from '../components/Button';

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
            <View style={styles.twinButtonContainer}>
                <Button buttonLabel={props.lTitle} 
                        onPress={()=> pressed(true)}
                        h={2}
                        w={100}
                        />
                <Button buttonLabel={props.rTitle}
                        onPress={()=> pressed(false)}
                        h={2}
                        w={100}
                        />
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notification;