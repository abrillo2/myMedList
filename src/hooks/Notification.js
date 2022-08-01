import React, { useState } from "react";
import { FlatList, Modal, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styles from "../../assets/styles/NotficationModalStyle";

import Button from '../components/Button';
import { UseOrientation } from "./UserORientation";

const Notification = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);

  const orientation = UseOrientation();

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
        propagateSwipe={true}
      >
    
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
            <FlatList
                data={[1]}
                nestedScrollEnabled={true}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => (
                
              
                  
                  <View style={styles.centeredView}>
        
                    <Text style={styles.modalText}>{props.pTitle}</Text>
                      {props.data}
                        
                   </View>
              
                        )}
            />

<View style={[styles.twinButtonContainer]}>
                <Button buttonLabel={props.lTitle} 
                        onPress={()=> pressed(true)}
                        h={2}
                        w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>
                <Button buttonLabel={props.rTitle}
                        onPress={()=> pressed(false)}
                        h={2}
                        w={ orientation === 'PORTRAIT'?widthPercentageToDP("30%"):heightPercentageToDP("30%")}/>
            </View>
      </View>
   </View>
      </Modal>
    </View>
  );
};

export default Notification;